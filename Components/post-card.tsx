"use client"
import Image from 'next/image'

const PostCard = () => {
    return (
        <div className='p-4 rounded-xl border border-gray-200 dark:border-gray-800 w-full'>
            <Image className='w-full h-auto rounded-xl' width={0} height={0} sizes='100vw' src='/card.png' alt='' />
            <div className='mx-2'>
                <h1 className='my-4 py-1 px-3 inline-block text-indigo-500 text-sm bg-indigo-500 bg-opacity-5 rounded-sm'>Technology</h1>
                <p className='dark:text-white text-gray-900 text-2xl font-semibold leading-7'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                <div className="mt-5 flex items-center">
                    <div className='w-9 h-9 '>
                        <Image width={100} height={100} src="/profile.svg" alt="" />
                    </div>
                    <p className="ml-3 mr-5 text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">Bayram Bayraktar</p>
                    <p className=" text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">August 20, 2024</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard