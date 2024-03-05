import { useContext } from "react"
import LocaleContext from "../Context/localeContext"

const Searchbar = () => {

    const { locale } = useContext(LocaleContext);

    return (
        <div className="search-bar">
            <input type="text" name="search" placeholder={locale === 'id' ? 'Cari note...' : 'Search Note..'} />
        </div>
    )
}

export default Searchbar
