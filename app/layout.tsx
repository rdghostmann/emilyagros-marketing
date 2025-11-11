import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Head from "next/head";
import "./globals.css"
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "EmilyAgros – Nigeria's #1 Agro Marketplace",
  description: "Join Nigeria's fastest-growing agricultural marketplace. Connect buyers and sellers of farm produce seamlessly online.",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className={`w-full font-sans ${GeistSans.variable} ${GeistMono.variable}`}
        cz-shortcut-listen="true" >
        {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
        {/* <Analytics /> */}
        {/* <ScrollToTopButton /> */}
      </body>
    </html>
  )

}
