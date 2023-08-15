import "./globals.scss";
import { Navbar } from "./components/navbar/Navbar";
// import { Footer } from "./components/footer/Footer";

export const metadata = {
  title: "ES | Easy Start",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container">
        <Navbar />

        <div className="">{children}</div>

        
      </body>
    </html>
  );
}
