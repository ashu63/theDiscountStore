import BlogPosts from "@/components/BlogPosts";
import { ArrowRight } from "@/svg/Svg";
import axios from "axios";
import Link from "next/link";

const getProducts = async () => {
  const res = await axios.get("https://fakestoreapi.in/api/products");
  // const res = await axios.get("https://fakestoreapi.com/products");
  // const res = await axios.get("https://api.escuelajs.co/api/v1/products");
  const data = res.data.products;
  
  return data;
};

const Products = async () => {
  const products = await getProducts();
  // console.log(products)

  const getTenProducts = products.slice(0, 9);
  // console.log(getTenProducts)
  return (
    <div>
      {/* <HomePageTop/> */}
      <section
        id="section2"
        className=" max-w-secreen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center -mt-24 lg:-mt-60 md:-mt-40  "
      >
        {getTenProducts.map(
          ({ id, description, price, category, image,  title }) => {
            return (
              <div className=" ">
                <BlogPosts
                  key={id}
                  id={id}
                  description={description}
                  category={category}
                  image={image}
                  price={price}
                  // rating={rating}
                  title={title}
                />{" "}
              </div>
            );
          }
        )}
      </section>
      <div className="flex items-center justify-center my-6 underline text-blue-700 p-2">
        <Link
          className="group hover:text-blue-600 text-md flex items-center justify-center"
          href="/products"
        >
          {" "}
          More Products{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 mx-1 group-hover:translate-x-2 transition-all duration-300 group-hover:text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Products;
