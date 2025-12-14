import { useEffect } from "react"
import { useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState( () => {
      return localStorage.getItem('theme') || 'light'
    }
  )
  
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light','dark','vibe')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme] )
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
  
}

export { ThemeProvider };