import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { useContext } from "react";
import LocaleContext from "../Context/localeContext";
import { func } from "prop-types";

const HeaderApp = ({ onLogout }) => {

    const { locale } = useContext(LocaleContext);

    return (
        <header className="note-app__header">
            <h1>
                <Link to="/">{locale === 'id' ? 'Catatan dimanapun' : 'Note Anywhere'}</Link>
            </h1>
            <Navigation onLogout={onLogout} />
        </header>
    )
}
HeaderApp.propTypes = {
    onLogout: func,
}
export default HeaderApp
