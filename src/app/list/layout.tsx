import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "List",
  description: "Selected Products List",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
