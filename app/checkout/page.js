"use client";

import CheckoutProduct from "@/components/CheckoutProduct";
import {
  removeFromBasket,
  selectTotal,
  selectItems,
} from "@/lib/features/basketSlice";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useRouter, redirect } from "next/navigation";

const stripePromise = loadStripe(
  "pk_test_51Pvx2XSAqWOo8E1c5309hXc6CgGqTnXxvrEvSL1agY48cW3PehmZryZKts7Odg5oyYE3BHW1Iydex57EqM5zpbSQ00GxHrFcUv"
);


function Checkout() {
  // const items = useSelector(selectItems);
  const {items} = useSelector((state) => state.basket);
  const session = useSession();
  const total = useSelector(selectTotal);
  const router = useRouter();

  const shipping = total < 40 ? 3 : 6 


  const createCheckoutSession = async () => {
    if (session.status === "unauthenticated") {
      router.push("/login");
    } else {
      try {
        const response = await fetch("/api/checkoutsession", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ products: items }),
        });
        const data = await response.json();
        if (data.url) {
          window.location.href = data.url;
        }
      } catch (error) {
        console.error("Error during checkout", error);
      }
    }
  };

  return (
    <div className=" xl:flex w-screen mx-auto relative p-4 ">
      <div className="flex-grow m-5 shadow-sm">
        <img
          className="w-screen object-contain"
          src="https://links.papareact.com/ikj"
          alt="banner"
          loading="lazy"
        />

        <div className="flex flex-col p-5 space-y-4">
          <h1 className="pb-4 text-3xl border-b">
            {items.length > 0
              ? `Your Shopping Basket (${items.length}) `
              : "Your Basket is Empty"}
          </h1>
        </div>

        {items.length > 0  ? (
          <>
            <section class=" py-2 sm:py-4 lg:py-8">
              <div class="mx-auto">
                <div class="mx-auto max-w-screen-xl">
                  <div class="bg-white shadow">
                    <div class="px-3 py-2 sm:px-8 sm:py-4 pb-8">
                      <div className="">
                        {items.map((item, i) => (
                          <CheckoutProduct item={item}
                            // key={i}
                            // id={item.id}
                            // title={item.title}
                            // image={item.image}
                            // description={item.description}
                            // price={item.price}
                            // discount={item.discount}
                            // model={item.model}
                            // color={item.color}
                          />
                        ))}
                      </div>

                      <div class="mt-6 border-b py-2">
                        <div class="flex items-center justify-between">
                          <p class="text-sm text-gray-400">Subtotal</p>
                          <p class="text-lg font-semibold text-gray-600">
                            ${Math.round(total)}
                          </p>
                        </div>
                        <div class="flex items-center justify-between">
                          <p class="text-sm text-gray-400">Shipping</p>
                          <p class="text-lg font-semibold text-gray-600">
                            ${shipping}
                          </p>
                        </div>
                      </div>
                      <div class="mt-6 flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Total</p>
                        <p class="text-2xl font-semibold text-gray-700">
                          <span class=" mr-1 text-xs font-normal text-gray-400">
                            USD
                          </span>{" "}
                          ${Math.round(total + shipping)}
                        </p>
                      </div>

                      <div class="mt-6 text-center">
                        <button
                          onClick={createCheckoutSession}
                          type="button"
                          class={` ${
                            session?.status === "unauthenticated" &&
                            "group bg-gray-300 border-gray-200 text-gray-300 hover:bg-gray-400"
                          } group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 sm:text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800`}
                        >
                          {session?.status === "authenticated"
                            ? "Proceed to Checkout"
                            : "Sign In to Checkout"}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ): (

          <div className="flex flex-col items-center justify-center gap-4">
            <img className=" h-60" src="	https://cdn-icons-png.flaticon.com/512/13637/13637462.png" alt="" />
            <h2 className="text-4xl text-slate-800 font-semibold">Your cart is empty</h2>
            <button onClick = {() => router.push("/")} className="mt-6 bg-blue-700 w-64 p-2 rounded-sm hover:bg-blue-600 transition-all duration-200 text-white hover:border-none">
                Continue shopping
              </button>
          </div>

        ) }
      </div>
    </div>
  );
}

export default Checkout;

