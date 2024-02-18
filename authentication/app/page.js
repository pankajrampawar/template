'use client'

import React from 'react'
import { useRouter } from "next/navigation";
import { checkUserStatus } from "@/actions";
import { kings } from './fonts';


export default function LandingPage() {

  const router = useRouter();
  
  React.useEffect(()=>{
    const performStatusAction = async () => {
      const userLoggedIn = await checkUserStatus();

      if(userLoggedIn) {
        router.push('/home')
        return
      }

      router.push('/Login')
      return
    }

    setTimeout(()=>{
      performStatusAction();
    }, 2000)
  },[])

  return (
    <main className={`${kings.className} h-screen w-screen flex justify-center items-center`}>
      <h1 className="text-6xl lg:text-7xl fade-in text-center tracking-wider text-white">Winning Syrus</h1>
    </main>
  );
}
