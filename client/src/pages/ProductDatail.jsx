import React, { useState} from 'react'
import {useParams} from 'react-router-dom'
import { productData } from '../data/productData';
import { BsCart4 } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart';
import {toast} from 'react-hot-toast';


export default function ProductDatail() {
    const {id} =useParams();
    const product = productData.find(p => p.id === id);
    const [quantity, setQuantity] = useState(1); 
    const dispatch = useDispatch();

    if (!product) {
        return <p>Product not found</p>;
    }

    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity -1);
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
        }

        const handleAddToCart = (id) => {
            dispatch(addToCart({
               productId:id,
               quantity: quantity
            })) 
            toast.success('Product added to cart');
        }

  return (
    <aside className='container mx-auto flex md:flex-row-reverse flex-col-reverse items-center justify-center py-20 gap-8 bg-slate-100 dark:bg-slate-800'>
        <div className=''>
        <img src={product.image} alt={product.title} className="w-[300px] h-[400px] object-cover rounded-md"/>
        <h1 className='text-3xl font-bold text-slate-600 dark:text-primary text-center'>{product.title}</h1>
        <p className='text-lg font-medium text-slate-600 dark:text-primary text-center'>{product.price}</p>
        <div className='flex gap-5 mt-2 items-center justify-between '>
            <div className='flex gap-2 justify-center items-center'>
                <button className='bg-gray-300 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'onClick={handleMinusQuantity}>-</button>
                <span className='bg-gray-300 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
                <button className='bg-gray-300 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
            </div>
            <div>
            <button className="bg-primary hover:bg-primary/50 text-slate-600 font-bold p-2 rounded-md flex justify-center items-center gap-2 shadow-2xl" onClick={() => handleAddToCart(id)}><BsCart4 className='w-6 text-2xl text-slate-800' /></button>
            </div>
        </div>
        </div>
        <div className='max-w-md mt-10'>
            <h1 className='text-3xl font-bold text-slate-600 dark:text-primary underline text-center'>DESCRIPTION</h1>
            <p className='text-xl text-slate-700 dark:text-primary'>{product.description}</p>
        </div>
    </aside>
  )
}
