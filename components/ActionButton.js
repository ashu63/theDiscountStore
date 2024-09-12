"use client";

import { addToBasket } from "@/lib/features/basketSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const MAX_RATING = 5;
const MIN_RATING = 2;

function ActionButton() {

  // const router = useRouter();
  // const dispatch = useDispatch();


  // const addItemToBasket = () => {
  //   const product = {
  //     id,
  //     description,
  //     category,
  //     price,
  //     image,
  //     title,
  //     rating,
  //   };

  //   dispatch(addToBasket(product));
  // };


  return (
  //   <div className="mt-6 flex gap-4">
  //   <button onClick = {addItemToBasket} className="border border-gray-400 w-36 p-2 rounded-sm hover:bg-blue-500 transition-all duration-200 hover:text-white hover:border-none">
  //     Add to cart
  //   </button>
  //   <button className="w-36 p-2 bg-blue-500 text-white rounded-sm hover:opacity-90  transition-all duration-200">
  //     Buy Now
  //   </button>
  // </div>
  <>
   <button 
              className="w-36 p-2 bg-blue-500 text-white rounded-sm hover:opacity-90  transition-all duration-200">
                Buy Now
              </button>


  </>
  );
}

export default ActionButton;



export function Rating() {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );

  return (
    // <div className="flex items-center">
    <>
      {/* {Array(rating)
        .fill()
        .map((_, i) => (
          <svg
            aria-hidden="true"
            class="h-5 w-5 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))} */}
          
        </>
//  </div> 
  );
}
