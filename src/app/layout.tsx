import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { StoreContextProvider } from "@context/context";
import { Sidebar } from "@components/Sidebar/Sidebar";

import "./globals.css";
import cn from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Medicine Viewer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        />
      </head>
      <body className={cn(inter.className, "relative")}>
        <StoreContextProvider>
          <Header />
          {children}
          <Sidebar />
          <Footer />
        </StoreContextProvider>
      </body>
    </html>
  );
}
