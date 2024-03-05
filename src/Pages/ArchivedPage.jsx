import { useContext } from "react"
import NotesList from "../Components/NotesList"
import Searchbar from "../Components/Searchbar"
import Spinner from "../Components/Spinner";
import LocaleContext from "../Context/localeContext";
import { useArchivedNotes, useSearchTitle } from "../hooks";

const ArchivedPage = () => {
    const { keyword, handlerSearch } = useSearchTitle()
    const { notes, loading } = useArchivedNotes();
    const { locale } = useContext(LocaleContext);
    const filterSearch = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()))

    return (
        <div className="archives-page">
            <h2>{locale === 'id' ? 'Halaman Arsip' : 'Archived Page'}</h2>
            <Searchbar
                keyword={keyword}
                onSearch={handlerSearch}
            />
            {loading && (<Spinner />)}
            {notes
                ? (<NotesList notes={filterSearch} />)
                : (<div className="notes-list-empty"><p>Tidak Ada Catatan</p></div>)}

        </div>
    )
}

export default ArchivedPage
