"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Snackbar from "@mui/joy/Snackbar";

import { StoreSvg, ShoppingCartIcon } from "@/svg/Svg";
import { navLinks, navLinks2 } from "@/data/data";
import HeaderDropdown from "../components/HeaderDropdown"
import {useRouter} from "next/navigation"
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "@/lib/features/basketSlice";


function Header() {

  const session = useSession();

  const pathname = usePathname();
  const router = useRouter()
  const dispatch = useDispatch()
  const items = useSelector(selectItems)

  const isActive = (href) => {
    return pathname === href;
  };

 
  const isSession = session.status === "authenticated" ? navLinks2 : navLinks;

  return (
    <header className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-gray-300 shadow-md max-w-screen mx-auto ">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-pink-400/60 to-[#0055D1] rounded-md filter blur-3xl opacity-20 -z-50" />
      <Link
        href="/"
        className="text-2xl hidden sm:flex items-center justify-center gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="size-8"
        >
          <path
            className="text-blue-800"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
          />
        </svg>

        <span className="text-md italic text-blue-700 font-light underline decoration-wavy">
          Discount
        </span>
        <span className="text-sm italic text-gray-700  ">store</span>
      </Link>
      <ul className=" gap-8 sm:flex ">
        {isSession.map((nav) => {
          return (
            <Link
              key={nav.href}
              href={nav.href}
              className={
                isActive(nav.href)
                  ? "text-blue-500 font-semibold cursor-pointer hover:text-blue-500 transition-all ml-8 sm:ml-0"
                  : "text-gray-800 cursor-pointer hover:text-blue-500 transition-all ml-8 sm:ml-0"
              }
            >
              {nav.name}
            </Link>
          );
        })}
      </ul>
      <div className="flex items-center justify-center gap-5">

      <div onClick = {() => router.push("/checkout")} className="relative flex items-center cursor-pointer p-2 ">
        <span className={`${items.length > 0 && "animate-bounce"} absolute top-0 -right-0.5 bg-yellow-500 h-4 w-4 rounded-full text-center text-xs`} >
          {items.length}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>        
      </div>

      {session.status === "authenticated" ? (

<HeaderDropdown />
      ) : (
        <button
          onClick={() => signIn("google")}
          className=" hidden flex items-center justify-center p-2 gap-2 sm:gap-3 text-gray-600 rounded-md sm:border hover:text-black transition-all w-36 sm:w-40  hover:bg-blue-500/10"
        >
          <Avatar alt="" src={session?.data?.user?.image} />
          Log In
        </button>
      )}

     
      </div>

    </header>
  );
}

export default Header;
