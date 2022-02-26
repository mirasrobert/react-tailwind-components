const TableBody = () => {
  return (
    <>
      <tbody className='text-gray-600 text-sm font-light'>
        <tr className='border-b border-gray-200 hover:bg-gray-100'>
          <td className='py-3 px-6 text-left whitespace-nowrap'>
            <div className='flex items-center'>
              <div className='mr-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                  />
                </svg>
              </div>
              <span className='font-medium'>React Project</span>
            </div>
          </td>
          <td className='py-3 px-6 text-left'>
            <div className='flex items-center'>
              <div className='mr-2'>
                <img
                  className='w-6 h-6 rounded-full'
                  src='https://randomuser.me/api/portraits/men/1.jpg'
                />
              </div>
              <span>Eshal Rosas</span>
            </div>
          </td>

          <td className='py-3 px-6 text-left'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam, maxime alias? Ipsam, dolore quaerat. Totam.
            </p>
          </td>

          <td className='py-3 px-6 text-left'>
            <span className='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'>
              Active
            </span>
          </td>

          <td className='py-3 px-6 text-left'>
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
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                  />
                </svg>
              </div>
            </div>
          </td>
        </tr>
        <tr className='border-b border-gray-200 bg-gray-50 hover:bg-gray-100'>
          <td className='py-3 px-6 text-left'>
            <div className='flex items-center'>
              <div className='mr-2'>
                <img
                  className='w-6 h-6'
                  src='https://img.icons8.com/color/100/000000/vue-js.png'
                />
              </div>
              <span className='font-medium'>Vue Project</span>
            </div>
          </td>
          <td className='py-3 px-6 text-left'>
            <div className='flex items-center'>
              <div className='mr-2'>
                <img
                  className='w-6 h-6 rounded-full'
                  src='https://randomuser.me/api/portraits/women/2.jpg'
                />
              </div>
              <span>Anita Rodriquez</span>
            </div>
          </td>

          <td className=' py-3 px-6 text-left'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam, maxime alias? Ipsam, dolore quaerat. Totam.
            </p>
          </td>

          <td className='py-3 px-6 text-left'>
            <span className='bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs'>
              Completed
            </span>
          </td>
          <td className='py-3 px-6 text-left'>
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
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                  />
                </svg>
              </div>
            </div>
          </td>
        </tr>
        <tr className='border-b border-gray-200 hover:bg-gray-100'>
          <td className='py-3 px-6 text-left'>
            <div className='flex items-center'>
              <div className='mr-2'>
                <img
                  className='w-6 h-6'
                  src='https://img.icons8.com/color/100/000000/angularjs.png'
                />
              </div>
              <span className='font-medium'>Angular Project</span>
            </div>
          </td>
          <td className='py-3 px-6 text-left'>
            <div className='flex items-center'>
              <div className='mr-2'>
                <img
                  className='w-6 h-6 rounded-full'
                  src='https://randomuser.me/api/portraits/men/3.jpg'
                />
              </div>
              <span>Taylan Bush</span>
            </div>
          </td>

          <td className=' py-3 px-6 text-left'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam, maxime alias? Ipsam, dolore quaerat. Totam.
            </p>
          </td>

          <td className='py-3 px-6 text-left'>
            <span className='bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs'>
              Scheduled
            </span>
          </td>
          <td className='py-3 px-6 text-left'>
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
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                  />
                </svg>
              </div>
            </div>
          </td>
        </tr>
        <tr className='border-b border-gray-200 bg-gray-50 hover:bg-gray-100'>
          <td className='py-3 px-6 text-left'>
            <div className='flex items-center'>
              <div className='mr-2'>
                <img
                  className='w-6 h-6'
                  src='https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/laravel-64.png'
                />
              </div>
              <span className='font-medium'>Laravel Project</span>
            </div>
          </td>
          <td className='py-3 px-6 text-left'>
            <div className='flex items-center'>
              <div className='mr-2'>
                <img
                  className='w-6 h-6 rounded-full'
                  src='https://randomuser.me/api/portraits/men/4.jpg'
                />
              </div>
              <span>Tarik Novak</span>
            </div>
          </td>
          <td className=' py-3 px-6 text-left'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam, maxime alias? Ipsam, dolore quaerat. Totam.
            </p>
          </td>
          <td className='py-3 px-6 text-left'>
            <span className='bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs'>
              Pending
            </span>
          </td>
          <td className='py-3 px-6 text-left'>
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
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                  />
                </svg>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default TableBody
