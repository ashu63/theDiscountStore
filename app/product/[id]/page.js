import HeartComponent from "@/components/HeartComponent";
import Test from "@/components/Test";
import { BASE_URL } from "@/lib/apiRoutes";
import { ShareIcon, StarFillIcon, StarOutlineIcon } from "@/svg/Svg";
import axios from "axios";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const res = await axios.get(BASE_URL);
  // const res = await axios.get("https://fakestoreapi.com/products");

  const data = res.data.products;


  return data.map((product) => ({
    key:product.id,
    id: product.id.toString(),
  }));
}

async function getProduct(id) {
  const res = await axios.get(`${BASE_URL}/${id}`);
  // const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

  const data = res.data.product;
  // const data = res.data;
  return data;
}

async function BlogPage({ params }) {
  const product = await getProduct(params.id);


  return (
    <div className="">

      <Test
      id={product.id}
      image={product.image}
      category={product.category}
      title={product.title}
      price={product.price}
      description={product.description}
      discount={product.discount}
      color={product.color}
      model={product.model}


      />
    </div>
  );
}

export default BlogPage;
