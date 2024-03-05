import { useNavigate } from "react-router-dom"
import NoteInput from "../Components/NoteInput"
import { addNote } from "../utils/network-data"

const AddNotes = () => {
    const navigate = useNavigate();
    const onAddNote = async ({ title, body }) => {
        const { error } = await addNote({ title, body })
        if (!error) {
            navigate('/')
        }
    }

    return (
        <div className='add-new-page'>
            <NoteInput addNote={onAddNote} />
        </div>
    )
}

export default AddNotes
