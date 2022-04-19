import { auth } from '@/util/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate('/login')
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <div className="flex justify-end">
      <button className="bg-gray-300" onClick={logout}>
        logout
      </button>
    </div>
  )
}

export default Header
