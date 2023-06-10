import { Link } from "react-router-dom"

function UserItem({user :{login, avatar_url}}) {
  return (
    <Link className="text-[#800080] text-opacit-40" to={`/user/${login}`}>
      <div className="card compact side">
        <div className="flex-row items-center space-x-4 card-body">
          <div>
            <div className ='avatar'>
              <div className="rounded-full ring-2 ring-[#800080]  shadow w-14 h-14">
                <img src={avatar_url} alt="Profile" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="card-title font-bold text-[#008000]">{login}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default UserItem
