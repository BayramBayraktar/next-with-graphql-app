import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TextWriteEffect = () => {
    return (
        <TypeAnimation
            className='dark:text-gray-400 text-gray-900 mt-2 text-xl'
            sequence={[
                'Welcome to ES-HOP', 1000,
                'Share Your Thoughts, Inspire Others!', 1000,
                'Journey into Knowledge: The Blog!', 1000,
                'Stay Informed: The Blog!', 1000,
                'The Right Place for Information: The Blog!', 1000,
                'Share Your Ideas, Change the World!', 1000,
                'Explore the World with Your Keyboard!', 1000,
                'A Sea of Information Just a Click Away!', 1000,
                'Feed Your Imagination, Share Knowledge!', 1000,
                "Don't Stop Thinking, Start Blogging!", 1000,
            ]}
            wrapper="p"
            speed={10}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
        />
    )
}

export default TextWriteEffect