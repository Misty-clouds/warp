import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Warp: The Agentic Development Environment",
  description:
    "Warp is an open agentic development environment born from the terminal. Run coding agents locally and in the cloud, across any model, any harness, repo, or tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-(--color-background) text-(--color-text)">
        {children}
      </body>
    </html>
  );
}
