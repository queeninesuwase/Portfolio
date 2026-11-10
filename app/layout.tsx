import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Queen Ines Uwase — Software Developer",
  description: "Software developer portfolio featuring web, mobile, backend, QA, data and AI projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
