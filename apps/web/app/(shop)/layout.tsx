"use client";

import { Inter } from "next/font/google";
import { metadata } from "../../helpers/metadata";

import { QueryClientProvider } from "react-query";

import { queryClient } from "@helpers/queryClient";

import { CartProvider } from "@providers/cart";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title dangerouslySetInnerHTML={{ __html: metadata.title || "" }} />
        <meta name="description" content={metadata.description || undefined} />
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <CartProvider>{children}</CartProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}