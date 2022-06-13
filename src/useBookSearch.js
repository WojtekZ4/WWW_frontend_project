import {useEffect, useState} from 'react'
import axios from 'axios'



export default function useBookSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setBooks([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: 'http://numbersapi.com/random/trivia',
            params: {query: query, page: pageNumber},
            cancelToken: axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res.data)
            setBooks(prevBooks => {
                return [...new Set([...prevBooks, res.data])]
            })
            setHasMore(true)
            setLoading(false)
        }).catch(e => {
            setError(true)
            if (axios.isCancel(e)) return
        })
        return () => cancel()
    }, [query, pageNumber])
    return {loading, error, books, hasMore}
}
