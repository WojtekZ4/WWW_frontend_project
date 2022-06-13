import React, {useState, useRef, useCallback} from "react";
import useBookSearch from "./useBookSearch";

function Page5(){
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    const {loading,error, books, hasMore} = useBookSearch(query,pageNumber)

    const observer = useRef()
    const lastBookElementRef = useCallback(node =>{
        if (loading) return
        if (observer.current)  observer.current.disconnect()
        observer.current= new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore){
                setPageNumber(prevPageNumber => prevPageNumber +1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    function handleSearch(e) {
        setQuery(e.target.value)
        setPageNumber(1)
    }


    return(
        <div>
            <h2>Page5</h2>
            {books.map((book, index )=>{
                if (books.length === index + 1){
                    return <div ref={lastBookElementRef} key={index}>{book}</div>
                } else {
                    return <div key={book}>{book}</div>
                }

            })}
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </div>
    );
}


// function App() {
//     const [query, setQuery] = useState("");
//     const [pageNum, setPageNum] = useState(1);
//     const {loading, error, list, hasMore} = useSearchBook(query, pageNum);
//
//     const observer = useRef(); // (*)
//     const lastBookElementRef = useCallback(  // (*)
//         (node) => {
//             if (isLoading) return;
//             if (observer.current) observer.current.disconnect();
//             observer.current = new IntersectionObserver((entries) => {
//                 if (entries[0].isIntersecting && hasMore) {
//                     setPageNum((prev) => prev + 1);
//                 }
//             });
//             if (node) observer.current.observe(node);
//         },
//         [loading, hasMore]
//     );
//
//     const handleChange = (e) => {
//         setQuery(e.target.value);
//         setPageNum(1);
//     };
//
//     return (
//         <div className="App">
//             <h1>Infinite Scroll</h1>
//             <h2>with useRef</h2>
//             <input type="text" onChange={handleChange} value={query}/>
//             {list.map((item, i) => {
//                 const isLastElement = books.length === i + 1;
//                 isLastElement ? (
//                     <div key={i} ref={lastBookElementRef}>
//                         {book}
//                     </div>
//                 ) : (
//                     <div key={i}>{book}</div>
//                 )
//             })}
//             <div>{isLoading && "Loading..."}</div>
//             <div>{error && "Error..."}</div>
//         </div>
//     );
// }


export default Page5;