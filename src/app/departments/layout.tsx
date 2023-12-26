import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Departments",
  description: "List of all departments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
