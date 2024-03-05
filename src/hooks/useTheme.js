import { useEffect, useState } from "react"

const useTheme = () => {
    const [themeContext, setThemeContext] = useState({
        theme: localStorage.getItem('theme') || 'dark',
        toggleTheme: () => {
            setThemeContext(prevState => {
                const newTheme = prevState.theme === 'light' ? 'dark' : 'light'
                localStorage.setItem('theme', newTheme)
                return {
                    ...prevState,
                    theme: newTheme
                }
            })
        }
    })
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', themeContext.theme)

    }, [themeContext])

    return themeContext;
}

export default useTheme;
