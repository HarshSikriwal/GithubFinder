import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import {useEffect, useContext} from "react"
import { Link } from 'react-router-dom'
import Spinner from '../components/layouts/Spinner'
import GithubContext from "../context/github/GithubContext"
import { useParams } from "react-router-dom"
import Stats from '../components/layouts/Stats'
import BackToSearch from '../components/layouts/assets/BackToSearch'
import VisitGithub from '../components/layouts/assets/VisitGithub'
import ProfileCard from '../components/layouts/assets/ProfileCard'

function User() {
    const {getUser, user, loading} = useContext(GithubContext)
    const params = useParams()
    useEffect(() => {getUser(params.login)},[])


    if(loading){
      return <Spinner />
    }
    const {
      name,
      type,
      avatar_url,
      bio,
      login,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      
    } = user
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12" >
        <BackToSearch />        

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 mb-8 md:gap-8">
          <ProfileCard />
          <div className='xl:col-span-2'>
            <div className="mb-6">
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
              <VisitGithub />
            </div>
            <Stats />
          </div>
        </div>
        
      </div>
        
    
    
    
    
    
    </>
  )
}

export default User
