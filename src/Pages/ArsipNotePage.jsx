import { useState } from "react"
import { getArchivedNotes } from "../utils/local-data"
import { useSearchParams } from "react-router-dom"
import Searchbar from "../Components/Searchbar"
import NotesList from "../Components/NotesList"

const ArsipNotePage = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const keyword = searchParams.get('keyword');

    const [defaultKeyword, setDefaultKeyword] = useState(keyword || '')
    const [notes] = useState(getArchivedNotes());

    const handlerSearch = (newKeyword) => {
        setDefaultKeyword(newKeyword)
        setSearchParams({ title: newKeyword })
    }

    const filteredSearch = notes.filter(note => {
        return note.title.toLowerCase().includes(defaultKeyword.toLowerCase())
    })
    return (
        <section className="archives-page">
            <h2>Catatan Arsip</h2>
            <Searchbar
                keyword={defaultKeyword}
                onSearch={handlerSearch}
            />
            <NotesList
                notes={filteredSearch}
            />
        </section>
    )
}
export default ArsipNotePage
