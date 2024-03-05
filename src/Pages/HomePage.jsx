import { FiPlus } from 'react-icons/fi'
import NotesList from '../Components/NotesList'
import Searchbar from '../Components/Searchbar'
import { useContext } from 'react'
import LocaleContext from '../Context/localeContext'
import { Link } from 'react-router-dom'
import Spinner from '../Components/Spinner'
import { useActiveNotes, useSearchTitle } from '../hooks'

const HomePage = () => {
    const { keyword, handlerSearch } = useSearchTitle();

    const { notes, loading } = useActiveNotes()
    
    const { locale } = useContext(LocaleContext);


    const filteredSearch = notes.filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()))

    return (
        <div className="homepage">
            <h2>{locale === 'id' ? 'Note Aktif' : 'Active Notes'}</h2>
            <Searchbar
                keyword={keyword || ""}
                onSearch={handlerSearch}
            />
            {loading
                ? (<Spinner />)
                : notes.length >= 1
                    ? (<NotesList notes={filteredSearch} />)
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
