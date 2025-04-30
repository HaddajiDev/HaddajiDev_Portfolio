"use client"

import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import CustomCursor from "@/components/custom-cursor"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Only render custom cursor on client side
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {children}
      {isMounted && <CustomCursor />}
    </>
  )
}
