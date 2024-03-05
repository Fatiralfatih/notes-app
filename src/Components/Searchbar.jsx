import { useContext } from "react"
import LocaleContext from "../Context/localeContext"
import { func, string } from "prop-types";

const Searchbar = ({ keyword, onSearch }) => {
    const { locale } = useContext(LocaleContext);
    return (
        <div className="search-bar">
            <input
                type="text"
                name="search"
                placeholder={locale === 'id' ? 'Cari note...' : 'Search Note..'}
                value={keyword}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    )
}

Searchbar.propTypes = {
    keyword: string,
    onSearch: func,
}

export default Searchbar
