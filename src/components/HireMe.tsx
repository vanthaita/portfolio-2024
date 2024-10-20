/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import React from 'react'

const HireMe = () => {
  return (
    <div className='end-1 w-48 fixed flex flex-col items-end justify-end -bottom-4 overflow-hidden right-4'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <img 
                className='animate-spin-slow'
                alt='102'
                src="/102.svg"
            />
            <Link href="mailto:thaitv225@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black shadow-md border border-solid border-black w-20 h-20 rounded-full'>Hire Me!</Link>
        </div>
    </div>
  )
}

export default HireMe