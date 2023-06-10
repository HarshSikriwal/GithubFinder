import { FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa'
function RepoItem({repo}) {
    const {name, 
        description, 
        html_url, 
        forks, 
        open_issues, 
        watchers_count, 
        stargazers_count,
    } = repo
  return (
    <a href={html_url}>
    <div className='mb-2 rounded-md card bg-[#800080]/20 '>
        <div className="card-body">
            <h3 className="mb-2 text-2xl font-semibold">
                {name}
            </h3>
            <p className='mb-3 text-lg'>{description}</p>
            <div>
                <div className="mr-2 badge badge-info badge-lg">
                    <FaEye className='mr-2' />{watchers_count}
                </div>
                <div className="mr-2 badge badge-success badge-lg">
                    <FaStar className='mr-2' />{stargazers_count}
                </div>
                <div className="mr-2 badge badge-error badge-lg">
                    <FaInfo className='mr-2' />{open_issues}
                </div>
                <div className="mr-2 badge bg-warning badge-lg text-black">
                    <FaUtensils className='mr-2 ' />{forks}
                </div>
            </div>
        </div>
      
    </div>
                </a>
  )
}

export default RepoItem
