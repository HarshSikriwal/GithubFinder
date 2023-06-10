import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar mb-12 shadow-lg text-[#008000]">
      <div className="container mx-auto">
        <div className='flex-none mx-2 px-2'>
          <FaGithub className='inline mx-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>Github Finder</Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn hover:text-[#800080]'>Home</Link>
            <Link to='/about' className='btn btn-ghost btn-sm hover:text-[#800080]'>About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

