import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='bg-black'>
       <div className='content-header flex justify-center items-center flex-col pt-32'>
        <h1 className='h1-header font-bold
        text-white cursor-pointer hover:underline'>SuitUp</h1>
        <p className='text-white text-xl italic'>Elegance. Craftsmanship. Sophistication</p>

        <div className='grid grid-cols-4 gap-4 mt-10'>
            <Image src="/header-img1.jpg" alt='Header image' width={500} height={500} className='rounded-3xl'/>
            <Image src="/header-img2.jpg" alt='Header image' width={500} height={500} className='rounded-3xl'/>
            <Image src="/header-img3.jpg" alt='Header image' width={500} height={500} className='rounded-3xl'/>
            <Image src="/header-img4.jpg" alt='Header image' width={500} height={500} className='rounded-3xl'/>
        </div>
       </div>
    </header>
  )
}

export default Header