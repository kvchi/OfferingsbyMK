import React from 'react'
import { shopData } from '../data/shopData'

export default function ShopItems() {
  return (

        <main className='rounded-b-xl'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 justify-center items-center p-10 dark:bg-slate-800 '>
        {
            shopData.map((el) => (
                <div key={el.id} className='hover:scale-105 duration-100 hover:shadow-lg dark:hover:shadow-2xl p-2 rounded-md cursor-pointer'>
                     <img
            src={el.image}
            alt={el.alt}
            className="w-[250px] h-[300px] object-cover rounded-md mx-auto"
          />
          <p className="text-xl text-center font-normal text-slate-600 dark:text-primary mt-2">
              {el.title}
            </p>
                </div>
            ))
        }
        
        </div>
        
        </main>
        
    
  )
}
