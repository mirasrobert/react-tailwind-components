export const productsColumns = [
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
]
