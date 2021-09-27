import React, { useRef, useEffect } from 'react'

export default function AboutMe(props) {

    const aboutMeDiv = useRef()

    useEffect(() => {
        if (props.aboutMeScroll === true) {
            aboutMeDiv.current.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"})
            props.setAboutMeScroll(false)
        }
    }, [props.aboutMeScroll])
    return (
        <div ref={aboutMeDiv} className='flex justify-center mt-40 flex-col text-center'>
            <div className='font-bold text-5xl'>
                About Me
            </div>
            <div className='flex justify-center mt-6'>
                 <div className='w-1/2 aboutMeText'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
            </div>
           
        </div>
    )
}
