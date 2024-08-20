import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'
import { MdPanoramaPhotosphere } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { footerData } from '../data/footerData'

export default function Footer() {
  return (
    <footer className='bg-secondary py-20 px-4  relative dark:bg-gray-900 dark:text-yellow-50 duration-200'>

      <div className='container mx-auto grid  md:grid-cols-5 gap-4 relative'>
        <div className='col-span-2 flex flex-col gap-2'>
          <Link to={"/"} className='flex gap-3 items-center'>
          <MdPanoramaPhotosphere  className="text-primary text-xl md:text-2xl" />
          <h1 className="text-primary font-bold text-xl md:text-4xl font-serif md:mr-0">
           OFFERINGSBYMK
          </h1>
          </Link>
              <p className='text-slate-600 text-base md:text-lg leading-loose max-w-lg dark:text-primary/90'>
              Welcome to <span className='font-bold text-primary underline'> OfferingsbyMK</span>, your one-stop shop for soul-soothing products. We specialize in crafting exquisite scented candles and offering natural treasures like rosemary and lavender. Each item is thoughtfully curated to enhance your spiritual journey and create a tranquil atmosphere. Experience the essence of serenity and connect deeply with your inner self through our premium offerings.
              </p>
              <div className="flex gap-4 text-lg md:text-2xl text-primary opacity-90">
            <Link href={'https://www.facebook.com/chedres'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoFacebook /></Link>
            <Link href={'https://www.twitter.com/chedres'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoTwitter /></Link>
            <Link href={'https://www.instagram.com/chedres'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoInstagram /></Link>
          </div>
        </div>
        <div className='flex flex-col md:pt-8'>
        <h2 className="text-xl font-bold underline text-slate-600 dark:text-primary/90">PRODUCT</h2>
            {
              footerData.slice(0,5).map(el =>
                <div key={el.id} className='flex flex-col gap-2 text-lg md:text-lg hover:translate-x-2 py-1 px-2 text-slate-600 dark:text-primary/90'>{el.title}</div>
              )
            }
        </div>
        <div className='flex flex-col md:pt-8'>
          <h2 className='text-xl font-bold underline text-slate-600 dark:text-primary/90'>BUYING</h2>
            {
              footerData.slice(5,9).map(el =>
                <div key={el.id} className='flex flex-col gap-2 text-lg md:text-lg hover:translate-x-2 py-1 px-2 text-slate-600 dark:text-primary/90'>{el.title}</div>
              )
            }
        </div>
        <div className='flex flex-col md:pt-8'>
        <h2 className='text-xl font-bold underline text-slate-600 dark:text-primary/90'>SOCIALS</h2>
            {
              footerData.slice(9,12).map(el =>
                <div key={el.id} className='flex flex-col gap-2 text-lg md:text-lg hover:translate-x-2 py-1 px-2 text-slate-600 dark:text-primary/90'> {el.title}</div>
              )
            }
        </div>
      </div>
    </footer>
  )
}
