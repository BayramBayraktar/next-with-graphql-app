"use client"

import Image from 'next/image'
import PostCard from '@/Components/post-card'
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";


export default function AuthorPage({ params: { slug } }: any) {
    return (
        <div>
            <div className="w-full h-full relative mt-6">
                <div className='flex flex-col justify-center my-12 items-center'>
                    <div className="mt-6 flex items-center">
                        <div className='w-16 h-16 '>
                            <Image width={100} height={100} src="/profile.svg" alt="" />
                        </div>
                        <div className='ml-3 mr-5'>
                            <p className=" text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">Bayram Bayraktar</p>
                            <p className=" text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">August 20, 2024</p>
                        </div>
                    </div>
                    <div className='px-[27%] mt-6 dark:text-white text-center'>
                        Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.
                    </div>
                    <div className='mt-6 flex flex-row gap-2'>
                        <div className='cursor-pointer bg-[#696A75] p-2 rounded-xl text-white'>
                            <FaFacebook />
                        </div>
                        <div className='cursor-pointer bg-[#696A75] p-2 rounded-xl text-white'>
                            <FaTwitter />
                        </div>
                        <div className='cursor-pointer bg-[#696A75] p-2 rounded-xl text-white'>
                            <FaInstagram />
                        </div>
                        <div className='cursor-pointer bg-[#696A75] p-2 rounded-xl text-white'>
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-gray-900 text-2xl font-bold dark:text-white'>Latest Post</h1>
                <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4 my-8'>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
                <div className='w-full flex items-center justify-center'>
                    <button className='py-3 px-5 rounded-md border border-zinc-500 my-4 border-opacity-30 text-zinc-500 text-base font-medium'>View All Post</button>
                </div>
            </div>
        </div>

    )
}
