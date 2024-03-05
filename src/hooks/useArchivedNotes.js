import { useEffect, useState } from "react";
import { getArchivedNotes } from "../utils/network-data";

export const useArchivedNotes = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getArhived() {
            const { data } = await getArchivedNotes();
            setNotes(data)
            setLoading(false);
        }
        getArhived();
    }, [])

    return { notes, loading }
}