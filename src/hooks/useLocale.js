import { useState } from "react";

const useLocale = () => {
    const [localeContext, setLocaleContext] = useState({
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
            setLocaleContext(prevState => {
                const newLocale = prevState.locale === 'id' ? 'en' : 'id'
                localStorage.setItem('locale', newLocale)
                return {
                    ...prevState,
                    locale: newLocale,
                }
            })
        }
    });

    return localeContext
}

export default useLocale
