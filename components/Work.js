import React, { useEffect, useRef } from 'react'


export default function Work(props) {
    const workDiv = useRef()

    useEffect(() => {
        if (props.workScroll === true) {
            workDiv.current.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"})
            props.setWorkScroll(false)
        }
    }, [props.workScroll])


    return (
        <div ref={workDiv} className='flex justify-center mt-40 flex-col text-center'>
            <div className='font-bold text-5xl'>
                Work
            </div>
            <div className='flex justify-center mt-6 gap-x-10'>
                <a className='w-1/4' href='https://google.com'><img src='/anime.png'/></a>
                <a className='w-1/4' href='https://google.com'><img src='/ecommerce.png' /></a>
            </div>
            
        </div>
    )
}
