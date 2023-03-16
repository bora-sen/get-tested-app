import React from 'react'
import NotFoundImage from './Assets/notFound.svg'

function NotFound() {

  return (
    <main className='flex justify-center items-center w-full h-screen bg-primary-white p-4'>
      <div className='text-center grid gap-4'>
        <img className='md:w-[35rem]' src={NotFoundImage} alt="" />
        <span className='font-bold text-8xl'>404</span>
        <span className='block font-semibold text-5xl'>Page Not Found</span>
        <a href="/" className='block button-primary-blue'>Navigate to HomePage</a>
      </div>
    </main>
  )
}

export default NotFound