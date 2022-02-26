import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const Modal = ({ title, margin, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const modal = useRef()

  const toggleModalHandler = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (modal.current && !modal.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [modal])

  return (
    <>
      <button
        onClick={toggleModalHandler}
        className='bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 mt-4 px-3 rounded'>
        Open Modal
      </button>

      <div
        className={`${
          !isOpen ? 'hidden' : ''
        } bg-black bg-opacity-50 fixed inset-0 overflow-auto w-full
        h-full`}
        id='backdrop'>
        {/* sm:w-3/5 md:w-6/12	lg:w-2/5 */}
        <div
          className='modal-content drop-shadow-xl px-3 py-2 bg-white rounded text-gray-900 md:max-w-screen-md w-4/5 md:w-2/5'
          style={{ margin: `${margin} auto` }}
          ref={modal}>
          <div className='modal-header flex justify-between py-3'>
            <h4 className='text-lg font-bold'>{ title }</h4>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 hover:cursor-pointer'
              onClick={() => setIsOpen(false)}
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='modal-body my-4 text-sm text-gray-600'>
            {children}
          </div>
          <div className='modal-footer flex justify-end space-x-3'>
            <button
              onClick={() => setIsOpen(false)}
              className='hover:bg-red-300 hover:text-red-900 text-gray-800 rounded py-2 px-3'>
              Cancel
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className='bg-red-500 hover:bg-red-600 text-white rounded py-2 px-3'>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

Modal.propTypes = {
  width: PropTypes.string,
  margin: PropTypes.string,
}

Modal.defaultProps = {
  margin: '15%',
}

export default Modal
