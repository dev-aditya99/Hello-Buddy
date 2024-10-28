import { useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from 'react-hot-toast';
import sentMessageSound from "../assets/sounds/sent-message-sound.mp3"

const useSendMessage = () => {
    const [loading, setLoading] = useState();
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message) => {
        try {
            setLoading(true);
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/messages/send/${selectedConversation?._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message }),
                credentials: "include"
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error)
            }

            // const messageSentSound = new Audio(sentMessageSound);
            // await messageSentSound.play();

            setMessages([...messages, data])

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { sendMessage, loading }
}

export default useSendMessage