import { Route, Routes } from "react-router-dom"
import HeaderApp from "./Components/HeaderApp"
import HomePage from "./Pages/HomePage"
import ArchivedPage from "./Pages/ArchivedPage"
import { LocaleProvider } from "./Context/localeContext"
import { ThemeProvider } from "./Context/themeContext"
import AddNotes from "./Pages/AddNotes"
import NotFoundPage from "./Pages/NotFoundPage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import DetailNote from "./Pages/DetailNote"
import { useAuthenticate, useLocale, useTheme } from "./hooks"

const NoteApp = () => {
    const localeContext = useLocale();
    const themeContext = useTheme();

    const { initilize, authUser, onLoginSuccess, onLogout } = useAuthenticate();

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
