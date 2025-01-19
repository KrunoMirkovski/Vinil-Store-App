import React from 'react'
import HeroImgVinyls from "../../assets/HeroImgVinyls.jpg"

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row px-20 py-8 justify-between items-center gap-10'>
      <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={HeroImgVinyls} alt="hero_image" className='rounded-[16px]'/>
      </div>
        <div className='md:w-1/2 w-full md:text-right text-center'>
            <h1 className='text-2xl font-medium mb-7 text-primary md:text-5xl'>Vinyl Records for Every Vibe</h1>
            <p className='mb-10 leading-tight'>Spin into a world of rich sound and nostalgia. Our vinyl collection is crafted for music lovers who crave the depth and character of analog audio. Find your favorite albums and let the music move you.</p>
            <button className='btn-primary text-white'>Subscribe</button>
        </div>
    </div>
  )
}

export default HeroSection