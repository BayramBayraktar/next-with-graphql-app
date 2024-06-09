"use client"

import Image from 'next/image'
import PostCard from '@/Components/post-card'
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";


export default function ViewPost({ params: { slug } }: any) {
    return (
        <div className='px-[19%]'>
            <div>
                <h1 className='my-4 py-1 px-3 inline-block text-white text-sm bg-blue-500  rounded-sm'>Technology</h1>
                <h1 className='text-4xl font-semibold dark:text-white '>The Impact of Technology on the Workplace: How Technology is Changing</h1>
                <div className="mt-6 flex items-center">
                    <div className='w-16 h-16 '>
                        <Image width={100} height={100} src="/profile.svg" alt="" />
                    </div>
                    <p className=" ml-3 text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">Bayram Bayraktar</p>
                    <p className=" ml-3 text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">August 20, 2024</p>
                </div>
            </div>
            <Image className="w-[100%] mt-8" width={100} height={100} src="/Image.svg" alt="" />
            <div>
                <div className='my-8'>
                    <p className='text-xl dark:text-gray-400'>
                        Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
                    </p>
                    <br />
                    <p className='text-xl dark:text-gray-400'>
                        One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
                    </p>
                </div>
                <h1 className='dark:text-gray-300 text-2xl font-semibold'>Research Your Destination</h1>
                <div className='my-8'>
                    <div>
                        <p className='text-xl dark:text-gray-400'>
                            Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
                        </p>
                        <br />
                        <p className='text-xl dark:text-gray-400'>
                            One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
                        </p>
                    </div>
                </div>
                <h1 className='dark:text-gray-300 text-2xl font-semibold'>Plan Your Itinerary</h1>
                <div className='my-8'>
                    <div>
                        <p className='text-xl dark:text-gray-400'>
                            While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.                        </p>
                        <br />
                        <p className='text-xl dark:text-gray-400'>Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>
                    </div>
                </div>
            </div>
        </div >

    )
}
