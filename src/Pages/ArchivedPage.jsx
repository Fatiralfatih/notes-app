import { useContext, useEffect, useState } from "react"
import NotesList from "../Components/NotesList"
import Searchbar from "../Components/Searchbar"
import { getArchivedNotes } from "../utils/network-data";
import Spinner from "../Components/Spinner";
import LocaleContext from "../Context/localeContext";

const ArchivedPage = () => {

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { locale } = useContext(LocaleContext);

    useEffect(() => {
        async function getArhived() {
            const { data } = await getArchivedNotes();
            setNotes(data)
            setLoading(false);
        }
        getArhived();
    }, [])

    return (
        <div className="archives-page">
            <h2>{locale === 'id' ? 'Halaman Arsip' : 'Archived Page'}</h2>
            <Searchbar />
            {loading
                ? (<Spinner />)
                : notes
                    ? (<NotesList notes={notes} />)
                    : (<div className="notes-list-empty"><p>Tidak Ada Catatan</p></div>)}
        </div>
    )
}

export default ArchivedPage
