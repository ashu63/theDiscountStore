"use client"

import { ShareIcon } from "@/svg/Svg"
import HeartComponent from "./HeartComponent"
import { useDispatch } from "react-redux";
import Snackbar from "@mui/joy/Snackbar";
import { useState } from "react";


import { addToBasket } from "@/lib/features/basketSlice";


function Test({id, image, category, title, price , description, discount, color, model}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  let discountantPrice = (price / 100) * discount;
  let totalDiscountantPrice = price - discountantPrice


    const addItemToBasket = () => {
        const product = {
          id,
          description,
          category,
          price,
          image,
          title,
          discount,
          color,
          model,
          quantity:1
    
        };
    
        dispatch(addToBasket(product));
        setOpen(true);
    
    
      };
  return (
    <div>
         <div className=" relative rounded-md  shadow-xl shadow-white-500/50 max-w-[90vw] block m-auto mt-20 mb-12   ">
        <div className="inline-block lg:flex  items-center justify-evenly p-2   ">
          <div className="mt-6 flex items-center justify-center ">
            <img
              className="w-60 sm:w-80 pb-3 object-contain "
              src={image}
              alt=""
            />
          </div>

          <div className=" text-start p-5 ">
            <p className="text-gray-500/70 font-semibold mb-3 text-sm">
              {category}
            </p>
            <div className="flex items-center gap-6">
              <p className="text-xl sm:text-3xl text-gray-700 font-light max-w-screen  lg:max-w-[30vw]">
                {title}
              </p>

              <HeartComponent />

              <ShareIcon />
            </div>
            <div className="flex items-center gap-1 mt-2">
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-4 text-yellow-500"
      >
        <path
          fill-rule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clip-rule="evenodd"
        />
      </svg>              
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-4 text-yellow-500"
      >
        <path
          fill-rule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clip-rule="evenodd"
        />
      </svg>              
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-4 text-yellow-500"
      >
        <path
          fill-rule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clip-rule="evenodd"
        />
      </svg>              
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-4 text-yellow-500"
      >
        <path
          fill-rule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clip-rule="evenodd"
        />
      </svg>              
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-4 text-yellow-500"
      >
        <path
          fill-rule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clip-rule="evenodd"
        />
      </svg>              
            </div>

            {/* <p className="text-gray-600 mt-2">Price : ${price}</p> */}

            <p className=" mt-3">
                {discount ?  <span className="text-lg font-bold text-blue-500">
                  ${totalDiscountantPrice}
                </span> : <span className="text-lg font-bold text-blue-500">${price}</span> }
                
          {discount && <span className="text-slate-700 text-sm pl-1 font-semibold line-through"> ${price} </span>  }  
          </p>

            <p className="text-gray-500 mt-3 max-w-xl leading-6 text-sm ">
              {description}
            </p>

         

            <div className="mt-6">
              <button onClick={addItemToBasket} className="bg-blue-500 w-64 p-2 rounded-sm hover:bg-blue-600 transition-all duration-200 text-white hover:border-none">
                Add to cart
              </button>
          
            </div>
          </div>
        </div>
      </div>


<Snackbar
        autoHideDuration={5000}
        
        size="md"
        open={open}
        variant="soft"
        color="danger"
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setOpen(false );
        }}
      >
        added to cart
      </Snackbar>
    </div>
  )
}

export default Test