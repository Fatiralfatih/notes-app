import { useState } from "react"
import { useSearchParams } from "react-router-dom"

export const useSearchTitle = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const [keyword, setKeyword] = useState(() => {
        return searchParams.get("keyword") || ""
    })
    const handlerSearch = (keyword) => {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    return { keyword, handlerSearch }
}