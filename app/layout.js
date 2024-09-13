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
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <StoreProvider>
          <Providers>
            <AuthProvider>
              <div className="sticky top-0 left-0 w-full bg-white/80 z-50 ">
                <Header />
              </div>
              {children}

              <Footer />
            </AuthProvider>
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
