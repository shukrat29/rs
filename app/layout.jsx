import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

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
