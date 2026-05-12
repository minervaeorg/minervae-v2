import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MINERVAE",
  description: "A European Review of Western Thought and Public Life"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
