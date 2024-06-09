"use client";
import React from 'react'
import Link from 'next/link'
import { IThemeType } from '../types/index'
import { useSelector } from 'react-redux'
import { MdMailOutline } from "@react-icons/all-files/md/MdMailOutline";
import LogoSVG from '@/assets/icons/logo';


function Footer() {

    const { darkMode } = useSelector((state: { Theme: IThemeType }) => state.Theme)

    return (
        <div className='px-2 bg-neutral-100 dark:bg-gray-900'>
            <div className='max-w-screen-xl m-auto'>
                <div className='grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 border-b border-gray-800 py-16'>
                    <div className='flex flex-col max-lg:ml-16 max-sm:mx-8'>
                        <div>
                            <h1 className='dark:text-white text-lg font-semibold leading-7'>About</h1>
                            <p className='mt-3 dark:text-neutral-400 text-base font-normal leading-normal'> Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua. Ut enim ad <br /> minim veniam</p>
                        </div>
                        <div className='mt-5 flex-col'>
                            <div className='flex flex-row items-center'>
                                <label className='dark:text-white text-base font-semibold'>Email :</label>
                                <p className='dark:text-neutral-400 text-base font-normal pl-2'> info@gmail.com</p>
                            </div>
                            <div className='flex flex-row items-center'>
                                <label className='dark:text-white text-base font-semibold' >Phone :</label>
                                <p className='dark:text-neutral-400 text-base font-normal pl-2'>  880 123 456 789</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-[20%] max-sm:my-16 max-sm:justify-start max-sm:mx-8 max-lg:justify-end '>
                        <div className='flex flex-col'>
                            <div className='mb-5'>
                                <h1 className='dark:text-white text-lg font-semibold leading-7'>Quick Link</h1>
                            </div>
                            <Link className='my-1 dark:text-gray-400' href="/">Home</Link>
                            <Link className='my-1 dark:text-gray-400' href="/About">About</Link>
                            <Link className='my-1 dark:text-gray-400' href="/Blog">Blog</Link>
                            <Link className='my-1 dark:text-gray-400' href="/Archived">Archived</Link>
                            <Link className='my-1 dark:text-gray-400' href="/Author">Author</Link>
                            <Link className='my-1 dark:text-gray-400' href="/Contact">Contact</Link>
                        </div>
                        <div className='flex flex-col'>
                            <div className='mb-5'>
                                <h1 className='dark:text-white text-lg font-semibold leading-7'>Category</h1>
                            </div>
                            <Link className='my-1 dark:text-gray-400' href="/Lifestyle">Lifestyle</Link>
                            <Link className='my-1 dark:text-gray-400' href="/Technology">Technology</Link>
                            <Link className='my-1 dark:text-gray-400' href="/Travel">Travel</Link>
                            <Link className='my-1 dark:text-gray-400' href="/Business">Business</Link>
                            <Link className='my-1 dark:text-gray-400' href="/Economy">Economy</Link>
                            <Link className='my-1 dark:text-gray-400' href="/Sports">Sports</Link>
                        </div>
                    </div>
                    <div className='dark:bg-gray-800 max-lg:col-span-2 max-lg:mx-16 max-lg:mt-16 max-sm:m-0 max-sm:mx-8 max-sm:col-span-1 bg-white p-9 rounded-xl '>
                        <div className='text-center'>
                            <h1 className='dark:text-white text-xl font-semibold'>Weekly Newsletter</h1>
                            <p className='text-neutral-400 text-base font-normal mt-1'>Get blog articles and offers via email</p>
                        </div>
                        <div className='mt-8 w-full'>
                            <div className='w-full dark:bg-gray-900  border border-zinc-700  flex flex-row items-center px-4 rounded-lg'>
                                <input id='footer_email' className='dark:text-gray-500 dark:placeholder:text-gray-500  w-full py-3 bg-transparent outline-none' type='email' placeholder='Your Email' />
                                <label htmlFor='footer_email' className='dark:text-gray-500 w-4 h-4 cursor-pointer'>
                                    <MdMailOutline />
                                </label>
                            </div>
                            <button className='mt-2 py-3 px-5 w-full text-white text-base font-medium bg-indigo-500 rounded-md'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center fkex-row py-8 gap-2.5'>
                    <LogoSVG fill={darkMode ? 'white' : 'black'} />
                    <div>
                        <h1 className='dark:text-white text-xl font-normal leading-7' >Es-Hop <span className='dark:text-white text-xl font-extrabold'>Blog</span></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer