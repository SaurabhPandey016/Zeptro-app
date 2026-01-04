import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext';



const ProductCard = ({product}) => {


    const navigate = useNavigate();
    const{addToCart, cartItem} = useCart();

    // const addToWishlist = async (product) => {
    //   await fetch("http://localhost:3000/favorites", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       productId: product.productId,
    //       title: product.title,
    //       price: product.price,
    //       image: product.images[0],
    //     }),
    //   });
    // };

    
  return (
    <div className='border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max'>
      <img src={product.images[0]} alt="" className='bg-gray-100 aspect-square' onClick={()=> navigate(`/product/${product._id}`)} />
      <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>
      <p className='my-1 text-lg text-gray-800 font-bold'>${product.price}</p>
      <button onClick={() => addToCart(product)} className='bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold'><IoCartOutline className='w-6 h-6' /> Add to Cart</button>
      {/* <button onClick={addToWishlist(product)}>❤️</button> */}
    </div>
  )
}

export default ProductCard
