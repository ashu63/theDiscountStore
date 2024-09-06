import BlogPosts from "@/components/BlogPosts";
import axios from "axios";

const getProducts = async () => {
  const res = await axios.get("https://fakestoreapi.in/api/products?limit=20");
  // const res = await axios.get("https://fakestoreapi.com/products");

  const data = res.data.products;
  return data;
};

const Products = async () => {
  const products = await getProducts();
  // console.log(products)

  // const getTenProducts = products.slice(0,10)
  // const getUniqueData = ({ data }) => {
  //   let filterPro = products.map((product) => {
  //     return product.category;
  //   });

  //   return (filterPro = [...new Set(filterPro)]);
  // };

  // const categryOnlyData = getUniqueData(products);
  // console.log(categryOnlyData);

  // }
  return (
    <div>
      <div className="flex max-w-screen-xl mx-auto my-3 shadow-lg">
        <img
          className="w-screen object-contain"
          src="https://m.media-amazon.com/images/G/31/AF/img24/Fashion/AF3.0/PC/Unrec/Banner/Deals_on_1_lakh_styles._CB567809662_.jpg"
          alt=""
        />
      </div>
      {/* <HomePageTop/> */}
      <section
        id="section1"
        className=" grid grid-flow-row-dense place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  "
      >
        {products
          .slice(0, 6)
          .map(({ id, description, price,rating, category, image, title }) => {
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
              />
            );
          })}

        <img
          className="object-contain col-span-full"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/Header3000x700.gif"
          alt=""
        />

        <div className="md:col-span-2 text-md">
          {products
            .slice(6, 7)
            .map(
              ({ id, description, price, category, image, rating, title }) => {
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
                  />
                );
              }
            )}
        </div>


          {products
            .slice(7,)
            .map(
              ({ id, description, price, category, image,  title, rating }) => {
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
                  />
                );
              }
            )}
      </section>
    </div>
  );
};

export default Products;
