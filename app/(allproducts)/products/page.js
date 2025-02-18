import BlogPosts from "@/components/BlogPosts";
import { BASE_URL } from "@/lib/apiRoutes";
import axios from "axios";

const getProducts = async () => {
  const res = await axios.get(`${BASE_URL}?limit=40`);
  // const res = await axios.get("https://fakestoreapi.in/api/products?limit=40");
  // const res = await axios.get("https://fakestoreapi.com/products");

  const data = res.data.products;
  return data;
};

const Products = async () => {
  const products = await getProducts();
  console.log(products)
  return (
    <div className="overflow-x-hidden">
      <div className="flex max-w-screen-xl mx-auto my-3 shadow-lg">
        <img
          className=" object-contain"
          src="https://m.media-amazon.com/images/G/31/AF/img24/Fashion/AF3.0/PC/Unrec/Banner/Deals_on_1_lakh_styles._CB567809662_.jpg"
          alt=""
        />
      </div>
      {/* <HomePageTop/> */}
      <section
        id="section3"
        className=" flex flex-wrap items-center justify-center gap-8 z-50 p-1 "
        // className=" grid  place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-6 z-50 "
      >
        {products
          .slice(0, 6)
          .map(({ id, description, price,rating, category, image, title, discount, popular, model, color }) => {
            return (
              <BlogPosts
                key={id}
                id={id}
                description={description}
                category={category}
                image={image}
                price={price}
                rating={rating}
                title={title}
                discount={discount}
                popular={popular}
                model={model}
                color={color}
              />
            );
          })}

        {/* <img
          className="object-contain col-span-full"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/Header3000x700.gif"
          alt=""
        /> */}

        <div className="text-md">
          {products
            .slice(6, 7)
            .map(
              ({ id, description, price, category, image, rating, title, discount, popular, model, color }) => {
                return (
                  <BlogPosts
                    key={id}
                    id={id}
                    description={description}
                    category={category}
                    image={image}
                    price={price}
                    rating={rating}
                    title={title}
                    discount={discount}
                    popular={popular}
                    model={model}
                    color={color}
                  />
                );
              }
            )}
        </div>


          {products
            .slice(7,)
            .map(
              ({ id, description, price, category, image,  title, rating, discount, popular, model, color }) => {
                return (
                  <BlogPosts
                    key={id}
                    id={id}
                    description={description}
                    category={category}
                    image={image}
                    price={price}
                    rating={rating}
                    title={title}
                    discount={discount}
                    popular={popular}
                    model={model}
                    color={color}

                  />
                );
              }
            )}
      </section>
    </div>
  );
};

export default Products;
