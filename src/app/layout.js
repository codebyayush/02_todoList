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
  const bgUrl = 'https://source.unsplash.com/pcpsVsyFp_s';

  return (
    <html lang="en">
      <body className={inter.className}>
        <CtxProvider>
          <Layout>
            <div
              style={{
                backgroundImage: `url(${bgUrl})`,
                backgroundSize: "cover",
              }}
              className="h-screen"
            >
              {children}
            </div>
          </Layout>
        </CtxProvider>
      </body>
    </html>
  );
}
