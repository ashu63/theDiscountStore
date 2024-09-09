"use client";
import { addToBasket } from "@/lib/features/basketSlice";
import { StarFillIcon } from "@/svg/Svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Snackbar from "@mui/joy/Snackbar";
import Image from "next/image";


const MAX_RATING = 5;
const MIN_RATING = 2;


function BlogPosts({ id, description, category, price, image, title, rating}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const [ratin] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );

  const addItemToBasket = () => {
    const product = {
      id,
      description,
      category,
      price,
      image,
      title,

    };

    dispatch(addToBasket(product));
    setOpen(true);


  };


  return (
    <div class="group relative m-6 flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg hover:bg-[#f8f8f8] transition duration-200  ">
      <div className=" group relative mx-3 mt-3 flex justify-center  rounded-xl cursor-pointer">
        <Image
          onClick={() => router.push(`/product/${id}`)}
          className="object-contain h-40"
          src={image}
          height={200}
          width={200}
          alt="product image"
          loading="lazy"
        />
      </div>
      <div className="mt-6 px-5 pb-8">
        <h5 className="text-md tracking-tight text-gray-700 font-semibold text-center mb-4 line-clamp-2 ">
          {title}
        </h5>
        <p className="leading-5 text-xs text-gray-600 line-clamp-2 text-center">
          {description}
        </p>
        <div className="mt-4 mb-5 flex items-center justify-evenly">
          <span className="text-2xl font-semibold text-slate-700">${price}</span>
          <div className="flex items-center ">



          {Array(ratin)
        .fill()
        .map((_, i) => (
          <svg

            aria-hidden="true"
            class="h-5 w-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}

            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
              {/* {rating.rate}  */}
              3.0
            </span>
          </div>
        </div>
        <div className="flex items-center justify-evenly">
          <button
            onClick={addItemToBasket}
            className="flex items-center justify-center rounded-md bg-gradient-to-b from-blue-300 to-blue-500 border border-blue-200 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200 lg:hidden xl:flex md:flex "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
          <button
            onClick={() => router.push(`/product/${id}`)}
            className="flex items-center justify-center rounded-md border px-5 py-2.5 text-center text-sm font-medium text-slate-800 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-200"
          >
            View Product
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="ml-2 h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

<Snackbar
        autoHideDuration={5000}
        
        size="lg"
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


  );
}

export default BlogPosts;
