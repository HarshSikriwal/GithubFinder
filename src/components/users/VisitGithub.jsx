import { useContext } from "react"
import GithubContext from "../../context/github/GithubContext"

function VisitGithub() {
    const {user} = useContext(GithubContext)
    const {html_url} =user
  return (
    <div className="mt-4 card-actions">
        <a href={html_url} target='_blank' rel='noreferrer' 
            className='visit-profile p-2 rounded-md border-solid border-2 border-[#008000] text-[#008000] hover:text-[#800080]/80 active:scale-95 hover:scale-105'>
            Visit Github Profile
        </a>
    </div>
  )
}

export default VisitGithub
