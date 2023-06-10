import { useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'

function Icons() {
  const {user} = useContext(GithubContext)
  const {
      
    followers,
    following,
    public_repos,
    public_gists,
    
    
  } = user
  return (
    <div className="grid gird-cols-4 auto-cols-max divide-solid divide-x-2 divide-[#800080]/20 justify-items-center [&>*]:px-3 [&>*]:drop-shadow-xl">
      <div className="col-start-1 first:pl-0 ">

      <span className="tooltip" data-tip='Followers'><FaUsers className="w-8 h-8 inline" /></span>{" "}
      <span>{followers}</span>
      </div>
      <div className="col-start-2">

      <span className="tooltip" data-tip='Followings'><FaUserFriends className="w-7 h-7 inline" /></span>{" "}
      <span>{following}</span>
      </div>
      <div className="col-start-3">

      <span className="tooltip" data-tip='Public Repos'><FaCodepen className="w-8 h-8 inline" /></span>{" "}
      <span>{public_repos}</span>
      </div>
      <div className="col-start-4">

      <span className="tooltip" data-tip='Public Gists'><FaStore className="w-8 h-8 inline" /></span>{" "}
      <span>{public_gists}</span>
      
      </div>
        
      
    </div>
  )
}

export default Icons
