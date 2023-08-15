import { Roboto } from "next/font/google";

export const metadata = {
  title: " ES | Admin Page",
};

const font_Roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#141414" }}>
        <div className={`${font_Roboto.className}`}>{children}</div>

        {/* <footer>
            <div className="">
                gdfsg
            </div>
        </footer> */}
      </body>
    </html>
  );
}
