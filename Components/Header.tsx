"use client"

import Link from "next/link"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setColorTheme } from '../lib/Store/themeSlice'
import { IoMdSearch } from "@react-icons/all-files/io/IoMdSearch";
import { IThemeType } from '../types/index'
import SearchModal from "./Search-Modal"
import DropMenuXl from "./Drop-Menu-xl"

function Header() {
    const dispatch = useDispatch()
    const { colorTheme } = useSelector((state: { Theme: IThemeType }) => state.Theme)
    const [isActive, setIsActive] = useState<boolean | null>(false)


    return (
        <header className="max-w-screen-xl m-auto px-2 w-full flex items-center py-8">
            <h2 className="dark:text-white text-zinc-700 flex-1">Logo</h2>
            <div className="flex items-center w-full">
                <ul className="flex items-center flex-1 ml-[15%] max-sm:hidden justify-center">
                    <Link className=" dark:text-white p-4 text-zinc-700 text-base font-normal font-['work Sans'] leading-normal whitespace-nowrap " href="/">Home</Link>
                    <li className="group">
                        <li className="flex flex-col items-center p-4 dark:text-white text-zinc-700 text-base font-normal font-['work Sans'] leading-normal whitespace-nowrap cursor-pointer">
                            <span>Blog</span>
                            <div className="absolute opacity-0  group-hover:opacity-100 duration-300 top-20 w-0 h-0 border-[8px] border-transparent border-b-[8px] dark:border-b-white border-b-black"></div>
                        </li>
                        <DropMenuXl />
                    </li>
                    <Link className=" dark:text-white p-4 text-zinc-700 text-base font-normal font-['work Sans'] leading-normal whitespace-nowrap " href="/blog">Pages</Link>
                    <Link className=" dark:text-white p-4 text-zinc-700 text-base font-normal font-['work Sans'] leading-normal whitespace-nowrap " href="/blog">Contact</Link>
                </ul>
                <div onClick={() => setIsActive(true)} className=" mx-[40px] cursor-pointer p-3 bg-zinc-100 dark:bg-zinc-800 rounded-md ">
                    <label className="text-zinc-600 text-xl">
                        <IoMdSearch />
                    </label>
                </div>
                <div
                    onClick={() => { dispatch(setColorTheme(colorTheme == 'light' ? 'dark' : 'light')) }}
                    className="cursor-pointer ml-auto w-12 h-7 dark:bg-indigo-500 bg-gray-200 rounded-[100px] relative  ">
                    <label style={colorTheme === 'dark' ? { right: "2px" } : { left: "2px" }} className='flex items-center absolute h-full cursor-pointer transform transition-transform duration-700 '>
                        <img className="block w-5 h-5 rounded-[100px] bg-[#ffffff]" src="/sunny.svg" alt="" />
                    </label>
                </div>
            </div>
            <SearchModal isActive={isActive} setIsActive={setIsActive} />
        </header >
    )
}

export default Header