/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import React from 'react'

const HireMe = () => {
  return (
    <div className='end-1 fixed flex flex-col items-start justify-start -bottom-4 overflow-hidden left-4'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <img 
                className='animate-spin-slow'
                alt='101'
                src="/101.svg"
            />
            <Link href="mailto:thaitv225@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border border-solid border-black w-20 h-20 rounded-full'>Connect!</Link>
        </div>
    </div>
  )
}

export default HireMe