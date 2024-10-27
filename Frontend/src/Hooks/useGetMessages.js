import { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const getMessages = async () => {
        try {
            setLoading(true);
            const res = await fetch("http://localhost:8000/messages/" + selectedConversation?._id, {
                credentials: "include"
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error)
            }

            setMessages(data)
        } catch (error) {
            toast.error("Error During getMessages : " + error.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (selectedConversation?._id)
            getMessages();
    }, [selectedConversation?._id, setMessages]);

    return { loading, messages }
}

export default useGetMessages