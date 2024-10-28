import { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from "../zustand/useConversation"
import recieveMessageSound from "../assets/sounds/recieve-message-sound.mp3"

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const notificationSound = new Audio(recieveMessageSound)
            notificationSound.play();
            setMessages([...messages, newMessage])
        })

        return () => socket?.off("newMessage")
    }, [socket, messages, setMessages])
}

export default useListenMessages;