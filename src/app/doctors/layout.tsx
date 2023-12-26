import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Doctors",
  description: "All Doctors list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
