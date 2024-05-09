'use client'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className='flex justify-around bg-fuchsia-700'>
        <Link href={'/'}>
          <div className='font-bold text-3xl m-4 text-white '>
              Todo List
          </div>
        </Link>
        <div >
          <Link href={'/all-task'}>
            <button className='p-3 mr-5 m-2 bg-fuchsia-500 text-white text-base rounded-md font-medium outline-none focus:outline-none focus:ring-4 focus:ring-gray-50 focus:ring-opacity-50'>Tasks</button>
          </Link>
          <Link href={'/all-task/completed-task'}>
            <button className='p-3 mr-5 m-2 bg-fuchsia-500 text-white text-base rounded-md font-medium outline-none focus:outline-none focus:ring-4 focus:ring-gray-50 focus:ring-opacity-50'>Completed Tasks</button>
          </Link>
        </div>
    </div>
  )
}

export default Navbar;