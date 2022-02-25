import Navbar from './components/Navbar'
import Modal from './components/Modal'

function App() {
  return (
    <div className='App'>
      <Navbar />

      <div className='container mx-auto px-4'>
        <Modal margin='8%'>
          <p className='mb-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ex
            consequuntur rem eligendi minus sint quae repellendus incidunt.
            Doloremque, blanditiis. Autem natus tenetur soluta, cupiditate totam
            aut quia! Autem, recusandae!
          </p>

          <div className='mb-3'>
            <label className='block mb-2 font-bold' htmlFor='name'>
              Name
            </label>
            <input
              className='border border-gray-400 border-b-2 focus:border-blue-500 outline-none rounded px-3 py-2 font-md mb-2 w-full'
              type='text'
              name='name'
              placeholder='Name...'
            />
          </div>

          <div className='mb-3'>
            <label className='block mb-2 font-bold' htmlFor='email'>
              Email
            </label>
            <input
              className='border border-gray-400 border-b-2 focus:border-blue-500 outline-none rounded px-3 py-2 font-md mb-2 w-full'
              type='email'
              name='email'
              placeholder='eg. example@email.com'
            />
          </div>

          <div className='mb-3'>
            <label className='block mb-2 font-bold' htmlFor='password'>
              Password
            </label>
            <input
              className='border border-gray-400 border-b-2 focus:border-blue-500 outline-none rounded px-3 py-2 font-md mb-2 w-full'
              type='password'
              name='password'
              placeholder='*****'
            />
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default App
