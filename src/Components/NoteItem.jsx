import { string } from "prop-types"
import { showFormattedDate } from "../utils"
import { Link } from "react-router-dom"
import { useContext } from "react"
import LocaleContext from "../Context/localeContext"

const NoteItem = ({ body, createdAt, id, title }) => {
    const { locale } = useContext(LocaleContext);
    return (
        <div className="note-item">
            <h3 className="note-item__title"><Link to={`/notes/${id}`}>{title}</Link></h3>
            <p className="note-item__createdAt">{showFormattedDate(createdAt, locale)}</p>
            <p className="note-item__body">
                {body}
            </p>
        </div>
    )
}
NoteItem.propTypes = {
    id: string.isRequired,
    body: string.isRequired,
    title: string.isRequired,
    createdAt: string.isRequired
}
export default NoteItem
