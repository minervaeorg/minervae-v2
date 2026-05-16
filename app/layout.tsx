import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MINERVAE",
  description: "A European Review of Western Thought and Public Life",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: "MINERVAE",
    description: "A European Review of Western Thought and Public Life",
    images: ["/images/minervae-owl.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
