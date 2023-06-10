import { useContext } from "react"
import GithubContext from "../../context/github/GithubContext"

function Info() {
    const {user} = useContext(GithubContext)
    const {name,type,hireable,bio} = user
  return (
    <>
    <h1 className='text-3xl card-title'>
                {name}
                <div className="ml-2 mr-1 mt-1 badge badge-success">
                  {type}
                </div>
                {hireable && (
                  <div className="mx-1 mt-1 badge badge-info">Hireable</div>

                )}
              </h1>
              <p className='mt-1'>{bio}</p>
    </>
  )
}

export default Info
