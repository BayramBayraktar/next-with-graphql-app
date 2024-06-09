"use client"
import { useEffect } from 'react'
import { IThemeType } from '../types/index'
import { useSelector } from 'react-redux'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { colorTheme } = useSelector((state: { Theme: IThemeType }) => state.Theme)

    //change thema
    useEffect(() => {
        if (typeof window == 'undefined') {
            document.documentElement.classList.add('theme', colorTheme)
        }
        if (colorTheme === 'light') {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', "light")
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', "dark")
        }

    }, [colorTheme])


    return <>{children}</>;
}

