const TableHead = () => {
  return (
    <thead>
      <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
        <th
          className='py-3 px-6 text-left border border-gray-100'
          style={{ width: '120px' }}>
          Project
        </th>
        <th
          className='py-3 px-6 text-left border border-gray-100'
          style={{ width: '170px' }}>
          Client
        </th>
        <th
          className='py-3 px-6 text-left border border-gray-100'
          style={{ width: '500px' }}>
          Description
        </th>
        <th
          className='py-3 px-6 text-left border border-gray-100'
          style={{ width: '120px' }}>
          Status
        </th>
        <th
          className='py-3 px-6 text-left border border-gray-100'
          style={{ width: '120px' }}>
          Actions
        </th>
      </tr>
    </thead>
  )
}

export default TableHead
