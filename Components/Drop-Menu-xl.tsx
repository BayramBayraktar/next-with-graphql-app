import React from 'react'


const DropMenu = () => {

    return (
        <div className='hidden -mt-4 absolute  left-0 z-30 py-8 w-full group-hover:block animate-down'>
            <div className='max-w-screen-xl mx-auto'>
                <div className="p-16 w-full gap-4 rounded-2xl grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 bg-gray-100 dark:bg-gray-900 border-indigo-700 border-[1px]">
                    <div className=' cursor-pointer dark:bg-indigo-400 border-white p-3 rounded-2xl'>
                        <span className='dark:text-white '>Technology</span>
                    </div>
                    <div className=' cursor-pointer dark:bg-indigo-400 border-white p-3 rounded-2xl'>
                        <span className='dark:text-white '>Technology</span>
                    </div>
                    <div className=' cursor-pointer dark:bg-indigo-400 border-white p-3 rounded-2xl'>
                        <span className='dark:text-white '>Technology</span>
                    </div>
                    <div className=' cursor-pointer dark:bg-indigo-400 border-white p-3 rounded-2xl'>
                        <span className='dark:text-white '>Technology</span>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default DropMenu