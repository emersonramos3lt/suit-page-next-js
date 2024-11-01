import Image from 'next/image'
import React from 'react'

const CenterContent = () => {
  return (
    <section className='center-section max-w-[800px] m-auto mt-32'>

        <div>
            <div className='content-grid grid grid-cols-2 gap-8 items-center mb-20'>
                <Image src="/article-img1.jpg" alt="Article image" width={400} height={400} className='rounded-3xl'/>
                <div>
                <span className="date">09/05/2024 - 4:12 PM</span>
                <h1 className='text-4xl font-extrabold cursor-pointer mt-4 mb-4 hover:underline'>Discover the Perfect Suit for Every Occasion</h1>
                <a href="/" className='more'>More 📖</a>
                </div>
            </div>

            <div className='content-grid grid grid-cols-2 gap-8 items-center mb-20'>
                <Image src="/article-img2.jpg" alt="Article image" width={400} height={400} className='rounded-3xl'/>
                <div>
                <span className="date">09/05/2024 - 4:12 PM</span>
                <h1 className='text-4xl font-extrabold cursor-pointer mt-4 mb-4 hover:underline'>Five Timeless Suit Styles to Elevate Your Wardrobe</h1>
                <a href="/" className='more'>More 📖</a>
                </div>
            </div>

            <div className='content-grid grid grid-cols-2 gap-8 items-center mb-20'>
                <Image src="/article-img3.jpg" alt="Article image" width={400} height={400} className='rounded-3xl'/>
                <div>
                <span className="date">09/05/2024 - 4:12 PM</span>
                <h1 className='text-4xl font-extrabold cursor-pointer mt-4 mb-4 hover:underline'>Introducing Our Exclusive Winter Collection: Stay Sharp in Style</h1>
                <a href="/" className='more'>More 📖</a>
                </div>
            </div>

            <div className='content-grid grid grid-cols-2 gap-8 items-center mb-20'>
                <Image src="/article-img4.jpg" alt="Article image" width={400} height={400} className='rounded-3xl'/>
                <div>
                <span className="date">09/05/2024 - 4:12 PM</span>
                <h1 className='text-4xl font-extrabold cursor-pointer mt-4 mb-4 hover:underline'>Master the Art of Sophistication with Our New Line of Suits</h1>
                <a href="/" className='more'>More 📖</a>
                </div>
            </div>

            <div className='content-grid last grid grid-cols-2 gap-8 items-center mb-20'>
                <Image src="/article-img5.jpg" alt="Article image" width={400} height={400} className='rounded-3xl'/>
                <div>
                <span className="date">09/05/2024 - 4:12 PM</span>
                <h1 className='text-4xl font-extrabold cursor-pointer mt-4 mb-4 hover:underline'>From Office to Evening: How to Wear Your Suit for Any Event</h1>
                <a href="/" className='more'>More 📖</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CenterContent