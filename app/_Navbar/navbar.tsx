import React from 'react'
import Link from "next/link";

export default function Navbar() {
  return (
    <>
    
    <div className='bg-gray-100/70 flex justify-between p-2 items-center fixed top-0 left-0 w-full z-50'>
        <div>
          <Link href="/" className='text-xl font-bold text-black cursor-pointer'>
            ShopMart
          </Link>
        </div>
        <div className=''>
          <ul className='flex gap-4 text-black'>
            <Link href="/product" className=' cursor-pointer px-3 py-1 rounded-full hover:bg-black hover:text-white transition-all duration-200'>Products</Link>
            <Link href="/brands" className=' cursor-pointer px-3 py-1 rounded-full hover:bg-black hover:text-white transition-all duration-200'>Brands</Link>
            <Link href="/categoryes" className=' cursor-pointer px-3 py-1 rounded-full hover:bg-black hover:text-white transition-all duration-200'>Categories</Link>
          </ul>
        </div>
        <div>
          <button className=' text-black px-4 py-2 rounded cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
          </button>
        </div>
    </div>
    </>
    
  )
}
