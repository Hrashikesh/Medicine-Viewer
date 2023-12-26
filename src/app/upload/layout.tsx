import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Upload",
  description: "Upload products with Doctor details",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
