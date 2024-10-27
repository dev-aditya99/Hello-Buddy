import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    // login user method 
    const loginUser = async ({ username, password }) => {
        const success = await handleInputErrors({
            username, password
        });

        if (!success) return;

        setLoading(true)
        try {
            const res = await fetch("http://localhost:8000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password }),
                credentials: "include"
            })

            const data = await res.json();

            // if any error 
            if (data.error) {
                throw new Error(data.error)
            }

            // set to localStorage 
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { loginUser, loading };
}

export default useLogin;

async function handleInputErrors({ username, password }) {
    if (!username || !password) {
        toast.error("Please fill all the required fields")
        return false;
    }

    if (password.length < 8) {
        toast.error("Password must be at least 8 characters");
    }

    return true;
}