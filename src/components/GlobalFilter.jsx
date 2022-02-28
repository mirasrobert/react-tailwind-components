import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 500)

  return (
    <div className='flex items-center'>
      <span className='mr-1'>Search: </span>

      <input
        type='search'
        className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1'
        placeholder='Search...'
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}  
      />
    </div>
  )
}

export default GlobalFilter
