'use client'
import React, { useState, useEffect } from 'react';
import { signup } from '@/actions';
import Image from 'next/image';
import { karma, karla, kings } from '../fonts';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function Login() {
    const router = useRouter();

    const [userData, setUserData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [isActive, setIsActive] = useState(false)


    useEffect(()=>{
        const checkForm = async () => {  // checks if all the fields are filled if they are filled sets isActive to true
            if (!userData.confirmPassword || !userData.email || !userData.password) {
                setIsActive(false);
                return
            }
            setIsActive(true)
            return;
        }

        checkForm();
    }, [userData])


    const handleChange  = (e) => {
        const { id, value } = e.target

        setUserData((prev) => ({
            ...prev,
            [id] : value,
        }))

        console.log(isActive)
        return;
    }
    
    const handleSubmit = () => {

        if (!isActive) {
            alert("All fields are required");
            return;
        }
        if (!userData.email || !userData.password || !userData.confirmPassword) {
            alert ("username password and confirm password are required");
            return;
        }

        if (userData.password !== userData.confirmPassword) {
            alert("passwords do not match")
            return;
        }

        const performSignupAction = async () => {
            const response = await signup(userData)

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
        <div className={`${karla.className} bg-black min-h-screen fixed w-full flex flex-col justify-center items-center gap-8 text-xl text-white`}>
            <Link href={"/"}>
                <div className={`${kings.className} fixed top-0 left-0 p-10 text-3xl text-white`}>
                    <span className='hoverEffect relative'>
                        winning syrus
                    </span>
                </div>
            </Link>
            <div  className='fixed bottom-5 left-1/2 -translate-x-1/2 text-gray-300'>
                already have a account? 
                <Link href={"/Login"}>
                    <span className='text-white hover:underline underline-offset-4 cursor-pointer pl-1'>Log in</span>
                </Link>
            </div>
            <div className='border-b pb-2 flex gap-2'>
                <Image
                    src='./user.svg'
                    alt='user icon'
                    width={29}
                    height={29}
                    className='invert'
                />
                <input
                    className={`setOnMode bg-black placeholder-gray-300 placeholder:tracking-wide focus:outline-none`}           
                    placeholder="email id"
                    value={userData.email}
                    onChange={handleChange}
                    id='email'
                    type='emal'
                />
            </div>
            <div className='border-b pb-2 flex gap-2'>
                <Image
                    src="./key.svg"
                    alt='key icon'
                    width={29}
                    height={29}
                    className='invert'
                />
                <input
                    className='setOnMode bg-black placeholder-gray-300 placeholder:tracking-wide focus:outline-none'
                    placeholder='password'
                    value={userData.password}
                    onChange={handleChange}
                    id='password'
                    type='password'
                />
            </div>
            <div className='border-b pb-2 flex gap-2'>
                <Image
                    src="./cnfm.svg"
                    alt='correct icon'
                    width={29}
                    height={29}
                    className='invert'
                />
                <input
                    className='setOnMode bg-black placeholder-gray-300 placeholder:tracking-wide focus:outline-none'
                    placeholder='confirm password'
                    value={userData.confirmPassword}
                    onChange={handleChange}
                    id='confirmPassword'
                    type='password'
                />
            </div>
            <div className='-ml-10'>
                <button
                    onClick={handleSubmit}
                    className={`${karma.className} ${isActive ? "bg-white text-black hover:bg-black hover:text-white" : "bg-slate-200 text-gray-500"} border-white border  w-24 h-14 rounded-xl mt-6 font-bold tracking-wider transition-all duration-500 ease-in-out pt-2`}
                >
                    Sign up
                </button>
            </div>
        </div>
    )
}