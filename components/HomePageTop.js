import Link from "next/link"
import Typed from "@/components/Typed";


function HomePageTop() {
  return (
    <div>
       <section className="p-2 text-center h-[80vh] py-40 flex flex-col justfy-center items-center gap-6 ">
        <p className="text-3xl sm:text-4xl text-center font-mono">
          The <span className="text-blue-500">Discount</span> Store
        </p>
        <p className="text-gray-600 tracking-wide p-4 sm:p-0">
          Garb your favourite products at upto{" "}
          <span className="text-2xl text-blue-500/90">40%</span> discount
          prices.{" "}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <p className="text-gray-600 text-xl tracking-wide">
            We have the plenty of products in our Discount store like -{" "}
          </p>
          <p className="text-blue-500  text-2xl tracking-wide gap-2">
            <Typed />
          </p>
        </div>

        <Link
          href="#section1"
          className="flex items-center justify-center gap-2 mt-8 border border-blue-500 p-2 w-40 hover:bg-blue-500 hover:text-white rounded-sm transition-all"
        >
          Explore{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-3 animate-bounce"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </Link>

        {/* <div className="text-center mt-36 lg:mt-56  p-5">
        <p className="text-3xl font-light sm:text-4xl underline decoration-wavy animate-bounce text-blue-500/70">Here the list of products </p>
      </div> */}
      </section>
   
    </div>
  )
}

export default HomePageTop
