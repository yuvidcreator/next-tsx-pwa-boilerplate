import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FiSun } from 'react-icons/fi'

const ThemeChangerButton = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="flex flex-col justify-center items-cente text-center p-2">
            <button
                className="rounded-full p-2"
                onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light')
                }}
            >
                <FiSun className="text-3xl" />
            </button>
            {/* <span className='text-xs text-zinc-600 dark:text-zinc-400'>
                Switch
            </span> */}
        </div>
    )
}

export default ThemeChangerButton