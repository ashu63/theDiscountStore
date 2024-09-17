import HomePageTop from "@/components/HomePageTop";
import HomePageProducts from "@/components/HomePageProducts";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="overflow-x-hidden" style={{scrollBehavior:"smooth"}}  >
            <HomePageTop/>
            <Banner/>
            <HomePageProducts />
          {/* <Products /> */}
    </div>
  );
}
