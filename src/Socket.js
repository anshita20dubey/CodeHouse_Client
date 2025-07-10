import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: 'Infinity',
        timeout: 10000,
        transports: ['websocket', 'polling'], // Add polling as fallback
        secure: true, // Add this for HTTPS
        rejectUnauthorized: false // Only for development if you have SSL issues
    };
    return io(process.env.REACT_APP_BACKEND_URL, options);
}