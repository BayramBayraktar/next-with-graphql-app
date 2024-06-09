"use client"

import Image from 'next/image'
import Link from 'next/link'
import AdsBanner from '@/Components/Ads-Banner'
import PostCard from '@/Components/post-card'

export default function Home() {
  return (
    <div>
      <div className="w-full h-full relative mt-6">
        <div className='w-full h-full'>
          <Image className="w-full" width={100} height={100} src="/ımage1.svg" alt="" />
        </div>
        <div className="w-[45%] max-md:w-[80%] max-sm:w-[100%] max-sm:opacity-80 max-sm:-bottom-32  max-sm:left-0 absolute -bottom-16 left-16 bg-white dark:bg-gray-900 p-10 rounded-md shadow-lg border border-gray-200 dark:border-gray-800">
          <p className="bg-indigo-500 inline-block text-white px-3 py-1 rounded-md text-[1em] ">Technology</p>
          <h1 className="mt-4 text-gray-900 dark:text-white max-sm:text-[3vw] font-semibold text-[2.45vw] font-['Work Sans'] leading-10">The Impact of Technology on   the Workplace: How   Technology is Changing</h1>
          <div className="mt-6 flex items-center">
            <div className='w-9 h-9 '>
              <Image width={100} height={100} src="/profile.svg" alt="" />
            </div>
            <p className="ml-3 mr-5 text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">Bayram Bayraktar</p>
            <p className=" text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">August 20, 2024</p>
          </div>
        </div>
      </div>
      <div className='mt-36 mb-20'>
        <AdsBanner />
      </div>
      <div>
        <h1 className='text-gray-900 text-2xl font-bold dark:text-white'>Lastes Post</h1>
        <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 my-8'>
          <Link href="/viewpost/dataid" >
            <PostCard />
          </Link>
          <Link href="/viewpost/dataid" >
            <PostCard />
          </Link>
          <Link href="/viewpost/dataid" >
            <PostCard />
          </Link>
          <Link href="/viewpost/dataid" >
            <PostCard />
          </Link>
          <Link href="/viewpost/dataid" >
            <PostCard />
          </Link>
          <Link href="/viewpost/dataid" >
            <PostCard />
          </Link>

        </div>
        <div className='w-full flex items-center justify-center'>
          <button className='py-3 px-5 rounded-md border border-zinc-500 my-4 border-opacity-30 text-zinc-500 text-base font-medium'>View All Post</button>
        </div>
      </div>
      <div className='my-11 mb-20'>
        <AdsBanner />
      </div>
    </div >

  )
}
