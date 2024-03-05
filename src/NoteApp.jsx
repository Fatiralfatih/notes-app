import { Route, Routes } from "react-router-dom"
import HeaderApp from "./Components/HeaderApp"
import HomePage from "./Pages/HomePage"
import ArchivedPage from "./Pages/ArchivedPage"
import { LocaleProvider } from "./Context/localeContext"
import { ThemeProvider } from "./Context/themeContext"
import useLocale from "./hooks/useLocale"
import useTheme from "./hooks/useTheme"
import AddNotes from "./Pages/AddNotes"
import NotFoundPage from "./Pages/NotFoundPage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import { useEffect, useState } from "react"
import { getUserLogged, putAccessToken } from "./utils/network-data"
import DetailNote from "./Pages/DetailNote"

const NoteApp = () => {
    const localeContext = useLocale();
    const themeContext = useTheme();

    const [authUser, setAuthUser] = useState(null)
    const [initilize, setInitilize] = useState(true);

    const onLoginSuccess = async ({ accessToken }) => {
        putAccessToken(accessToken)
        const { data } = await getUserLogged();

        setAuthUser(data)
    }

    useEffect(() => {
        async function logged() {
            const { data } = await getUserLogged()
            setAuthUser(data)
            setInitilize(false)
        }
        logged();
    }, [])

    const onLogout = () => {
        setAuthUser(null);

        putAccessToken('')
    }
    if (initilize) {
        return null;
    }

    if (authUser === null) {
        return (
            <LocaleProvider value={localeContext}>
                <ThemeProvider value={themeContext}>
                    <div className="app-container">
                        <HeaderApp />
                        <main>
                            <Routes>
                                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                                <Route path="/register" element={<RegisterPage />} />
                            </Routes>
                        </main>
                        <div className="note-app__footer">
                            <p>footer</p>
                        </div>
                    </div>
                </ThemeProvider>
            </LocaleProvider>
        )
    }

    return (
        <LocaleProvider value={localeContext}>
            <ThemeProvider value={themeContext}>
                <div className="app-container">
                    <HeaderApp onLogout={onLogout} />
                    <main>
                        <Routes>
                            <Route path="*" element={<NotFoundPage />} />
                            <Route path="/" element={<HomePage />} />
                            <Route path="/archives" element={<ArchivedPage />} />
                            <Route path="/add" element={<AddNotes />} />
                            <Route path="notes/:id" element={<DetailNote />} />
                        </Routes>
                    </main>
                    <div className="note-app__footer">
                        <p>footer</p>
                    </div>
                </div>
            </ThemeProvider>
        </LocaleProvider>
    )
}

export default NoteApp
