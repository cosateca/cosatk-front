import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const AdminRoute = ({ children }: any) => {
	const { auth } = useAuth()

	return auth?.role === 'admin' ? (
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
