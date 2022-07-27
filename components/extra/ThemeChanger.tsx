import { useTheme } from 'next-themes'

// Optional
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col space-y-2 p-2">
      The current theme is: {theme}
      <button onClick={() => setTheme('light')} className="rounded px-4 py-2 bg-black hover:bg-pink-600 text-white">Light Mode</button>
      <button onClick={() => setTheme('dark')} className="rounded px-4 py-2 bg-black hover:bg-pink-600 text-white">Dark Mode</button>
    </div>
  )
}

export default ThemeChanger