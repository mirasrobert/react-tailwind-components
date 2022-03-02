import TableHead from './TableHead'
import TableBody from './TableBody'

// Baic Table Design
const TableDesign = () => {
  return (
    <div>
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
    </div>
  )
}

export default TableDesign
