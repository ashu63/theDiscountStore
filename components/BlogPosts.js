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

function BlogPosts({
  id,
  description,
  category,
  price,
  image,
  title,
  rating,
  discount,
  popular,
  model,
  color,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const [ratin] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );

  let discountantPrice = (price / 100) * discount;
  let totalDiscountantPrice = price - discountantPrice;

  const addItemToBasket = () => {
    const product = {
      id,
      description,
      category,
      price,
      image,
      title,
      discount,
      totalDiscountantPrice,
      model,
      color,
    };

    dispatch(addToBasket(product));
    setOpen(true);
  };

  return (
    <section className="">
      <div className="relative group max-w-screen-xl my-6  ">
        <div className="relative group rounded-xl w-80 bg-white p-3 shadow-lg cursor-pointer hover:shadow-xl overflow-hidden z-10">
          <div
            className="relative flex justify-center items-center rounded-xl"
            onClick={() => router.push(`/product/${id}`)}
          >
            <Image
              className="object-contain h-40"
              src={image}
              height={200}
              width={200}
              alt="product image"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-slate-400 ml-1 text-xs">4.9</span>
            </div>
          </div>

          <div className="mt-1 p-2 z-50">
            <h2 className="text-slate-700 line-clamp-2">{title}</h2>
            <p className="text-slate-400 mt-1  text-xs line-clamp-2 mt-2">
              {description}
            </p>

            <div className="mt-6 flex items-end justify-between">
              <p>
                {discount ? (
                  <span className="text-lg font-bold text-blue-500">
                    ${totalDiscountantPrice}
                  </span>
                ) : (
                  <span className="text-lg font-bold text-blue-500">
                    ${price}
                  </span>
                )}

                {discount && (
                  <span className="text-slate-700 text-sm pl-1 font-semibold line-through">
                    {" "}
                    ${price}{" "}
                  </span>
                )}
              </p>

              <div className="flex gap-4 lg:hidden">
                <div
                  onClick={() => router.push(`/product/${id}`)}
                  className="group inline-flex rounded-xl bg-blue-400 p-2 hover:bg-blue-600/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width={1.5}
                    stroke="currentColor"
                    className=" h-4 w-4 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>

                <div
                  onClick={addItemToBasket}
                  className="group relative inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="group-hover:text-blue-500 h-4 w-4 text-blue-400 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </div>
              </div>
              {popular ? (
                <p className="hidden lg:inline-block z-50 bg-red-700/80 font-bold p-2 w-28 rounded-md text-red-100 text-[10px] text-center">
                  {" "}
                  Limited time deal
                </p>
              ) : (
                <p className="hidden lg:flex justify-center z-50 bg-gray-200 font-bold p-2 rounded-md w-28 text-slate-500 text-xs text-center">
                  Trending
                </p>
              )}
            </div>
          </div>
        </div>
        <div class="hidden lg:inline-block absolute top-4 right-0 z-10 flex h-full w-full items-center justify-center rounded-md px-10 opacity-0 z-10 transition group-hover:opacity-100">
          <div class="absolute -right-6 top-4 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-2">
            <button
              onClick={addItemToBasket}
              className="group flex h-10 w-10 items-center justify-center rounded-full shadow-lg bg-blue-100 text-white transition hover:bg-white/70 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-5 w-5 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </button>
            <button
              onClick={() => router.push(`/product/${id}`)}
              className="group flex h-10 w-10 items-center justify-center rounded-full shadow-lg bg-blue-100 text-white transition hover:bg-white/70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width={1.5}
                stroke="currentColor"
                className=" h-4 w-4 text-blue-500 "
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
      </div>

      <Snackbar
        autoHideDuration={3000}
        variant="soft"
        color="primary"
        size="md"
        invertedColors
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={(theme) => ({
          background: `linear-gradient(45deg, ${theme.palette.primary[600]} 30%, ${theme.palette.primary[500]} 90%})`,
          maxWidth: 360,
          textAlign: "center",
        })}
      >
        Added To Cart
      </Snackbar>
    </section>
  );
}

export default BlogPosts;
