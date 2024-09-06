import HomePageTop from "@/components/HomePageTop";
import HomePageProducts from "@/components/HomePageProducts";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div style={{scrollBehavior:"smooth"}}  >
            <HomePageTop/>
            <Banner/>
            <HomePageProducts />
          {/* <Products /> */}
    </div>
  );
}
