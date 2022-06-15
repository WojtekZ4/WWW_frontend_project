import React from "react";
import {useFilters, useGlobalFilter, usePagination, useSortBy, useTable} from "react-table";
import DATA from '../data/famous_mathematicians.json'
import {matchSorter} from 'match-sorter'

function DefaultColumnFilter({column: {filterValue, preFilteredRows, setFilter},}) {
    const count = preFilteredRows.length

    return (<input
        value={filterValue || ''}
        onChange={e => {
            setFilter(e.target.value || undefined)
        }}
        placeholder={`Search ${count} records...`}
    />)
}

function SelectColumnFilter({column: {filterValue, setFilter, preFilteredRows, id},}) {
    const options = React.useMemo(() => {
        const options = new Set()
        preFilteredRows.forEach(row => {
            options.add(row.values[id])
        })
        return [...options.values()]
    }, [id, preFilteredRows])

    return (<select
        value={filterValue}
        onChange={e => {
            setFilter(e.target.value || undefined)
        }}
    >
        <option value="">All</option>
        {options.map((option, i) => (<option key={i} value={option}>
            {option}
        </option>))}
    </select>)
}

function NumberRangeColumnFilter({column: {filterValue = [], preFilteredRows, setFilter, id},}) {
    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        preFilteredRows.forEach(row => {
            min = Math.min(row.values[id], min)
            max = Math.max(row.values[id], max)
        })
        return [min, max]
    }, [id, preFilteredRows])

    return (<div
        style={{
            display: 'flex',
        }}
    >
        <input
            value={filterValue[0] || ''}
            type="number"
            onChange={e => {
                const val = e.target.value
                setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
            }}
            placeholder={`Min (${min})`}
            style={{
                width: '70px', marginRight: '0.5rem',
            }}
        />
        to
        <input
            value={filterValue[1] || ''}
            type="number"
            onChange={e => {
                const val = e.target.value
                setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
            }}
            placeholder={`Max (${max})`}
            style={{
                width: '70px', marginLeft: '0.5rem',
            }}
        />
    </div>)
}

function fuzzyTextFilterFn(rows, id, filterValue) {
    return matchSorter(rows, filterValue, {keys: [row => row.values[id]]})
}

fuzzyTextFilterFn.autoRemove = val => !val

function Mathematicians_Table({columns, data}) {
    const filterTypes = React.useMemo(() => ({
        fuzzyText: fuzzyTextFilterFn, text: (rows, id, filterValue) => {
            return rows.filter(row => {
                const rowValue = row.values[id]
                return rowValue !== undefined ? String(rowValue)
                    .toLowerCase()
                    .startsWith(String(filterValue).toLowerCase()) : true
            })
        },
    }), [])

    const defaultColumn = React.useMemo(() => ({
        Filter: DefaultColumnFilter,
    }), [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        pageOptions,
        page,
        pageCount,
        state: {pageIndex, pageSize},
        gotoPage,
        previousPage,
        nextPage,
        setPageSize,
        canPreviousPage,
        canNextPage
    } = useTable({
        columns, data, defaultColumn, filterTypes, initialState: {pageSize: 20}
    }, useGlobalFilter, useFilters, useSortBy, usePagination)
    return (<div className="math_table">
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (<tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (<th {...column.getHeaderProps()}>
                    <div className="column_header">
                        <div className="column_name">{column.render('Header')}</div>
                        <div className="column_sorting_button" onClick={() => column.toggleSortBy(false)}>🔼</div>
                        <div className="column_sorting_button" onClick={() => column.toggleSortBy(true)}>🔽</div>
                        <div className="column_filter">{column.canFilter ? column.render('Filter') : null}</div>
                    </div>
                </th>))}
            </tr>))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {page.map((row) => {
                prepareRow(row)
                return (<tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                </tr>)
            })}
            </tbody>
        </table>
        <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
            </button>
            {' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
            </button>
            {' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
            </button>
            {' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
            </button>
            {' '}
            <span>
          Page{' '}
                <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
            <span>
          | Go to page:{' '}
                <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                    }}
                    style={{width: '100px'}}
                />
        </span>{' '}
            <select
                value={pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value))
                }}
            >
                {[20, 30, 40, 50].map(pageSize => (<option key={pageSize} value={pageSize}>
                    Show {pageSize}
                </option>))}
            </select>
        </div>
    </div>)
}

function filterGreaterThan(rows, id, filterValue) {
    return rows.filter(row => {
        const rowValue = row.values[id]
        return rowValue >= filterValue
    })
}

filterGreaterThan.autoRemove = val => typeof val !== 'number'

function Table() {
    const data = React.useMemo(() => DATA, [])

    const columns = React.useMemo(() => [{
        Header: 'Name', accessor: 'first_name', Filter: DefaultColumnFilter, filter: 'includes'
    }, {
        Header: 'Surname', accessor: 'last_name', Filter: DefaultColumnFilter, filter: 'includes'
    }, {
        Header: 'Born', accessor: 'year_of_birth', Filter: NumberRangeColumnFilter, filter: 'between'
    }, {
        Header: 'Died ', accessor: 'year_of_death', Filter: NumberRangeColumnFilter, filter: 'between'
    }, {
        Header: 'Sex ', accessor: 'gender', Filter: SelectColumnFilter, filter: 'includes'
    }, {
        Header: 'Country', accessor: 'country_of_origin', Filter: DefaultColumnFilter, filter: 'includes'
    }

    ], [])

    return (<div>
        <Mathematicians_Table columns={columns} data={data}/>
    </div>)
}

export default Table;