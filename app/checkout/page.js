"use client";

import CheckoutProduct from "@/components/CheckoutProduct";
import {
  removeFromBasket,
  selectTotal,
  selectItems,
} from "@/lib/features/basketSlice";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {loadStripe} from '@stripe/stripe-js';
import axios from "axios";


const stripePromise = loadStripe("pk_test_51Pvx2XSAqWOo8E1c5309hXc6CgGqTnXxvrEvSL1agY48cW3PehmZryZKts7Odg5oyYE3BHW1Iydex57EqM5zpbSQ00GxHrFcUv")

function Checkout() {
  const items = useSelector(selectItems);
  const session = useSession();
  const total = useSelector(selectTotal);


  const createCheckoutSession = async() => {
    try {
      const response = await fetch('/api/checkoutsession',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({products:items
        }),
      });
      const data = await response.json();
      if(data.url){
        window.location.href = data.url
      }
  } catch (error) {
    console.error("Error during checkout", error)
  }

  }


  return (
    <main className=" xl:flex max-w-screen-xl mx-auto bg-gray-50 relative p-4">
      <div className="flex-grow m-5 shadow-sm">
        <img
          className="w-screen object-contain"
          src="https://links.papareact.com/ikj"
          alt="banner"
          loading="lazy"
        />

        <div className="flex flex-col p-5 space-y-10">
          <h1 className="pb-4 text-3xl border-b">
            {items.length > 0
              ? `Your Shopping Basket (${items.length}) `
              : "Your Basket is Empty"}
          </h1>
        </div>

        <div>
          {items.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <div className=" shadow-md bg-white flex flex-col items-center xl:h-80 my-5 max-w-full rounded-md sticky top-20 ">
        {items.length > 0 && (
          <>
            <img
              className="w-full h-40 hidden xl:flex object-cover"
              src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2sLWotSNtWF6PdiWvMvJQvGVeTVleYbBaTA&s
"
              alt="dummy image"
            />
            <div className="p-4">
              <h1 className="whitespace-nowrap mt-4 text-gray-700">
                Your Subtotal ({items.length} items) :{" "}
                <span className="font-bold text-blue-600 text-lg">
                  $ {total}
                </span>{" "}
              </h1>

              <button
              disabled={session?.status === "unauthenticated" }
              role="link"
              onClick={createCheckoutSession}
                className={` ${
                  session?.status === "unauthenticated" &&
                  "bg-gray-300 border-gray-200 text-gray-300 cursor-not-allowed hover:bg-gray-400" } w-full h-12 mt-6 text-base rounded-sm cursor-pointer p-2 bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-md text-white font-semibold `}
              >
                {session?.status === "authenticated"
                  ? "Proceed to Checkout"
                  : "Sign In to Checkout"}
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Checkout;
