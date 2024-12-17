import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import logo from "@/assets/images/logo-white.png";

export const metadata = {
  title: "RentalSpot",
  keywords: "rental, property, real estate",
  description: "Find the perfect rental property",
  icons: {
    icon: "/favicon.ico",
  },
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
