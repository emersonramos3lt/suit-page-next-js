import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white mt-20 p-12'>
        <div className='footer-text m-auto grid grid-cols-2 gap-4 items-center'>
            <div>
                <h1 className='text-3xl font-bold mb-2'>@SuitUp</h1>

                <div className='inline-flex items-center mt-2'>
                    <span className='mr-4'>
                        <Image src="/instagram.svg" alt=""
                        width={20} height={20} className='cursor-pointer'/>
                    </span>
                    <span className='mr-4'>
                        <Image src="/facebook.svg" alt=""
                        width={20} height={20} className='cursor-pointer'/>
                    </span>
                    <span className='mr-4'>
                        <Image src="/tiktok.svg" alt=""
                        width={20} height={20} className='cursor-pointer'/>
                    </span>
                    <span className='mr-4'> 
                        <Image src="/youtube.svg" alt=""
                        width={20} height={20} className='cursor-pointer'/>
                    </span>     
                </div>
            </div>
            <div className='flex justify-end'>
                <form action="" method="post">
                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="email" placeholder='Your email' required/>
                    
                    <button type='submit' className='p-2 bg-white text-black border-none ml-2'>Submit</button>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer