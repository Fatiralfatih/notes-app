import { useNavigate } from "react-router-dom"
import FormNotes from "../components/FormNotes"
import { addNote } from "../utils/local-data"

const AddNotePage = () => {

    const navigate = useNavigate()
    const onAddContactHandler = (note) => {
        addNote(note)
        navigate('/')
    }


    return (
        <section className='add-new-page'>
            <FormNotes addContact={onAddContactHandler} />
        </section>
    )
}

export default AddNotePage
