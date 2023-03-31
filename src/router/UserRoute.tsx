import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const UserRoute = ({ children }: any) => {
	const { auth } = useAuth()
	console.log(auth?.role)
	return auth?.role === 'user' ? (
		children
	) : (
		<Navigate
			to={{
				pathname: '/login',
			}}
			replace={true}
		/>
	)
}
