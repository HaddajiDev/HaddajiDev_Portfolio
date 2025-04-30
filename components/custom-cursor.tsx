"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Show cursor after a short delay to prevent initial positioning issues
    const visibilityTimeout = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    const dot = dotRef.current
    const circle = circleRef.current

    if (!dot || !circle) return

    let mouseX = 0
    let mouseY = 0
    let circleX = 0
    let circleY = 0

    // Update dot position immediately with mouse
    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Position the dot directly at the mouse position
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    // Animate circle with smooth following effect
    const animateCircle = () => {
      // Smooth following effect with easing
      circleX += (mouseX - circleX) * 0.1
      circleY += (mouseY - circleY) * 0.1

      // Apply the position
      circle.style.left = `${circleX}px`
      circle.style.top = `${circleY}px`

      // Continue the animation loop
      requestAnimationFrame(animateCircle)
    }

    // Handle hover states for interactive elements
    const handleMouseEnter = () => {
      circle.classList.add("hovered")
    }

    const handleMouseLeave = () => {
      circle.classList.remove("hovered")
    }

    // Add event listeners
    document.addEventListener("mousemove", moveCursor)

    // Start the animation loop
    requestAnimationFrame(animateCircle)

    // Add hover effect for all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], .interactive',
    )

    interactiveElements.forEach((target) => {
      target.addEventListener("mouseenter", handleMouseEnter)
      target.addEventListener("mouseleave", handleMouseLeave)
    })

    // Cleanup function
    return () => {
      clearTimeout(visibilityTimeout)
      document.removeEventListener("mousemove", moveCursor)

      interactiveElements.forEach((target) => {
        target.removeEventListener("mouseenter", handleMouseEnter)
        target.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${isVisible ? "opacity-100" : "opacity-0"}`}></div>
      <div ref={circleRef} className={`cursor-circle ${isVisible ? "opacity-100" : "opacity-0"}`}></div>
    </>
  )
}
