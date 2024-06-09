"use client"
import { useEffect, useRef, useState } from 'react';
import Link from "next/link"
import { useMutation } from '@apollo/client'
import GoogleBtn from "@/Components/GoogleBtn"
import lottie from 'lottie-web';
import TextWriteEffect from '@/Components/Text-Write-Effect';
import { USER_PHONE_OR_EMAIL_CONFIRMATION } from '@/graphql/Mutations'

interface State {
    showDelayed: boolean;
    formName: string;
    formEmailOrPhone: string;
    formPassword: string;
    message: string,
    success: boolean | null
}

export function SignupPage() {
    const animationContainer = useRef(null);
    const [UserPhoneOrEmailConfirmation] = useMutation(USER_PHONE_OR_EMAIL_CONFIRMATION)
    const [state, setState] = useState<State>({
        showDelayed: false,
        formName: "",
        formEmailOrPhone: "",
        formPassword: "",
        message: "",
        success: null
    })

    useEffect(() => {
        const timeOut = setTimeout(() => {
            return setState((prev) => ({
                ...prev,
                showDelayed: true
            }))
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
    }, [state.showDelayed]);

    const handleFormSubmit: React.FormEventHandler = async (e) => {
        e.preventDefault()
        try {
            const result = await UserPhoneOrEmailConfirmation({
                variables: {
                    Name: state.formName,
                    EmailOrPhone: state.formEmailOrPhone,
                    Password: state.formPassword,
                }
            });
            console.log(result)
        } catch (error) {
            console.log(error)
        }

    };

    return state.showDelayed && (
        <div className="h-screen overflow-hidden flex items-center animate-gradient-x">
            <div className="grid grid-cols-2">
                <div className="flex flex-col items-center justify-center animate__animated animate__fadeInTopLeft">
                    <div className="mb-4">
                        <h1 className="dark:text-gray-100 text-gray-900 text-4xl text-center">Sign Up</h1>
                        <TextWriteEffect />
                    </div>
                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-y-2">
                        <div className="flex flex-col">
                            <label className="dark:text-gray-300 text-gray-800" htmlFor="name">Name*</label>
                            <input onChange={(e) => setState({ ...state, formName: e.target.value })} required className="border border-gray-400 rounded-md p-2 px-3 bg-transparent mt-1 dark:text-gray-400 dark:placeholder:text-gray-400" type="text" alt="enter your name" placeholder="Enter your name" id="name" />
                        </div>
                        <div className="flex flex-col">
                            <label className="dark:text-gray-300 text-gray-800" htmlFor="email_Phone">Email Or Phone*</label>
                            <input onChange={(e) => setState({ ...state, formEmailOrPhone: e.target.value })} required className="border border-gray-400 rounded-md p-2 px-3 bg-transparent mt-1 dark:text-gray-400 dark:placeholder:text-gray-400" type="text" alt="enter your email" placeholder="Email Or Phone" id="email_Phone" />
                        </div>
                        <div className="flex flex-col">
                            <label className="dark:text-gray-300 text-gray-800" htmlFor="password">Password*</label>
                            <input onChange={(e) => setState({ ...state, formPassword: e.target.value })} required minLength={8} className="border border-gray-400 rounded-md p-2 px-3 bg-transparent mt-1 dark:text-gray-400 dark:placeholder:text-gray-400" type="password" alt="enter your password" placeholder="Create a password" id="password" />
                            <span className="dark:text-gray-500 mt-2 text-xs">must be at least 8 characters.</span>
                        </div>
                        <div>
                            <button type='submit' className=" bg-indigo-600 rounded-lg text-gray-100 py-2 px-6 w-full">Get started</button>
                            <div className="mt-4">
                                <GoogleBtn processType="Signin" text="Sign in with Google" />
                            </div>
                            <span className="dark:text-gray-400">Already have an account ? <Link href="/accounts/login" className="text-indigo-600  font-semibold">Log in</Link></span>
                        </div>
                    </form>
                </div>
                <div className='animate__animated animate__fadeInBottomRight' ref={animationContainer}></div>
            </div>
        </div>
    )
}



export default SignupPage