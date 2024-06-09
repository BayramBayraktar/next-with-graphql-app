import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IThemeType } from '../../types/index'

const initialState: IThemeType = {
    colorTheme: 'light'//default
}

const ThemeSlice = createSlice({
    name: 'ThemeSlice',
    initialState,
    reducers: {
        setColorTheme(state: IThemeType, action: PayloadAction<IThemeType['colorTheme'] | undefined | null>) {
            state.colorTheme = action.payload ?? state.colorTheme
        }
    }
})



if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    const defaultTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'light';
    initialState.colorTheme = defaultTheme
}


export const { setColorTheme } = ThemeSlice.actions
export default ThemeSlice.reducer