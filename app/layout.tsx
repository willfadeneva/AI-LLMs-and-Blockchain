import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI, LLM & Blockchain Builder Roadmap",
  description:
    "A practical learning roadmap for AI, LLMs, agents, blockchain, Web3, trading systems, and production software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
