import {useEffect, useState} from 'react'
import axios from 'axios'
import Fact from "./Fact";

export default function useNumbersFacts(query, pageNumber, pageSize) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [facts, setFacts] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setFacts([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        for (let i = 0; i < pageSize; i++) {
            axios({
                method: 'GET',
                url: 'http://numbersapi.com/random/' + query,
                cancelToken: axios.CancelToken(c => cancel = c)
            }).then(res => {
                setFacts(prevFacts => {
                    return [...new Set([...prevFacts, <Fact content={res.data}/>])]
                })
                setHasMore(true)
                setLoading(false)
            }).catch(e => {
                setError(true)
                if (axios.isCancel(e)) return
            })
        }
        return () => cancel()
    }, [query, pageNumber])
    return {loading, error, facts, hasMore}
}
