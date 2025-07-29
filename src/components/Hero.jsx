import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>PROTEIN AND CHILL WITH</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>GAIN<span className='text-red-600'>TRAIN</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>This is your Gym buddy who will let you achieve your <span className='text-red-500 font-medium'>goals</span> and accept all risks of becoming <span className='text-red-500 font-medium'>stronger and greater</span>,</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Ready to Transform"}></Button>
        </div>
    )
}
