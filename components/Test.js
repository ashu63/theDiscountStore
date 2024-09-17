"use client"

import { ShareIcon } from "@/svg/Svg"
import HeartComponent from "./HeartComponent"
import { useDispatch } from "react-redux";
import Snackbar from "@mui/joy/Snackbar";
import { useState } from "react";


import { addToBasket } from "@/lib/features/basketSlice";


function Test({id, image, category, title, price , description, discount, color, model, brand}) {
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
         {/* <div className=" relative rounded-md  shadow-xl shadow-white-500/50 max-w-[90vw]  m-auto mt-20 2xl:mt-0 2xl:w-[70vw]">
        <div className="inline-block lg:flex  items-center justify-evenly p-2 2xl:h-screen  ">
          <div className="mt-6 flex items-center justify-center ">
            <img
              className="w-60 sm:w-80 pb-3 object-contain "
              src={image}
              alt=""
            />
          </div>

          <div className=" text-start p-5 ">
            <p className="text-gray-500/70 font-semibold mb-3 text-sm">
              {brand}
            </p>
            <div className="flex items-center gap-6">
              <p className="text-xl sm:text-2xl line-clamp-3 text-gray-700 font-light max-w-screen  lg:max-w-[30vw]">
                {title}
              </p>

              <HeartComponent />

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


            <p className=" mt-3">
                {discount ?  <span className="text-lg font-bold text-blue-500">
                  ${totalDiscountantPrice}
                </span> : <span className="text-lg font-bold text-blue-500">${price}</span> }
                
          {discount && <span className="text-slate-700 text-sm pl-1 font-semibold line-through"> ${price} </span>  }  
          </p>

            <p className="text-gray-500 line-clamp-6 mt-3 max-w-xl leading-6 text-sm ">
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
      </Snackbar> */}


<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex items-center justify-evenly flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded" src={image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{brand}</h2>
        <h1 className="text-gray-800 text-xl title-font line-clamp-2 font-medium mb-1">{title}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
         
        </div>
        <p className="leading-relaxed line-clamp-5 text-sm">{description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
         
        </div>
        <div className="flex items-center">
          
        <p className=" mt-3">
                {discount ?  <span className="text-lg font-bold text-blue-500">
                  ${totalDiscountantPrice}
                </span> : <span className="text-xl font-bold text-blue-500">${price}</span> }
                
          {discount && <span className="text-slate-700 text-sm pl-1 font-semibold line-through"> ${price} </span>  }  
          </p>
          <button onClick={addItemToBasket} className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 transition rounded">Add to cart</button>
          <button className="rounded-full w-10 h-10 bg-red-100 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <HeartComponent />

          </button>
      
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Test