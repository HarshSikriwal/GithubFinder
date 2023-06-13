
import {useEffect, useContext} from "react"

import Spinner from '../components/layouts/Spinner'
import GithubContext from "../context/github/GithubContext"
import { useParams } from "react-router-dom"
import Stats from '../components/users/Stats'
import BackToSearch from '../components/users/BackToSearch'
import VisitGithub from '../components/users/VisitGithub'
import ProfileCard from '../components/users/ProfileCard'
import Info from '../components/users/Info'
import RepoList from "../components/repos/RepoList"
import GithubContributions from "../components/users/GithubContributions"
import { getUserAndRepos } from "../context/github/GithubAction"

function User() {
    const {loading, repos, user, dispatch} = useContext(GithubContext)
    const params = useParams()

    useEffect(() => {
      dispatch({type:'SET_LOADING'})
      const getUserData=async() => {
        const userData = await getUserAndRepos(params.login)
        dispatch({type:'GET_USER_AND_REPOS', payload: userData})
      }

      getUserData()
    },[dispatch,params.login])

    const {login}=user
    if(loading){
      return <Spinner />
    }
    
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12" >
        <BackToSearch />        

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 mb-8 md:gap-8">
          <ProfileCard />
          <div className='xl:col-span-2'>
            <div className="mb-6">
              <Info />
              <VisitGithub />
            </div>
            <Stats />
            <GithubContributions login={login} />
          </div>
        </div>
        <RepoList repos={repos} />  
      </div>
        
    
    
    
    
    
    </>
  )
}

export default User
