import Image from 'next/image'
import React from 'react'

const ShopSection = () => {
  return (
    <section className='shop-section'>
        <h1 className='h1-header text-9xl text-center font-extrabold pt-40'>Shop</h1>

        <div className='shop-grid grid grid-cols-5 gap-4 m-auto text-center mt-11'>
            <div>
                <Image src="/shop-img1.jpg" alt="Shop Image"
                width={500} height={500} className='rounded-3xl cursor-pointer mb-2'/>
                <p className='cursor-pointer italic hover:underline underline-offset-2'>Dress Shoes for Suit</p>
            </div>

            <div>
                <Image src="/shop-img2.jpg" alt="Shop Image"
                width={500} height={500} className='rounded-3xl cursor-pointer mb-2'/>
                <p className='cursor-pointer italic hover:underline underline-offset-2'>Man in Cyan Blue Suit</p>
            </div>

            <div>
                <Image src="/shop-img3.jpg" alt="Shop Image"
                width={500} height={500} className='rounded-3xl cursor-pointer mb-2'/>
                <p className='cursor-pointer italic hover:underline underline-offset-2'>Leather Dress Shoes</p>
            </div>

            <div>
                <Image src="/shop-img4.jpg" alt="Shop Image"
                width={500} height={500} className='rounded-3xl cursor-pointer mb-2'/>
                <p className='cursor-pointer italic hover:underline underline-offset-2'>Formal Wear Collection</p>
            </div>

            <div>
                <Image src="/shop-img5.jpg" alt="Shop Image"
                width={500} height={500} className='rounded-3xl cursor-pointer mb-2'/>
                <p className='cursor-pointer italic hover:underline underline-offset-2'>Classic Brown Suit</p>
            </div>
        </div>

        <div className='flex justify-center mt-12'>
            <button className='bg-black text-white p-5 text-xl transition-colors hover:bg-white hover:text-black'>See more products</button>
        </div>

        <div className='grid-footer-shop grid grid-cols-3 gap-4 mt-32'>
            <div className='column flex justify-center flex-col items-center'>
                <Image src="/arrows.svg" alt='Arrows icon' width={50} height={50} className='image'/>
                <p className='italic text-2xl'>Free Shipping</p>
            </div>
            
            <div className='column flex justify-center flex-col items-center'>
                <Image src="/lock.svg" alt='Lock icon' width={50} height={50} className='image'/>
                <p className='italic text-2xl'>Secured Payments</p>
            </div>

            <div className='column flex justify-center flex-col items-center'>
                <Image src="/support.svg" alt='Support icon' width={50} height={50} className='image'/>
                <p className='italic text-2xl'>Customer Service</p>
            </div>
        </div>
    </section>
  )
}

export default ShopSection