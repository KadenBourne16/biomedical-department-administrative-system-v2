"use client"
import React from 'react';
import Link from 'next/link';


const SignUp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-auto">
      <div className="flex justify-center items-center h-screen bg-white p-4 hover:cursor-pointer hover:bg-stone-100 transition-all duration-300 ease-in-out left-side">
        <div className="text-center hover:text-blue">
          <Link className='' href="/signup/students">
            <h1 className='font-bold text-2xl text-blue-600 hover:text-4xl'>Student</h1>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen bg-blue-500 hover:shadow-lg p-4 hover:cursor-pointer hover:bg-blue-900 transition-all duration-300 ease-in-out">
        <Link className='' href="/signup/lecturer">
            <h1 className='font-bold text-2xl text-white hover:text-4xl'>Lecturers</h1>
          </Link>
      </div>
    </div>
  )
}

export default SignUp
