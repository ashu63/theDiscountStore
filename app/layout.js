import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AuthProvider from "../components/Authprovider/AuthProvider";
import "./globals.css";
import { Providers } from "./providers";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "The Discount Stote",
  description: "A best E-commerce website You ever visit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-[100%]">
      <body className="relative m-0 min-h-[100%] pb-16 overflow-x-hidden" >
        <StoreProvider>
          <Providers>
            <AuthProvider>
              <div className="sticky top-0 left-0 w-full bg-white z-50 ">
                <Header />
              </div>
              <div className="flex flex-col flex-1 ">{children}</div>
              <div className="absolute bottom-0">
                <Footer />
              </div>
            </AuthProvider>
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
