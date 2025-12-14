
import { useTheme } from "./hooks/useTheme.js"

function App() {
  
  const { theme, setTheme } = useTheme()
      
  return (
    <div className="
      w-screen h-screen
      flex flex-col 
      items-center justify-center
      gap-10
      app-background
    ">
      
      <h1 className="text-2xl font-base ">
        Current theme: {theme}
      </h1>
      
      <div className="p-10 gap-10 flex">
        {/* Light Mode Button */}
        <button
          onClick={() => setTheme('light')}
          className="
            py-1 px-4 border rounded-md text-lg cursor-pointer
          "
        >
          Light
        </button>
        {/* Dark Mode Button */}
        <button
          onClick={() => setTheme('dark')}
          className="
            py-1 px-4 border rounded-md text-lg cursor-pointer
          "
        >
          Dark
        </button>
        {/* Light Mode Button */}
        <button
          onClick={() => setTheme('vibe')}
          className="
            py-1 px-4 border rounded-md text-lg cursor-pointer
          "
        >
          Vibe
        </button>
      </div>
    </div>
  )
}

export default App
