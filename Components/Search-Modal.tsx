import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { IoMdSearch } from "@react-icons/all-files/io/IoMdSearch";
import { FaRegKeyboard } from '@react-icons/all-files/fa/FaRegKeyboard'
import Image from 'next/image'
import { SearchModalProps } from '../types/index'
import Link from 'next/link';


const SearchModal: React.FC<SearchModalProps> = ({ isActive, setIsActive }) => {

    const [search, setSearch] = useState<string | undefined>("")

    useEffect(() => {
        if (isActive) {
            return document.body.classList.add("Fixed")
        } else {
            return document.body.classList.remove("Fixed")
        }
    }, [isActive])

    const titleLength = (text: string, limit: number) => {
        if (text.length > limit) {
            const shortText = text.substring(0, limit) + '...'
            return <span>{shortText}</span>
        } else {
            return text
        }
    }
    const textLength = (text: string, limit: number) => {
        if (text.length > limit) {
            const shortText = text.substring(0, limit) + '...'
            return <span>{shortText}</span>
        } else {
            return text
        }
    }


    return isActive && (
        <div className=''>
            <div className='h-screen w-full top-0 z-10  left-0 fixed bg-black opacity-70'></div>
            <div className='fixed top-0 left-0 w-full h-full z-10'>
                <div onClick={() => { setIsActive(false); setSearch("") }} className='dark:text-black text-white text-3xl float-end bg-black dark:bg-white m-[4%] cursor-pointer '>
                    <AiOutlineClose />
                </div>
                <div className=' max-lg:mx-2 mx-[14%]  my-[10%]'>
                    <div className="max-lg:w-full flex items-center gap-3 pl-4 py-2 pr-2 bg-zinc-100 dark:bg-zinc-800 rounded-md border dark:border-indigo-500 ">
                        <input onChange={(e) => setSearch(e.target.value)} className="bg-transparent text-zinc-400 placeholder-zinc-400 outline-none w-full text-2xl " autoFocus={isActive} type="text" placeholder="Search" />
                        <label className="text-zinc-600 text-xl ">
                            <IoMdSearch />
                        </label>
                    </div>
                    <div className='max-lg:w-full mt-5 bg-black bg-opacity-70 rounded-lg'>
                        {search !== undefined && search?.length > 0 ?
                            <div className=' max-lg:w-full scrollbar fixed left-0 bg-black bg-opacity-70 border-[0.1px] border-indigo-500 border-opacity-20 overflow-y-auto max-lg:h-[70vh] h-[60vh] max-lg:mx-2 mx-[14%]'>
                                <Link className='m-4 flex flex-col hover:bg-black hover:animate-pulse' href="#">
                                    <div className='flex flex-col  p-4'>
                                        <div className='flex items-center flex-row gap-y-7 max-lg:flex-col p-2'>
                                            <Image width={100} height={100} className=' max-lg:w-[60%] max-sm:w-[100%] w-40' src="/Image.svg" alt="" />
                                            <div className='px-4'>
                                                <h1 className=' text-2xl max-sm:text-xl my-4 text-indigo-500'>{titleLength("The Impact of Technology on the Workplace: How Technology is Changing ", 70)}</h1>
                                                <p className='text-gray-300 max-sm:text-base dark:text-gray-500'>{textLength("Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.", 150)}</p>
                                            </div>
                                            <div className='py-1 max-sm:text-xl px-3 inline-block text-white text-sm bg-blue-500  rounded-sm'>Technology</div>
                                        </div>
                                        <div className="flex max-sm:flex-col items-center">
                                            <div className='w-8 h-8 '>
                                                <Image width={100} height={100} src="/profile.svg" alt="" />
                                            </div>
                                            <p className=" ml-3 text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">Bayram Bayraktar</p>
                                            <p className=" ml-3 text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">August 20, 2024</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link className='m-4 flex flex-col hover:bg-black hover:animate-pulse' href="#">
                                    <div className='flex flex-col  p-4'>
                                        <div className='flex items-center flex-row gap-y-7 max-lg:flex-col p-2'>
                                            <Image width={100} height={100} className=' max-lg:w-[60%] max-sm:w-[100%] w-40' src="/Image.svg" alt="" />
                                            <div className='px-4'>
                                                <h1 className=' text-2xl max-sm:text-xl my-4 text-indigo-500'>{titleLength("The Impact of Technology on the Workplace: How Technology is Changing ", 70)}</h1>
                                                <p className='text-gray-300 max-sm:text-base dark:text-gray-500'>{textLength("Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.", 150)}</p>
                                            </div>
                                            <div className='py-1 max-sm:text-xl px-3 inline-block text-white text-sm bg-blue-500  rounded-sm'>Technology</div>
                                        </div>
                                        <div className="flex max-sm:flex-col items-center">
                                            <div className='w-8 h-8 '>
                                                <Image width={100} height={100} src="/profile.svg" alt="" />
                                            </div>
                                            <p className=" ml-3 text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">Bayram Bayraktar</p>
                                            <p className=" ml-3 text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">August 20, 2024</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link className='m-4 flex flex-col hover:bg-black hover:animate-pulse' href="#">
                                    <div className='flex flex-col  p-4'>
                                        <div className='flex items-center flex-row gap-y-7 max-lg:flex-col p-2'>
                                            <Image width={100} height={100} className=' max-lg:w-[60%] max-sm:w-[100%] w-40' src="/Image.svg" alt="" />
                                            <div className='px-4'>
                                                <h1 className=' text-2xl max-sm:text-xl my-4 text-indigo-500'>{titleLength("The Impact of Technology on the Workplace: How Technology is Changing ", 70)}</h1>
                                                <p className='text-gray-300 max-sm:text-base dark:text-gray-500'>{textLength("Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.", 150)}</p>
                                            </div>
                                            <div className='py-1 max-sm:text-xl px-3 inline-block text-white text-sm bg-blue-500  rounded-sm'>Technology</div>
                                        </div>
                                        <div className="flex max-sm:flex-col items-center">
                                            <div className='w-8 h-8 '>
                                                <Image width={100} height={100} src="/profile.svg" alt="" />
                                            </div>
                                            <p className=" ml-3 text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">Bayram Bayraktar</p>
                                            <p className=" ml-3 text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">August 20, 2024</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link className='m-4 flex flex-col hover:bg-black hover:animate-pulse' href="#">
                                    <div className='flex flex-col  p-4'>
                                        <div className='flex items-center flex-row gap-y-7 max-lg:flex-col p-2'>
                                            <Image width={100} height={100} className=' max-lg:w-[60%] max-sm:w-[100%] w-40' src="/Image.svg" alt="" />
                                            <div className='px-4'>
                                                <h1 className=' text-2xl max-sm:text-xl my-4 text-indigo-500'>{titleLength("The Impact of Technology on the Workplace: How Technology is Changing ", 70)}</h1>
                                                <p className='text-gray-300 max-sm:text-base dark:text-gray-500'>{textLength("Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.", 150)}</p>
                                            </div>
                                            <div className='py-1 max-sm:text-xl px-3 inline-block text-white text-sm bg-blue-500  rounded-sm'>Technology</div>
                                        </div>
                                        <div className="flex max-sm:flex-col items-center">
                                            <div className='w-8 h-8 '>
                                                <Image width={100} height={100} src="/profile.svg" alt="" />
                                            </div>
                                            <p className=" ml-3 text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">Bayram Bayraktar</p>
                                            <p className=" ml-3 text-neutral-400 text-base font-medium font-['Work Sans'] leading-normal">August 20, 2024</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                            :
                            <div className='text-6xl h-44 text-white dark:text-white flex flex-col items-center gap-4 justify-center border-[0.2px] border-indigo-500'>
                                <FaRegKeyboard />
                                <h1 className='text-3xl dark:text-gray-300'>please write something</h1>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchModal