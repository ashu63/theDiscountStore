import ActionButton from "@/components/ActionButton";
import HeartComponent from "@/components/HeartComponent";
import { ShareIcon, StarFillIcon, StarOutlineIcon } from "@/svg/Svg";
import axios from "axios";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const res = await axios.get("https://fakestoreapi.in/api/products");
  // const res = await axios.get("https://fakestoreapi.com/products");

  const data = res.data.products;

  // console.log(data);

  return data.map((product) => ({
    id: product.id.toString(),
  }));
}

async function getProduct(id) {
  const res = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
  // const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

  const data = res.data.product;
  // const data = res.data;
  return data;
}


async function BlogPage({ params }) {
  const product = await getProduct(params.id);


  // console.log(product);
  return (
    <div className="lg:h-[80vh] ">
      <div className=" relative rounded-md  shadow-xl shadow-white-500/50 max-w-[90vw] block m-auto mt-20 mb-12   ">
        <div className="inline-block lg:flex  items-center justify-evenly p-2   ">
          <div className="mt-6 flex items-center justify-center ">
            <img
              className="w-60 sm:w-80 pb-3 object-contain "
              src={product.image}
              alt=""
            />
          </div>

          <div className=" text-start p-5 ">
            <p className="text-gray-500/70 font-semibold mb-3 text-sm">
              {product.category}
            </p>
            <div className="flex items-center gap-6">
              <p className="text-xl sm:text-3xl text-gray-700 font-light max-w-screen  lg:max-w-[30vw]">
                {product.title}
              </p>
              <HeartComponent />

              <ShareIcon />
            </div>
            <div className="flex items-center gap-1 mt-2">
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-4 text-yellow-500"
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
        class="size-4 text-yellow-500"
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
        class="size-4 text-yellow-500"
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
        class="size-4 text-yellow-500"
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
        class="size-4 text-yellow-500"
      >
        <path
          fill-rule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clip-rule="evenodd"
        />
      </svg>              
            </div>

            <p className="text-gray-600 mt-2">Price : ${product.price}</p>
            <p className="text-gray-500 mt-3 max-w-xl leading-6 text-sm ">
              {product.description}
            </p>

         

    {/* <ActionButton product={product}/> */}
            <div className="mt-6 flex gap-4">
              {/* <button className="border border-gray-400 w-36 p-2 rounded-sm hover:bg-blue-500 transition-all duration-200 hover:text-white hover:border-none">
                Add to cart
              </button> */}
              <button className="w-36 p-2 bg-blue-500 text-white rounded-sm hover:opacity-90  transition-all duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
