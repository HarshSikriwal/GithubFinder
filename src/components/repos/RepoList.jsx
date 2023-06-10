import React from 'react'
import RepoItem from './RepoItem'

function RepoList({repos}) {
  return (
    <div className='no-scale rounded-lg shadow-lg card bg-[#008000]/20'>
        <div className='card-body'>
            <h2 className='text-3xl my-4 font-bold card-title'>
                Latest Repositiories
            </h2>
            {repos.map((repo)=>
                (<RepoItem key={repo.id} repo={repo} />)
            )}
        </div>
        
    </div>
  )
}

export default RepoList