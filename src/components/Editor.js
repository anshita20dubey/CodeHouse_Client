import React, { useEffect, useRef, useState } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/eclipse.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/clike/clike";
import "codemirror/mode/ruby/ruby";
import "codemirror/mode/go/go";
import "codemirror/mode/php/php";
import "codemirror/mode/swift/swift";
import "codemirror/mode/rust/rust";
import "codemirror/mode/r/r";
import "codemirror/mode/sql/sql";
import "codemirror/mode/pascal/pascal";
import "codemirror/mode/shell/shell";
import { ACTIONS } from "../Actions";

// Generate a random color for each user's cursor
const getRandomColor = () => {
  const colors = [
    '#4facfe', // blue
    '#a18cd1', // purple
    '#fbc2eb', // pink
    '#ff9a9e', // coral
    '#96fbc4', // mint
    '#f6d365', // yellow
    '#a1c4fd', // light blue
    '#ffecd2', // peach
    '#84fab0', // green
    '#8fd3f4', // sky blue
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

function Editor({ socketRef, roomId, onCodeChange, language, username, clients, theme }) {
  const editorRef = useRef(null);
  const cursorsRef = useRef({});
  const userColor = useRef(getRandomColor());
  const isChangingValue = useRef(false);

  // Map language to CodeMirror mode
  const languageModes = {
    python3: { name: "python" },
    cpp: { name: "text/x-c++src" },
    c: { name: "text/x-csrc" },
    csharp: { name: "text/x-csharp" },
    java: { name: "text/x-java" },
    nodejs: { name: "javascript", json: true },
    ruby: { name: "ruby" },
    go: { name: "go" },
    scala: { name: "text/x-scala" },
    bash: { name: "shell" },
    sql: { name: "sql" },
    pascal: { name: "pascal" },
    php: { name: "php" },
    swift: { name: "swift" },
    rust: { name: "rust" },
    r: { name: "r" },
  };

  // Create cursor element
  const createCursorElement = (username, color) => {
    const cursorEl = document.createElement("div");
    cursorEl.className = "remote-cursor";
    cursorEl.style.position = "absolute";
    cursorEl.style.zIndex = "10";
    cursorEl.style.pointerEvents = "none";
    cursorEl.setAttribute("data-username", username);

    // Create cursor line
    const cursorLine = document.createElement("div");
    cursorLine.style.borderLeft = `2px solid ${color}`;
    cursorLine.style.height = "20px";
    cursorLine.style.position = "relative";
    cursorLine.style.animation = "blink 1s ease-in-out infinite alternate";
    cursorEl.appendChild(cursorLine);

    // Add username label
    const label = document.createElement("div");
    label.className = "cursor-label";
    label.textContent = username;
    label.style.position = "absolute";
    label.style.top = "-25px";
    label.style.left = "0";
    label.style.background = color;
    label.style.color = "white";
    label.style.padding = "2px 6px";
    label.style.borderRadius = "4px 4px 4px 0";
    label.style.fontSize = "12px";
    label.style.fontFamily = "sans-serif";
    label.style.whiteSpace = "nowrap";
    label.style.fontWeight = "bold";
    label.style.opacity = "0.9";
    cursorEl.appendChild(label);

    return cursorEl;
  };

  useEffect(() => {
    const init = async () => {
      const editor = CodeMirror.fromTextArea(
        document.getElementById("realtimeEditor"),
        {
          mode: languageModes[language] || { name: "javascript", json: true },
          theme: theme,
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
        }
      );

      editorRef.current = editor;
      editor.setSize(null, "100%");

      editor.on("change", (instance, changes) => {
        const { origin } = changes;
        const code = instance.getValue();
        onCodeChange(code);

        // Only emit changes if not from setValue (remote changes)
        if (origin !== "setValue" && !isChangingValue.current) {
          socketRef.current.emit(ACTIONS.CODE_CHANGE, {
            roomId,
            code,
          });
        }
      });

      editor.on("cursorActivity", (instance) => {
        // Don't emit cursor position during setValue operations
        if (isChangingValue.current) return;

        const cursor = instance.getCursor();

        // Broadcast cursor position
        socketRef.current.emit(ACTIONS.CURSOR_MOVE, {
          roomId,
          username,
          position: cursor,
          color: userColor.current
        });
      });

      // Handle focus events to ensure cursor is visible
      editor.on("focus", () => {
        const cursor = editor.getCursor();
        socketRef.current.emit(ACTIONS.CURSOR_MOVE, {
          roomId,
          username,
          position: cursor,
          color: userColor.current
        });
      });
    };

    init();

    return () => {
      if (editorRef.current) {
        // Clean up all cursors
        Object.values(cursorsRef.current).forEach(cursorEl => {
          if (cursorEl.parentNode) {
            cursorEl.parentNode.removeChild(cursorEl);
          }
        });
        cursorsRef.current = {};
        editorRef.current.toTextArea();
      }
    };
  }, [language, theme]);

  useEffect(() => {
    if (!socketRef.current) return;

    const handleCursorMove = ({ username: remoteUsername, position, color }) => {
      // Skip if this is our own cursor
      if (remoteUsername === username) return;

      if (!editorRef.current) return;

      try {
        // Get or create cursor element for this user
        if (!cursorsRef.current[remoteUsername]) {
          const cursorEl = createCursorElement(remoteUsername, color);
          editorRef.current.getWrapperElement().appendChild(cursorEl);
          cursorsRef.current[remoteUsername] = cursorEl;
        }

        // Update cursor position
        const coords = editorRef.current.cursorCoords(position, "local");
        const cursorEl = cursorsRef.current[remoteUsername];

        if (cursorEl) {
          cursorEl.style.left = `${coords.left}px`;
          cursorEl.style.top = `${coords.top}px`;
          cursorEl.style.display = "block";
        }
      } catch (error) {
        console.error("Error updating cursor position:", error);
      }
    };

    const handleUserDisconnected = ({ username: remoteUsername }) => {
      if (cursorsRef.current[remoteUsername]) {
        const cursorEl = cursorsRef.current[remoteUsername];
        if (cursorEl.parentNode) {
          cursorEl.parentNode.removeChild(cursorEl);
        }
        delete cursorsRef.current[remoteUsername];
      }
    };

    socketRef.current.on(ACTIONS.CURSOR_MOVE, handleCursorMove);
    socketRef.current.on(ACTIONS.DISCONNECTED, handleUserDisconnected);

    return () => {
      if (socketRef.current) {
        socketRef.current.off(ACTIONS.CURSOR_MOVE, handleCursorMove);
        socketRef.current.off(ACTIONS.DISCONNECTED, handleUserDisconnected);
      }
    };
  }, [socketRef.current, username]);

  useEffect(() => {
    if (!socketRef.current || !editorRef.current) return;

    const handleCodeChange = ({ code }) => {
      if (code !== null && code !== editorRef.current.getValue()) {
        isChangingValue.current = true;
        editorRef.current.setValue(code);
        isChangingValue.current = false;
      }
    };

    socketRef.current.on(ACTIONS.CODE_CHANGE, handleCodeChange);

    return () => {
      if (socketRef.current) {
        socketRef.current.off(ACTIONS.CODE_CHANGE, handleCodeChange);
      }
    };
  }, [socketRef.current]);

  // Clean up cursors when clients change
  useEffect(() => {
    const currentUsernames = clients.map(client => client.username);
    const cursorUsernames = Object.keys(cursorsRef.current);

    // Remove cursors for users who are no longer in the room
    cursorUsernames.forEach(cursorUsername => {
      if (cursorUsername !== username && !currentUsernames.includes(cursorUsername)) {
        const cursorEl = cursorsRef.current[cursorUsername];
        if (cursorEl && cursorEl.parentNode) {
          cursorEl.parentNode.removeChild(cursorEl);
        }
        delete cursorsRef.current[cursorUsername];
      }
    });
  }, [clients, username]);

  return (
    <div
      className="editor-container"
      style={{
        height: "100%",
        background: "rgba(10, 10, 30, 0.4)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "20px",
        padding: "20px",
        margin: "10px",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, rgba(79, 172, 254, 0.05) 0%, transparent 70%)",
          animation: "rotate 20s linear infinite",
          pointerEvents: "none",
          zIndex: 1
        }}
      />

      <div style={{
        height: "100%",
        position: "relative",
        zIndex: 2,
        borderRadius: "15px",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.05)"
      }}>
        <textarea id="realtimeEditor" style={{ display: "none" }}></textarea>
      </div>

      <style jsx>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .editor-container:hover {
          transform: translateY(-2px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          border-color: rgba(79, 172, 254, 0.3);
        }
        
        .CodeMirror {
          font-family: 'Fira Code', 'Monaco', 'Menlo', monospace !important;
          font-size: 14px !important;
          line-height: 1.6 !important;
          border-radius: 15px !important;
          height: 100% !important;
        }
        
        .CodeMirror.dracula {
          background: rgba(0, 0, 0, 0.6) !important;
          color: #ffffff !important;
        }
        
        .CodeMirror.default {
          background: rgba(255, 255, 255, 0.9) !important;
          color: #333333 !important;
        }
        
        .CodeMirror.dracula .CodeMirror-gutters {
          background: rgba(0, 0, 0, 0.4) !important;
          border-right: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        
        .CodeMirror.default .CodeMirror-gutters {
          background: rgba(240, 240, 240, 0.9) !important;
          border-right: 1px solid rgba(0, 0, 0, 0.1) !important;
        }
        
        .CodeMirror.dracula .CodeMirror-linenumber {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        
        .CodeMirror.default .CodeMirror-linenumber {
          color: rgba(0, 0, 0, 0.5) !important;
        }
        
        .CodeMirror-cursor {
          border-left: 2px solid #4facfe !important;
          animation: blink 1s ease-in-out infinite alternate;
        }
        
        @keyframes blink {
          0% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        
        .CodeMirror-selected {
          background: rgba(79, 172, 254, 0.2) !important;
        }
        
        .CodeMirror-focused .CodeMirror-selected {
          background: rgba(79, 172, 254, 0.3) !important;
        }
        
        .remote-cursor {
          animation: blink 1s ease-in-out infinite alternate;
          transform: translateY(-2px);
          z-index: 10;
        }

        .cursor-label {
          transition: all 0.2s ease;
          opacity: 0.9;
        }

        .remote-cursor:hover .cursor-label {
          opacity: 1;
          transform: translateY(-5px);
        }

        @keyframes blink {
          0% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default Editor;