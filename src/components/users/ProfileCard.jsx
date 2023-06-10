import { useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import Icons from "../layouts/Icons"

function ProfileCard() {
    const {user} = useContext(GithubContext)
    const {avatar_url,name,login} = user
  return (
    <div className="custom-card-image mb-6 md:mb-0 col-span-1">
            <div className = 'no-scale w-full rounded-lg shadow-xl card bg-[#008000]/20'>
              <figure>
                <img src={avatar_url} alt= '' className='w-96 p-2 rounded-xl'/>
              </figure>
              <div className="card-body justify-end text-[#800080]">
                

                <div>
                  <h2 className="card-title mb-0 font-bold">
                    {name}
                  </h2>
                <p className='text-[#800080]/60 font-semibold'>{login}</p>
                </div>
              <Icons />
                
              </div>
            </div>
          </div>
  )
}

export default ProfileCard
