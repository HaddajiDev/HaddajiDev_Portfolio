import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ClientLayout from "./ClientLayout"
import "./globals.css"
import { AlertProvider } from "../components/AlertProvider";
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HaddajiDev",
  description: "Portfolio of Ahmed Haddaji, a web and game developer creating immersive digital experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/imgs/logo.png" />
      </head>
      <body className={inter.className}>
        <ClientLayout><AlertProvider>{children}</AlertProvider></ClientLayout>
      </body>
    </html>
  )
}
