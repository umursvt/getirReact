import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export default function ProductItem({ product }) {
  return (
    <div className="relative border m-5 bg-white flex flex-col items-center text-center ">
      <button className=" absolute top-0 right-0 w-8 h-8 flex items-center justify-center   ">
        <AiOutlinePlusCircle />
      </button>
      <img src={product.image} alt="asdasd" className="cursor-pointer " />
      <div className=" text-sm font-semibold text-brand-color">
        {product.title}
      </div>
      <div className=" text-sm font-semibold text-gray-900 ">
        <div className=" text-gray-500  "> {product.alt} </div>
      </div>
    </div>
  );
}
