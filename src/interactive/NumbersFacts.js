import React, {useCallback, useRef, useState} from "react";
import useNumbersFacts from "./useNumbersFacts";
import Fact from "./Fact";

const pageSize = 20

function NumbersFacts(query) {
    const [pageNumber, setPageNumber] = useState(1)

    const {loading, error, facts, hasMore} = useNumbersFacts(query, pageNumber, pageSize)

    const observer = useRef()
    const lastFactElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    return (<div>
        {facts.map((fact, index) => {
            if (facts.length === index + 1) {
                return <div ref={lastFactElementRef} key={index}>{fact}</div>
            } else {
                return <div key={index}>{fact}</div>
            }

        })}
        <div>{loading && <Fact content={'Loading...'}/>}</div>
        <div>{error && <Fact content={'Loading...'}/>}</div>
    </div>);
}

export function NumbersFactsTrivia() {
    return NumbersFacts('trivia')
}

export function NumbersFactsMath() {
    return NumbersFacts('math')
}

export function NumbersFactsYear() {
    return NumbersFacts('year')
}

export function NumbersFactsDate() {
    return NumbersFacts('date')
}