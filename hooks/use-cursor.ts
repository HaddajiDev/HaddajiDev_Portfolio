"use client"

import { useEffect } from "react"

// Custom hook to manage cursor state
export function useCursor() {
  useEffect(() => {
    // Function to update cursor state for specific elements
    const updateCursorState = () => {
      // Re-query for interactive elements that might have been added dynamically
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .interactive',
      )

      const handleMouseEnter = () => {
        document.documentElement.classList.add("cursor-hover")
      }

      const handleMouseLeave = () => {
        document.documentElement.classList.remove("cursor-hover")
      }

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter)
          el.removeEventListener("mouseleave", handleMouseLeave)
        })
      }
    }

    // Initial setup
    const cleanup = updateCursorState()

    // Setup a mutation observer to detect DOM changes
    const observer = new MutationObserver(() => {
      cleanup()
      updateCursorState()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      cleanup()
      observer.disconnect()
    }
  }, [])
}
