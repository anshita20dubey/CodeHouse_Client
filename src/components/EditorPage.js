import React, { useEffect, useRef, useState } from "react";
import Client from "./Client";
import Editor from "./Editor";
import { initSocket } from "../Socket";
import { ACTIONS } from "../Actions";
import {
  useNavigate,
  useLocation,
  Navigate,
  useParams,
} from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const LANGUAGES = [
  "python3",
  "java",
  "cpp",
  "nodejs",
  "c",
  "ruby",
  "go",
  "scala",
  "bash",
  "sql",
  "pascal",
  "csharp",
  "php",
  "swift",
  "rust",
  "r",
];

function EditorPage() {
  const [clients, setClients] = useState([]);
  const [output, setOutput] = useState("");
  const [isCompileWindowOpen, setIsCompileWindowOpen] = useState(false);
  const [isCompiling, setIsCompiling] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("python3");
  const [editorTheme, setEditorTheme] = useState('dracula');
  const codeRef = useRef(null);

  const Location = useLocation();
  const navigate = useNavigate();
  const { roomId } = useParams();

  const socketRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      const handleErrors = (err) => {
        console.log("Error", err);
        toast.error("Socket connection failed, Try again later");
        navigate("/");
      };

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: Location.state?.username,
      });

      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, username, socketId }) => {
          if (username !== Location.state?.username) {
            toast.success(`${username} joined the room.`);
          }
          setClients(clients);
          socketRef.current.emit(ACTIONS.SYNC_CODE, {
            code: codeRef.current,
            socketId,
          });
        }
      );

      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
        toast.success(`${username} left the room`);
        setClients((prev) => {
          return prev.filter((client) => client.socketId !== socketId);
        });
      });
    };
    init();

    return () => {
      socketRef.current && socketRef.current.disconnect();
      socketRef.current.off(ACTIONS.JOINED);
      socketRef.current.off(ACTIONS.DISCONNECTED);
    };
  }, []);

  if (!Location.state) {
    return <Navigate to="/" />;
  }

  const copyRoomId = async () => {
    try {
      await navigator.clipboard.writeText(roomId);
      toast.success(`Room ID copied to clipboard`);
    } catch (error) {
      console.log(error);
      toast.error("Failed to copy Room ID");
    }
  };

  const leaveRoom = async () => {
    navigate("/");
  };

  const runCode = async () => {
    setIsCompiling(true);

    // Automatically open the output panel when code execution starts
    if (!isCompileWindowOpen) {
      setIsCompileWindowOpen(true);
    }

    // Clear previous output and show "Running..." message
    setOutput("Running your code...");

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/compile`, {
        code: codeRef.current,
        language: selectedLanguage,
      });
      setOutput(response.data.output || JSON.stringify(response.data));
    } catch (error) {
      setOutput(error.response?.data?.error || error.response?.data?.details || "Compilation error");
    } finally {
      setIsCompiling(false);
    }
  };

  const toggleCompileWindow = () => {
    setIsCompileWindowOpen(!isCompileWindowOpen);
  };

  const toggleTheme = () => {
    setEditorTheme(prevTheme => prevTheme === 'dracula' ? 'default' : 'dracula');
  };

  const isLightTheme = editorTheme === 'default';

  return (
    <div className={`editor-page-container ${isLightTheme ? 'light-theme' : ''}`}>
      {/* Header */}
      <header className="editor-header">
        <div className="header-left">
          <div className="logo-container">
            <div className="flex items-center space-x-3">
              <img
                src='/images/logo_dark.png'
                alt="Codehouse Logo"
                className="h-24 w-auto object-contain"
              />
            </div>
            <span className="logo-text">CodeHouse</span>
          </div>

          <div className="room-info">
            <div className="room-id-container">
              <span className="room-id-label">Room ID:</span>
              <div className="room-id" onClick={copyRoomId}>
                {roomId}
                <svg className="copy-icon" viewBox="0 0 24 24">
                  <path fill={isLightTheme ? "#4a4a4a" : "#e2e2e2"} d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
                </svg>
              </div>
            </div>

            <div className="connection-status">
              <div className="status-indicator"></div>
              <span>Live collaboration</span>
            </div>
          </div>
        </div>

        <div className="header-right">
          <div className="collaborators">
            {clients.map((client) => (
              <div
                key={client.socketId}
                className="avatar"
                title={client.username}
                style={{
                  backgroundColor: `hsl(${(client.username.charCodeAt(0) * 137.5) % 360}, 70%, 50%)`
                }}
              >
                {client.username[0].toUpperCase()}
              </div>
            ))}
          </div>

          <div className="header-actions">
            <button className="btn btn-secondary" onClick={copyRoomId}>
              Share
            </button>
            <button className="btn btn-danger" onClick={leaveRoom}>
              Leave
            </button>
          </div>
        </div>
      </header>

      {/* Toolbar */}
      <div className="editor-toolbar">
        <div className="language-selector">
          <label htmlFor="language-select">Language:</label>
          <select
            id="language-select"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="editor-actions">
          <button
            className="btn btn-icon"
            onClick={toggleTheme}
            title={`Switch to ${isLightTheme ? 'dark' : 'light'} theme`}
          >
            <svg className="theme-icon" viewBox="0 0 24 24">
              {isLightTheme ? (
                <path fill="#4a4a4a" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z" />
              ) : (
                <path fill="#e2e2e2" d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z" />
              )}
            </svg>
          </button>

          <button
            className={`btn btn-primary ${isCompiling ? 'loading' : ''}`}
            onClick={runCode}
            disabled={isCompiling}
          >
            {isCompiling ? (
              <>
                <span className="spinner"></span>
                Running...
              </>
            ) : (
              <>
                <svg className="run-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                </svg>
                Run
              </>
            )}
          </button>

          <button
            className={`btn btn-icon ${isCompileWindowOpen ? 'active' : ''}`}
            onClick={toggleCompileWindow}
            title={isCompileWindowOpen ? "Hide output" : "Show output"}
          >
            <svg className="output-icon" viewBox="0 0 24 24">
              <path fill={isLightTheme ? "#4a4a4a" : "#e2e2e2"} d="M14,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V10L14,3M19,19H5V5H13V10H19M17,14H7V12H17V14M15,18H7V16H15V18Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Editor Area */}
      <main className="editor-main">
        <Editor
          socketRef={socketRef}
          roomId={roomId}
          language={selectedLanguage}
          onCodeChange={(code) => {
            codeRef.current = code;
          }}
          username={Location.state?.username}
          clients={clients}
          theme={editorTheme}
        />
      </main>

      {/* Output Panel */}
      <div className={`output-panel ${isCompileWindowOpen ? 'open' : ''}`}>
        <div className="output-header">
          <h3>
            <svg className="terminal-icon" viewBox="0 0 24 24">
              <path fill={isLightTheme ? "#4a4a4a" : "#7d7dff"} d="M20,19V7H4V19H20M20,5A2,2 0 0,1 22,7V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V7A2,2 0 0,1 4,5H20M13,17V15H18V17H13M9.58,13L5.57,9H8.4L11.28,11.88C11.67,12.27 11.67,12.9 11.28,13.3L8.4,16.18H5.57L9.58,13Z" />
            </svg>
            Output
          </h3>
          <button className="btn btn-icon" onClick={toggleCompileWindow}>
            <svg className="close-icon" viewBox="0 0 24 24">
              <path fill={isLightTheme ? "#4a4a4a" : "#e2e2e2"} d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </button>
        </div>
        <div className="output-content">
          <pre className="output-text">
            {output || "Run your code to see the output here..."}
          </pre>
        </div>
      </div>

      <style jsx>{`
        .editor-page-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background-color: #1e1e2e;
          color: #e2e2e2;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          transition: all 0.3s ease;
        }
        
        .editor-page-container.light-theme {
          background-color: #f5f5f7;
          color: #333333;
        }
        
        /* Header Styles */
        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1.5rem;
          background-color: #252537;
          border-bottom: 1px solid #38384d;
          transition: all 0.3s ease;
        }
        
        .light-theme .editor-header {
          background-color: #ffffff;
          border-bottom: 1px solid #e0e0e0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        
        .header-left, .header-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .logo-icon {
          width: 24px;
          height: 24px;
          color: #7d7dff;
        }
        
        .light-theme .logo-icon {
          color: #5a5aff;
        }
        
        .logo-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #f0f0f0;
          transition: all 0.3s ease;
        }
        
        .light-theme .logo-text {
          color: #333333;
        }
        
        .room-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .room-id-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .room-id-label {
          font-size: 0.85rem;
          color: #a0a0b0;
          transition: all 0.3s ease;
        }
        
        .light-theme .room-id-label {
          color: #666666;
        }
        
        .room-id {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.35rem 0.75rem;
          background-color: #2d2d42;
          border-radius: 4px;
          font-family: 'Fira Code', monospace;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .light-theme .room-id {
          background-color: #e0e0e8;
          color: #333333;
        }
        
        .room-id:hover {
          background-color: #38384d;
        }
        
        .light-theme .room-id:hover {
          background-color: #d0d0d8;
        }
        
        .copy-icon {
          width: 16px;
          height: 16px;
          opacity: 0.7;
        }
        
        .connection-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #a0a0b0;
          transition: all 0.3s ease;
        }
        
        .light-theme .connection-status {
          color: #666666;
        }
        
        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #4caf50;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        
        .collaborators {
          display: flex;
          align-items: center;
          gap: -0.5rem;
        }
        
        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 500;
          font-size: 0.85rem;
          margin-left: -8px;
          border: 2px solid #252537;
          transition: transform 0.2s ease;
        }
        
        .light-theme .avatar {
          border: 2px solid #ffffff;
        }
        
        .avatar:first-child {
          margin-left: 0;
        }
        
        .avatar:hover {
          transform: translateY(-2px);
          z-index: 10;
        }
        
        .header-actions {
          display: flex;
          gap: 0.75rem;
        }
        
        /* Button Styles */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          outline: none;
        }
        
        .btn-primary {
          background-color: #7d7dff;
          color: white;
        }
        
        .btn-primary:hover {
          background-color: #6c6ce8;
        }
        
        .btn-primary.loading {
          opacity: 0.8;
          pointer-events: none;
        }
        
        .btn-secondary {
          background-color: #38384d;
          color: white;
        }
        
        .light-theme .btn-secondary {
          background-color: #e0e0e8;
          color: #333333;
        }
        
        .btn-secondary:hover {
          background-color: #45455d;
        }
        
        .light-theme .btn-secondary:hover {
          background-color: #d0d0d8;
        }
        
        .btn-danger {
          background-color: #ff5c5c;
          color: white;
        }
        
        .btn-danger:hover {
          background-color: #e84a4a;
        }
        
        .btn-icon {
          padding: 0.5rem;
          background-color: transparent;
          color: #a0a0b0;
        }
        
        .light-theme .btn-icon {
          color: #666666;
        }
        
        .btn-icon:hover {
          background-color: #38384d;
          color: #e2e2e2;
        }
        
        .light-theme .btn-icon:hover {
          background-color: #e0e0e8;
          color: #333333;
        }
        
        .btn-icon.active {
          background-color: #38384d;
          color: #e2e2e2;
        }
        
        .light-theme .btn-icon.active {
          background-color: #e0e0e8;
          color: #333333;
        }
        
        /* Toolbar Styles */
        .editor-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 1.5rem;
          background-color: #2a2a3d;
          border-bottom: 1px solid #38384d;
          transition: all 0.3s ease;
        }
        
        .light-theme .editor-toolbar {
          background-color: #ffffff;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .language-selector {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .language-selector label {
          font-size: 0.85rem;
          color: #a0a0b0;
          transition: all 0.3s ease;
        }
        
        .light-theme .language-selector label {
          color: #666666;
        }
        
        #language-select {
          background-color: #38384d;
          color: white;
          border: 1px solid #45455d;
          border-radius: 4px;
          padding: 0.5rem;
          font-size: 0.85rem;
          outline: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .light-theme #language-select {
          background-color: #f0f0f5;
          color: #333333;
          border: 1px solid #d0d0d8;
        }
        
        #language-select:focus {
          border-color: #7d7dff;
        }
        
        .editor-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .run-icon, .output-icon, .terminal-icon, .close-icon, .theme-icon {
          width: 18px;
          height: 18px;
        }
        
        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }
        
        .light-theme .spinner {
          border: 2px solid rgba(0,0,0,0.2);
          border-top-color: #333333;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        /* Main Editor Area */
        .editor-main {
          flex: 1;
          overflow: hidden;
          position: relative;
          background-color: #1a1a26;
          transition: all 0.3s ease;
        }
        
        .light-theme .editor-main {
          background-color: #f0f0f5;
        }
        
        /* Output Panel */
        .output-panel {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #252537;
          border-top: 1px solid #38384d;
          transform: translateY(100%);
          transition: transform 0.3s ease;
          z-index: 100;
          max-height: 40vh;
          display: flex;
          flex-direction: column;
        }
        
        .light-theme .output-panel {
          background-color: #ffffff;
          border-top: 1px solid #e0e0e0;
        }
        
        .output-panel.open {
          transform: translateY(0);
        }
        
        .output-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1.5rem;
          border-bottom: 1px solid #38384d;
        }
        
        .light-theme .output-header {
          border-bottom: 1px solid #e0e0e0;
        }
        
        .output-header h3 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0;
          font-size: 0.95rem;
          font-weight: 500;
        }
        
        .terminal-icon {
          color: #7d7dff;
        }
        
        .light-theme .terminal-icon {
          color: #5a5aff;
        }
        
        .output-content {
          flex: 1;
          overflow-y: auto;
          padding: 1rem 1.5rem;
        }
        
        .output-text {
          margin: 0;
          font-family: 'Fira Code', monospace;
          font-size: 0.85rem;
          line-height: 1.5;
          color: #e2e2e2;
          white-space: pre-wrap;
        }
        
        .light-theme .output-text {
          color: #333333;
        }
      `}</style>
    </div>
  );
}

export default EditorPage;