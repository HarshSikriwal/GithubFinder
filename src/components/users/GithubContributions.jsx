import React from 'react'

function GithubContributions({login}) {
  return (
    <div className='mt-8 card no-scale rounded-md bg-[#800080]/20'>
        <div className='card-body'>
            <div className='card-title text-3xl font-bold'>Contributions</div>
        <img src={`https://ghchart.rshah.org/${login}`} alt='GIthub Contributions' />
        </div>
    </div>
  )
}

export default GithubContributions
