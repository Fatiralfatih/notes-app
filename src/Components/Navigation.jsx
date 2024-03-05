import { FaRegMoon } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { MdArchive, MdOutlineGTranslate } from "react-icons/md"
import { Link } from "react-router-dom"
import { LocaleConsumer } from "../Context/localeContext"
import { ThemeConsumer } from "../Context/themeContext"
import { IoSunnyOutline } from "react-icons/io5";
import { func } from "prop-types"

const Navigation = ({ onLogout }) => {
    return (
        <LocaleConsumer>{
            ({ toggleLocale }) => (
                <ThemeConsumer>{
                    ({ theme, toggleTheme }) => (
                        <nav className="navigation">
                            <ul>
                                <li>
                                    <Link to="/archives">
                                        <MdArchive size={30} />
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={toggleTheme}>
                                        {theme === 'dark'
                                            ?
                                            (<IoSunnyOutline size={30} />)
                                            :
                                            (<FaRegMoon size={30} />)
                                        }

                                    </button>
                                </li>
                                <li>
                                    <button onClick={toggleLocale}>
                                        <MdOutlineGTranslate size={30} />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={onLogout}>
                                        <FiLogOut size={30} />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    )
                }
                </ThemeConsumer>
            )
        }
        </LocaleConsumer>
    )
}
Navigation.propTypes = {
    onLogout: func,
}
export default Navigation
