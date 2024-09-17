import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/joy/Snackbar";
import { useSession } from "next-auth/react";

import { useState } from "react";
import Image from "next/image";
import {
  removeFromBasket,
  selectTotal,
  selectItems,
  increaseQuantity,
  decreaseQuantity
} from "@/lib/features/basketSlice";

function CheckoutProduct({
  // id,
  // title,
  // image,
  // description,
  // price,
  // discount,
  // category,
  // model,
  // color,
  // quantity
  item
}) {
  const [open, setOpen] = useState(false);

  const items = useSelector(selectItems);
  const session = useSession();
  const total = useSelector(selectTotal);

  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    setOpen(true);

    dispatch(removeFromBasket(item.id));
  };

  const incQuantity = () => {
    const product = {
      id:item.id,
      description:item.description,
      category:item.category,
      price:item.price,
      image:item.image,
      title:item.title,
      discount:item.discount,
      totalDiscountantPrice,
      model:item.model,
      color:item.color,
      quantity:1
    };
    dispatch(
      increaseQuantity(product)
    )

  }

  const decQuantity = () => {
    const product = {
      id:item.id,
      description:item.description,
      category:item.category,
      price:item.price,
      image:item.image,
      title:item.title,
      discount:item.discount,
      totalDiscountantPrice,
      model:item.model,
      color:item.color,
      quantity:1
    };
    dispatch(
      decreaseQuantity(product)
    )
  }

  let discountantPrice = (item.price / 100) * item.discount;
  let totalDiscountantPrice = item.price - discountantPrice;

  return (
    <div className="border-b">
      <div className="flow-root p-4">
        <ul className="my-3 ">
          <li className="flex flex-col space-y-3  text-left md:flex-row sm:space-x-5 sm:space-y-0">
            <div className="shrink-0 ">
              <Image
                height={100}
                width={100}
                className="h-28 w-28 max-w-full object-cover rounded-lg"
                src={item.image}
                alt="product image"
              />
            </div>

            <div className="relative flex flex-1 flex-col justify-between">
              <div className="md:col-gap-5 sm:grid md:grid-cols-2">
                <div className="pr-8 sm:pr-5">
                  <p className="text-base font-semibold text-gray-700 line-clamp-1 ">
                    {item.title}
                  </p>
                  <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">{item.model}</p>
                  <p className="mx-0 mt-1 mb-0 text-sm text-gray-400 font-semibold">
                    color : {item.color}
                  </p>
                </div>

                <div className="mt-4 flex items-end justify-between md:items-start md:justify-end">
                  <p className="flex shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                    {item.discount ? (
                      <span className="text-lg">${Math.round(totalDiscountantPrice * item.quantity)}</span>
                    ) : (
                      <span className="text-lg ">${Math.round(item.price * item.quantity)}</span>
                    )}
                  </p>

                  <div className="md:order-1">
                    <div className="mx-auto flex h-8 items-stretch text-gray-600">
                      <button disabled={item.quantity === 1} onClick={decQuantity} className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                        -
                      </button>
                      <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                        {item.quantity}
                      </div>
                      <button onClick={incQuantity} className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 flex sm:bottom-0 md:top-auto">
                <button
                  onClick={removeItemFromBasket}
                  type="button"
                  className="flex rounded p-2 text-center text-red-500 transition-all duration-200 ease-in-out focus:shadow hover:text-red-900"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                      className=""
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>

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
          removed from cart
        </Snackbar>
      </div>
    </div>
  );
}

export default CheckoutProduct;
