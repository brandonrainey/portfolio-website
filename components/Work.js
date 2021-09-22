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
                Projects
            </div>
            <div className='flex justify-center mt-6 gap-x-10 projectContainer'>
                <a className='w-1/4 transform duration-150 ease-in-out hover:scale-105 projectOne' href='https://google.com'><img src='/anime.png' className='rounded'/></a>
                <a className='w-1/4 transform duration-150 ease-in-out hover:scale-105 projectTwo' href='https://google.com'><img src='/ecommerce.png' className='rounded'/></a>
            </div>
            
        </div>
    )
}
