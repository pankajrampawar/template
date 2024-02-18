'use client'
import React, { useState } from 'react';
import { login } from '@/actions';
import Image from 'next/image' ;
import { karma, karla, kings } from '../fonts';
import { useRouter } from 'next/navigation';
import Link from 'next/link';



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
             
        <div className={`${karla.className} bg-black min-h-screen fixed w-full flex flex-col justify-center items-center gap-8 text-xl `}>
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
                <span className='text-white hover:underline underline-offset-4 cursor-pointer pl-1'>signup</span>
            </Link>
        </div>
            <div className='border-b pb-2 flex gap-2' >
                <Image
                    src='./user.svg'
                    alt='user icon'
                    width={30}
                    height={30}  
                    className='invert'                                                        
                                                                                                                                                                                                                
                />
                <input 
                    className=' setOnMode bg-black placeholder-gray-300 placeholder:tracking-wide focus:outline-none text-white'
                    placeholder="username"
                    value={userData.username}
                    onChange={handleChange}
                    id='username'
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
                    className=' setOnMode bg-black placeholder-gray-300 placeholder:tracking-wide focus:outline-none text-white'
                    placeholder='password'
                    value={userData.password}
                    onChange={handleChange}
                    id='password'
                    type='password'
                />
            </div>
            
            <div>
                <button
                    className='bg-white text-grey-200 rounded-md px-3 py-2 mt-7'
                    onClick={handleSubmit}
                >
                    Login
                </button>
            </div>
        </div>
    )
}