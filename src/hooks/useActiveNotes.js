import { useEffect, useState } from "react";
import { getActiveNotes } from "../utils/network-data";

export const useActiveNotes = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getNotes() {
            const { data } = await getActiveNotes()
            setNotes(data)
            setLoading(false)
        }
        getNotes();
    }, [])

    return { notes, loading };
}