"use client"
import { createContext, useContext, useState, useEffect } from "react"

const AppContext = createContext()

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within AppProvider")
  }
  return context
}

export function Providers({ children }) {
  const [theme, setTheme] = useState("light")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  const value = {
    theme,
    toggleTheme,
    isLoading,
    setIsLoading,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
