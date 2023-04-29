import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Sunny Bhandal",
  description: "Next 13 Crash Course",
  keywords: "next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="px-6 py-4">{children}</main>
      </body>
    </html>
  );
}
