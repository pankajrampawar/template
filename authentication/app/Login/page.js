'use client'
import React, { useState } from 'react';
import { login } from '@/actions';

export default function Login() {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    })

    const handleChange  = (e) => {
        const { id, value } = e.target

        setUserData(prev => ({
            ...prev,
            [id] : value,
        }))
        return;
    }
    
    const handleSubmit = () => {
        if (!userData.username && !userData.password) {
            alert ("username and password are required");
            return;
        }

        const performSignupAction = async () => {
            const response = await login(userData)

            if (response.status) {
                router.push('/home')
                return
            }

            if (!response.status) {
                console.log("unalbe to perform action");
                return;
            }

            console.log("signup action not working.")
            return;
        }

        performSignupAction();
    }

    return (
        <div className='h-full w-screen flex flex-col gap-4 justify-center items-center'>
            <div>
                <input
                    placeholder="username"
                    value={userData.username}
                    onChange={handleChange}
                    id='username'
                />
            </div>
            <div>
                <input
                    placeholder='password'
                    value={userData.password}
                    onChange={handleChange}
                    id='password'
                />
            </div>
            <div>
                <button
                    onClick={handleSubmit}
                >
                    Login
                </button>
            </div>
        </div>
    )
}