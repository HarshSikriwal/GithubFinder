import { useContext } from "react"
import {MdCancel} from 'react-icons/md'
import AlertContext from "../../context/github/alert/AlertContext"



function Alert() {
    const {alert} = useContext(AlertContext)
  return (
    <div className={`absolute top-56 flex items-center mb-4 space-x-2 ${alert === null ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        {alert && alert.type === 'error' && (
         <MdCancel size={20} className="text-rose-600" />
        )}
        <p className="flex-1 text-lg font-semibold text-black">
            <strong>{alert ? alert.msg : ''}</strong>
        </p>
    </div>

  )
}

export default Alert
