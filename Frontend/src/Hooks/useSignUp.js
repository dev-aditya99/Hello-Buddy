import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    // sign up method 
    const signup = async ({ first_name, last_name, username, email, password, confirm_password, gender }) => {
        const success = await handleInputErrors({
            first_name, last_name, username, email, password, confirm_password, gender
        });

        if (!success) return;

        setLoading(true)
        try {
            const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/auth/sign-up", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ first_name, last_name, username, email, password, confirm_password, gender }),
                credentials: "include"
            })

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data)
        } catch (error) {
            toast.error("Error During Signup : ", error.message)
        } finally {
            setLoading(false)
        }

    }

    return { loading, signup };

}

export default useSignUp

async function handleInputErrors({ first_name, last_name, username, email, password, confirm_password, gender }) {

    if (!first_name || !last_name || !username || !email || !password || !confirm_password || gender == "") {
        toast.error("Please fill all the required fields")
        return false;
    }

    if (password !== confirm_password) {
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 8) {
        toast.error("Password must be at least 8 characters");
    }

    return true;

}