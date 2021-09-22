import React, { useRef, useEffect } from 'react'

export default function Contact(props) {

    const contactDiv = useRef()

    useEffect(() => {
        if (props.contactScroll === true) {
            contactDiv.current.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"})
            props.setContactScroll(false)
        }
    }, [props.contactScroll])

    return (
        <div ref={contactDiv} className='flex justify-center mt-40 flex-col text-center'>
            <div className='font-bold text-5xl'>
                Contact
            </div>
            <div className='font-bold underline mt-6'>
                noneya67@yahoo.com
            </div>
            <div className='flex justify-center mt-4'>
                <a href='https://github.com/Genlord'><img src='/githubIcon.png' className='h-10 w-10'/></a>
            </div>
        </div>
    )
}
