import React from 'react'

function Footer() {
  return (
    <>
    <section className='bg-primary-blue text-center p-4 md:flex md:items-center md:justify-between'>
      <div>
        <h1 className='text-4xl font-bold font-display text-primary-white'><a href="/">getTested</a></h1>
      </div>
      <ul className='flex flex-col md:flex-row text-primary-white gap-8 my-12'>
        <li><a href="/" className='button-primary-white'>Create a Test</a></li>
        <li><a href="/">About getTested</a></li>
      </ul>
    </section>
    <div className='text-white text-xs text-center bg-primary-blue'>
        <span>Copyright 2023 | Bora</span>
    </div>
    </>
  )
}

export default Footer