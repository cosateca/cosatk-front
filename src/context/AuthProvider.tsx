import { useState, useEffect, createContext } from 'react'
import { findUserById } from '../services/userService'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../interfaces/user.interface'

interface AuthContextType {
	auth: IUser | null
	setAuth: (auth: IUser | null) => void
	logout: () => void
}

// interface User {
// 	email: string
// 	idUsers: string
// 	role: string
// }

export const AuthContext = createContext<AuthContextType>({
	auth: null,
	setAuth: () => {},
	logout: () => {},
})

const AuthProvider: any = ({ children }: any): any => {
	const [auth, setAuth] = useState<IUser | null>(null)

	useEffect(() => {
		const authenticateUser = async () => {
			const token = localStorage.getItem('token')

			if (!token) {
				return
			}

			//Decode Token
			const decodedToken: { email: string; id: string; role: string } =
				jwt_decode(token)

			const authData = {
				email: decodedToken.email,
				id: decodedToken.id,
				role: decodedToken.role,
			}

			//Find user
			try {
				const userData = await findUserById(authData.id)
				// todo: remove userData.password
				setAuth(userData)
			} catch (error) {
				console.log(error)
				setAuth(null)
			}
		}
		authenticateUser()
	}, [auth?.idUsers])

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
