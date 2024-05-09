import { Inter } from "next/font/google";
import "./globals.css";
import CtxProvider from "@/context/CtxProvider";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo List",
  description: "Generated for listing tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><CtxProvider><Layout>{children}</Layout></CtxProvider></body>
    </html>
  );
}