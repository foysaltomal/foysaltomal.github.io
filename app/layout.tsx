import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foysal Tomal — A Life in Moments",
  description: "A personal photo journal of daily life, special moments, and creative work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
