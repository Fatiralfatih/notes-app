import { array } from "prop-types"
import NoteItem from "./NoteItem"

const NotesList = ({ notes }) => {
    return (
        <div className="notes-list">
            {notes.map(note => (
                <NoteItem key={note.id}  {...note} />
            ))}
        </div>
    )
}

NotesList.propTypes = {
    notes: array
}

export default NotesList
