import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Product",
  description: "Product details page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
