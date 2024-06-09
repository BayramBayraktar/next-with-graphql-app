"use client"
import { useEffect, useRef, useState } from 'react';
import Link from "next/link"
import GoogleBtn from "@/Components/GoogleBtn"
import lottie from 'lottie-web';
import TextWriteEffect from '@/Components/Text-Write-Effect';


export function SignupPage() {
    const animationContainer = useRef(null);
    const [showDelayed, setShowDelayed] = useState<boolean>(false);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            return setShowDelayed(true)
        }, 500)

        return () => clearTimeout(timeOut)
    }, [])

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/images/Animation2.json'
        });
    }, [showDelayed]);


    return showDelayed && (
        <div className="h-screen justify-center overflow-hidden flex items-center">
            <div className="grid grid-cols-2">
                <div className='animate__animated animate__fadeInBottomLeft' ref={animationContainer}></div>
                <div className="flex flex-col items-center justify-center animate__animated animate__fadeInTopRight">
                    <div className="mb-4">
                        <h1 className="dark:text-gray-100 text-gray-900 text-4xl text-center">Login</h1>
                        <TextWriteEffect />
                    </div>
                    <form className="flex flex-col gap-y-2">
                        <div className="flex flex-col">
                            <label className="dark:text-gray-300 text-gray-800" htmlFor="email_Phone">Email Or Phone*</label>
                            <input required className="border border-gray-400 rounded-md p-2 px-3 bg-transparent mt-1 dark:text-gray-400 dark:placeholder:text-gray-400" type="text" alt="enter your email" pattern="^([0-9]{9})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$" placeholder="Email Or Phone" id="email_Phone" />
                        </div>
                        <div className="flex flex-col">
                            <label className="dark:text-gray-300 text-gray-800" htmlFor="password">Password*</label>
                            <input required minLength={8} className="border border-gray-400 rounded-md p-2 px-3 bg-transparent mt-1 dark:text-gray-400 dark:placeholder:text-gray-400" type="password" alt="enter your password" placeholder="password" id="password" />
                        </div>
                        <div>
                            <button className=" bg-indigo-600 rounded-lg text-gray-100 py-2 px-6 w-full">Log in</button>
                            <div className="mt-4">
                                <GoogleBtn processType="Signin" text="Sign in with Google" />
                            </div>
                            <span className="dark:text-gray-400">Don't you have an account? <Link href="/accounts/signup" className="text-indigo-600  font-semibold">sign up</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default SignupPage