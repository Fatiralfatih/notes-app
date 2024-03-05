import { FiPlus } from 'react-icons/fi'
import NotesList from '../Components/NotesList'
import Searchbar from '../Components/Searchbar'
import { useContext, useEffect, useState } from 'react'
import LocaleContext from '../Context/localeContext'
import { getActiveNotes } from '../utils/network-data'
import { Link } from 'react-router-dom'
import Spinner from '../Components/Spinner'

const HomePage = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { locale } = useContext(LocaleContext);

    useEffect(() => {
        async function getNotes() {
            const { data } = await getActiveNotes()
            setNotes(data)
            setLoading(false)
        }
        getNotes();
    }, [])


    return (
        <div className="homepage">
            <h2>{locale === 'id' ? 'Note Aktif' : 'Active Notes'}</h2>
            <Searchbar />
            {loading
                ? (<Spinner />)
                : notes.length >= 1
                    ? (<NotesList notes={notes} />)
                    : (<div className="notes-list-empty"><p>Tidak Ada Catatan</p></div>)}
            <div className="homepage__action">
                <Link to='/add'>
                    <button className="action"><FiPlus /></button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage
