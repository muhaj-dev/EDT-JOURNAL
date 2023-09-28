import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav className='border-2 border-b-black'>
        <div className='flex justify-between h-[50px] items-center w-[95%]  max-w-[1300px] mx-auto'>
            <div className=''>
                EDT
            </div>
            <div className='flex gap-5'>
                <Link href='/'>Journal & Book</Link>
                <Link href='/'>Blog</Link>
                <Link href='/'>FAQ</Link>
            </div>
            <div className='flex gap-6'>
            <Link className='text-primary  py-3 px-5 hover:bg-primary hover:text-white ease-in-out transition' href='/'>Sign in</Link>
            <Link  className='bg-primary py-3 px-6 border-2 border-primary hover:bg-white ease-in-out transition hover:text-primary text-white' href='/'>Sign up</Link>
                
            </div>

        </div>
    </nav>
  )
}
