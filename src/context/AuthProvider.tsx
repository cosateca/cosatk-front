import { useState, useEffect, createContext } from 'react'
import { findUserById } from '../services/userService'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

interface AuthContextType {
	auth: User | null
	setAuth: (auth: User | null) => void
	logout: () => void
}

interface User {
	email: string
	id: string
	role: string
}

export const AuthContext = createContext<AuthContextType>({
	auth: null,
	setAuth: () => {},
	logout: () => {},
})

const AuthProvider: any = ({ children }: any): any => {
	const [auth, setAuth] = useState<User | null>(null)
	const [loading_user, setLoading_user] = useState<boolean>(false)

	useEffect(() => {
		const authenticateUser = async () => {
			const token = localStorage.getItem('token')
			if (!token) {
				setLoading_user(false)
				console.log('Token not found')
				return
			}

			const decodedToken: { email: string; id: string; role: string } =
				jwt_decode(token)

			const authData = {
				email: decodedToken.email,
				id: decodedToken.id,
				role: decodedToken.role,
			}

			try {
				const userData = await findUserById(authData.id)
				// delete userData.password
				setAuth(userData)
			} catch (error) {
				console.log(error)
				setAuth(null)
			}
		}
		authenticateUser()
	}, [auth])

	const navigate = useNavigate()

	const logout = () => {
		setAuth(null)
		localStorage.removeItem('token')
		navigate('/')
	}

	return (
		<AuthContext.Provider value={{ auth, setAuth, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthProvider }

export default AuthContext
