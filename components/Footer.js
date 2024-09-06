import { StoreSvg } from "@/svg/Svg"
import Link from "next/link"

  
function Footer() {
  return (
    <div className=" w-screen text-gray-500 bg-gray-100 h-16 flex justify-around items-center">
        <Link
        href="/"
        className="text-2xl hidden sm:flex items-center justify-center gap-1"
      >
        <StoreSvg />
        
        <span className="text-md italic text-blue-700 font-light underline decoration-wavy">
          Discount{" "}
        </span>{" "}
        <span className="text-sm italic text-gray-700  ">store</span>
      </Link>
        <p>© 2024 | All right reserved</p>
        
        </div>
  )
}

export default Footer