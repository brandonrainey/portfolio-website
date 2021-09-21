import React from 'react'

export default function Header(props) {
    return (
        <div className='flex h-40'>
            <div className='mt-auto ml-8 font-bold'>
                My Portfolio
            </div>
            <div className='ml-auto mt-auto'>
                <button onClick={() => props.setWorkScroll(true)} className='mr-4'>Work</button>
                <button onClick={() => props.setAboutMeScroll(true)} className='mr-4'>About</button>
                <button onClick={() => props.setContactScroll(true)} className='mr-4'>Contact</button>
            </div>
        </div>
    )
}
