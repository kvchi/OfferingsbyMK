import React, {useState, useEffect} from 'react'
import { productData} from '../data/productData';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../store/cart';

export default function CartItems(props) {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
            const findDetail = productData.filter(product => product.id === productId)[0];
            setDetail(findDetail);
        }, [productId])
        console.log(detail)

        const handleMinusQuantity = () => {
          dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
          }));
        }
        const handlePlusQuantity = () => {
          dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
          }));
        }

        if (!detail) {
          return null; // or a loading spinner
      }

        // Convert the price to a number by stripping out non-numeric characters
    const numericPrice = parseFloat(detail.price.replace(/[^0-9.-]+/g, ""));


        
  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
        <img src={detail.image} alt=""  className='w-12'/>
        <h3>{detail.title}</h3>
        <p>{numericPrice * quantity}</p>
        <div className='w-20 flex justify-between'>
            <button className='bg-gray-300 rounded-full w-6 h-6 text-primary' onClick={handleMinusQuantity}>-</button>
            <span>{quantity}</span>
            <button className='bg-gray-300 rounded-full w-6 h-6 text-primary' onClick={handlePlusQuantity}>+</button>
        </div>
    </div>
  )
}
