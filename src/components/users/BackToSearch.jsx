import { Link } from "react-router-dom"
function BackToSearch() {
  return (
    <div className="mb-4">
        <Link to = '/' className='btn btn-ghost hover:bg-[#800080]/40 text-[#008000]'>
            Back To Search
        </Link>
    </div>
  )
}

export default BackToSearch
