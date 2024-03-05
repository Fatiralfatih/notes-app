import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/network-data";
import { showFormattedDate } from "../utils";
import { MdArchive, MdDelete } from "react-icons/md";
import Spinner from "../Components/Spinner";

const DetailNote = () => {
    const { id } = useParams()

    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNoteById = async () => {
            const { data } = await getNote(id)
            setTimeout(() => {
                setNote(data)
                setLoading(false)
            }, 500);
        }
        getNoteById()
    }, [id])

    const navigate = useNavigate();

    const handleDeleteClick = async (id) => {
        await deleteNote(id)
        navigate('/')
    }

    const handleArchivedClick = async (id) => {
        if (!note.archived) {
            await archiveNote(id)
            navigate('/')
        } else {
            await unarchiveNote(id)
            navigate('/')
        }
    }

    return (
        <>
            {loading && (<Spinner />)}
            {!loading && (
                <>
                    <div className="detail-page">
                        <h3 className="detail-page__title">{note.title}</h3>
                        <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
                        <p className="detail-page__body">{note.body}</p>
                    </div>
                    <div className="detail-page__action">
                        <button
                            className="action"
                            onClick={() => handleArchivedClick(id)}
                        >
                            <MdArchive />
                        </button>
                        <button
                            className="action"
                            onClick={() => handleDeleteClick(id)}
                        >
                            <MdDelete />
                        </button>
                    </div>
                </>
            )}
        </>
    )
}

export default DetailNote
