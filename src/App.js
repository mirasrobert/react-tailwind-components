import Navbar from './components/Navbar'
import Modal from './components/Modal'
import Table from './components/tables/Table'

const App = () => {
  return (
    <div className='App'>
      <Navbar />

      <div className='container mx-auto px-4'>
        <Modal title={`Modal Title`} margin='8%'>
          <p className='mb-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ex
            consequuntur rem eligendi minus sint quae repellendus incidunt.
            Doloremque, blanditiis. Autem natus tenetur soluta, cupiditate totam
            aut quia! Autem, recusandae!
          </p>

          <h4 className='text-lg font-bold'>Form</h4>

          <div className='mb-3'>
            <label className='block'>
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                type='email'
                name='email'
                className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1'
                placeholder='you@example.com'
              />
            </label>
          </div>

          <div className='mb-3'>
            <label className='block'>
              <span className='block text-sm font-medium text-slate-700'>
                Password
              </span>
              <input
                type='password'
                name='password'
                className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 border-pink-500 text-pink-600
                focus:outline-none focus:border-pink-500 focus:ring-pink-500 
                block w-full rounded-md sm:text-sm focus:ring-1'
                placeholder='eg. SR. JR.'
              />

              <p className='mt-2 text-pink-600 text-sm'>
                Password must be 7 characters long
              </p>
            </label>
          </div>
        </Modal>
        <Table />
      </div>
    </div>
  )
}

export default App
