import { configureStore } from '@reduxjs/toolkit'
import Theme from './themeSlice'

const Store = configureStore({
    reducer: {
        Theme
    }
})


export default Store