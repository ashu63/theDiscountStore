"use client";
import { addToBasket } from "@/lib/features/basketSlice";
import { StarFillIcon } from "@/svg/Svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Snackbar from "@mui/joy/Snackbar";



function BlogPosts({ id, description, category, price, image, title, rating}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

 

  const addItemToBasket = () => {
    const product = {
      id,
      description,
      category,
      price,
      image,
      title,
      rating,
    };

    dispatch(addToBasket(product));
    setOpen(true);


  };


  return (
    <div class="group relative m-6 flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg hover:bg-[#f8f8f8] transition duration-200  ">
      <div className=" group relative mx-3 mt-3 flex justify-center  rounded-xl cursor-pointer">
        <img
          onClick={() => router.push(`/product/${id}`)}
          className="object-contain h-40"
          src={image}
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


            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-yellow-400"
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
              className="size-4 text-yellow-400"
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
              className="size-4 text-yellow-400"
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
              className="size-4 text-yellow-400"
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
              className="size-4 text-yellow-400"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>

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
        open={open}
        variant="soft"
        color="danger"
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setOpen(false);
        }}
      >
        added to cart
      </Snackbar>
    </div>


  );
}

export default BlogPosts;
