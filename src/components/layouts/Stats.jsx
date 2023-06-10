import { useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
function Stats() {
  const {user} = useContext(GithubContext)
  const {location,blog,twitter_username} =user
  return (
    <div className="w-full rounded-lg shadow-md bg-[#008000]/20 stats divide-solid divide-white">
      {location && (
        <div className="stat"><div className="stat-title text-md text-[#800080]/80">Location
          </div>
          <div className="stat-value text-lg font-semibold text-[#800080]">{location}</div></div>
      )}
      {blog && (
        <div className="stat"><div className="stat-title text-md text-[#800080]/80">
          Website
          </div>
          <div className="stat-value text-lg"><a href={`${blog}`} target='blank' rel='noreferrer' 
            className='font-semibold text-[#800080]'>{blog}</a></div>
          </div>
      )}
      {twitter_username && (
        <div className="stat">
          <div className="stat-title text-md text-[#800080]/80">
            Twitter
          </div>
          <div className="stat-value text-lg"><a href={`https://twitter.com/${twitter_username}`} target='blank' rel='noreferrer' 
            className='font-semibold text-[#800080]'>{twitter_username}</a></div>
          </div>
      )}
    </div>
)}

export default Stats
