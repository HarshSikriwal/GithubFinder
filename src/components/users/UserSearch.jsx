import { useState,useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/github/alert/AlertContext"

 function UserSearch() {
    const [text, setText]= useState('')
    const {users, searchUsers, handleClear} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)

    const handleChange = (e)=>{
        setText(e.target.value)
        }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text=== ''){
            setAlert('Please enter something', 'error')
        }
        else{
            searchUsers(text)
            setText('')
        }
    }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 
    mb-8 gap-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input 
                            type="text" 
                            className={`w-full input-lg rounded-md border-solid border-2  pr-40 transition-all duration-500
                                      text-[#008000] placeholder-[#800080]/30 ${text ? 'border-[#008000]' : 'border-[#800080]'}
                                        focus:outline-none`}
                            placeholder="Search"
                            value={text}
                            onChange={handleChange} 
                        />
                        <button
                            type="submit"
                            className={`absolute ${text ? 'bg-[#008000]' : 'bg-[#800080]'} top-0 right-0 rounded-l-none w-36 btn btn-lg`}>
                                GO
                        </button>
                    </div>
                </div>
            </form>
        </div>
        {users.length>0 &&
            (<div>
            <button className="btn btn-lg bg-[#800080]/20 text-rose-900 hover:bg-[#800080] hover:text-white" onClick={handleClear}>Clear</button>
            </div>
            )}
        
    </div>
  )
}

export default UserSearch
