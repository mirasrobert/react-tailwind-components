import { useState, useEffect, useMemo } from 'react'
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table'
import axios from 'axios'
import TableHead from './TableHead'
import TableBody from './TableBody'
import GlobalFilter from '../GlobalFilter'
import tw from 'twin.macro'

const TWTable = tw.table`
min-w-max w-full table-auto
`

//bg-gray-200
const TableHeadRow = tw.thead.tr`
bg-gray-200 text-gray-600 uppercase text-sm leading-normal
`

const TableHeader = tw.th`
py-3 px-6 text-left border border-gray-200 border-b-2	
`

// font-light
const Tbody = tw.tbody`
text-gray-600 text-sm 
`

const TBodyRow = tw.tbody.tr`
border-b border-gray-200 hover:bg-gray-100
`

const TBodyData = tw.tbody.tr.td`
m-0 py-2 px-6 text-left
 `

const Table = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')

    setProducts(response.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const productsColumns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        Cell: ({ cell: { value } }) => <span>{value}</span>,
        width: '30px',
      },
      {
        Header: 'Title',
        accessor: 'title',
        width: '200px',
      },
      {
        Header: 'Price',
        accessor: 'price',
        width: '40px',
      },
      {
        Header: 'Description',
        accessor: 'description',
        width: '500px',
        Cell: ({ cell: { value } }) => {
          let str = value

          if (str.length > 150) return str.substring(0, 150) + '...'

          return <span>{value}</span>
        },
      },
      {
        Header: 'Category',
        accessor: 'category',
        Cell: ({ cell: { value } }) => {
          //men's clothing
          // jewelery
          //electronics
          // women's clothing
          if (value === "men's clothing") {
            return (
              <span className='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'>
                {value}
              </span>
            )
          }

          if (value === 'jewelery') {
            return (
              <span className='bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs'>
                {value}
              </span>
            )
          }

          if (value === 'electronics') {
            return (
              <span className='bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs'>
                {value}
              </span>
            )
          }

          if (value === "women's clothing") {
            return (
              <span className='bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs'>
                {value}
              </span>
            )
          }

          return <span>{value}</span>
        },
      },
    ],
    []
  )

  const productsData = useMemo(() => [...products], [products])

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 'actions',
        Header: 'Actions',
        Cell: ({ row }) => (
          <div className='flex item-center justify-start'>
            <div className='w-4 mr-2 transform hover:text-blue-500 cursor-pointer hover:scale-110'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                />
              </svg>
            </div>
            <div className='w-4 mr-2 transform hover:text-blue-500 cursor-pointer hover:scale-110'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                />
              </svg>
            </div>
            <div
              onClick={() => alert('Editing: ' + row.values.id)}
              className='w-4 mr-2 transform hover:text-blue-500 cursor-pointer hover:scale-110'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
            </div>
          </div>
        ),
        width: '100px',
      },
    ])
  }

  // Use Table Hook
  const tableInstance = useTable(
    {
      columns: productsColumns,
      data: productsData,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    tableHooks
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance

  const { globalFilter, pageIndex, pageSize } = state

  // function that checks if even or odd
  const isEven = (idx) => idx % 2 === 0

  return (
    <>
      <div className='overflow-x-auto rounded-md mx-auto'>
        <div className='w-full'>
          <div className='bg-white shadow-md rounded my-6'>
            <table className='min-w-max w-full table-auto'>
              <TableHead />
              <TableBody />
            </table>
          </div>
        </div>
      </div>

      {/* REACT TABLE IMPLEMENTATION */}
      <div className='w-full flex justify-between'>
        <div>
          <span>Show</span>
          <select
            className='inline-block appearance-none bg-gray-200 border border-gray-200 text-gray-700 mx-1 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}>
            {[5, 10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span>entries</span>
        </div>

        <GlobalFilter
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <div className='overflow-x-auto rounded-md mx-auto'>
        <div className='w-full'>
          <div className='bg-white shadow-md rounded my-6'>
            {/* // apply the table props */}
            <TWTable {...getTableProps()}>
              <thead>
                {
                  // Loop over the header rows
                  headerGroups.map((headerGroup) => (
                    // Apply the header row props
                    <TableHeadRow {...headerGroup.getHeaderGroupProps()}>
                      {
                        // Loop over the headers in e ach row
                        headerGroup.headers.map((column) => (
                          // Apply the header cell props
                          <TableHeader
                            {...column.getHeaderProps([
                              column.getSortByToggleProps(),
                              {
                                style: {
                                  minWidth: column.minWidth,
                                  width: column.width,
                                },
                              },
                            ])}>
                            {
                              <>
                                {/* Render the header */}
                                <span>{column.render('Header')}</span>
                                {/* Sorting Icon */}
                                <span>
                                  {column.isSorted
                                    ? column.isSortedDesc
                                      ? ' ▼'
                                      : ' ▲'
                                    : ''}
                                </span>
                              </>
                            }
                          </TableHeader>
                        ))
                      }
                    </TableHeadRow>
                  ))
                }
              </thead>
              {/* Apply the table body props */}
              <Tbody {...getTableBodyProps()}>
                {
                  // Loop over the table rows
                  page.map((row, index) => {
                    // Prepare the row for display
                    prepareRow(row)
                    return (
                      // Apply the row props
                      <TBodyRow
                        {...row.getRowProps()}
                        className={isEven(index) ? 'bg-gray-50' : ''}>
                        {
                          // Loop over the rows cells
                          row.cells.map((cell) => {
                            // Apply the cell props
                            return (
                              <TBodyData {...cell.getCellProps()}>
                                {
                                  // Render the cell contents
                                  cell.render('Cell')
                                }
                              </TBodyData>
                            )
                          })
                        }
                      </TBodyRow>
                    )
                  })
                }
              </Tbody>
            </TWTable>

            <div className='px-5 py-5 bg-white border-t flex xs:flex-row items-center justify-end'>
              <div className='text-xs xs:text-sm text-gray-900'>
                Page{' '}
                <strong>
                  {' '}
                  {pageIndex + 1} of {pageOptions.length}{' '}
                </strong>
                | 1-{page.length} of {products.length}
              </div>

              <div className='inline-flex mx-2 xs:mt-0'>
                <button
                  onClick={() => previousPage()}
                  className='text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l'
                  disabled={!canPreviousPage}>
                  Prev
                </button>
                <button
                  onClick={() => nextPage()}
                  className='text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r'
                  disabled={!canNextPage}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table
