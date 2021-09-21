import React from 'react'

export default function Skills() {
    return (
        <div className='flex justify-center mt-40 flex-col text-center'>
            <div className='font-bold text-5xl'>
                Skills
            </div>
            <div className='flex justify-center mt-6 gap-x-10'>
                <img  src='/cssLogo.png' className='h-24 w-30'/>
                <img  src='/htmlLogo.png' className='h-24 w-30'/>
                <img  src='/jsIcon.png' className='h-24 w-30'/>
                <img  src='/reactIcon.png' className='h-24 w-30'/>
            </div>
        </div>
    )
}
