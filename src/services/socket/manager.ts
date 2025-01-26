import { Manager } from 'socket.io-client'

const socketManager = new Manager(import.meta.env.VITE_API_URL, {
    transports: ['websocket'],
    autoConnect: false,
    reconnection: true,
    reconnectionAttempts: 3,
    reconnectionDelay: 1000,
})

const sessionSocket = socketManager.socket('/session')

export { sessionSocket }
