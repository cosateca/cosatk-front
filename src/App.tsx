import { Button, Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout/DashboardLayout'
import { AuthProvider } from './context/AuthProvider'
import useAuth from './hooks/useAuth'
import Articles from './pages/Dashboard/Articles/Articles'
import DeleteArticle from './pages/Dashboard/Articles/DeleteArticle'
import Categories from './pages/Dashboard/Categories/Categories'
import Detall from './pages/Dashboard/Detall/Detall'
import Loans from './pages/Dashboard/Loans/Loans'
import NewLoan from './pages/Dashboard/Loans/NewLoan'
import Users from './pages/Dashboard/Users/Users'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import NotFound from './pages/NotFoundPage/NotFound'
import Register from './pages/Register/Register'
import './styles/index.css'

function App() {
	const { auth } = useAuth()

	console.log('User auth: ' + auth?.email)

	return (
		<div>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route element={<DashboardLayout />}>
							<Route path="/" element={<HomePage />} />
							<Route path="/dashboard/users" element={<Users />} />
							<Route path="/dashboard/articles" element={<Articles />} />
							<Route
								path="/dashboard/deletearticle/:id"
								element={<DeleteArticle />}
							/>
							<Route path="/dashboard/detall" element={<Detall />} />
							<Route path="/dashboard/loans" element={<Loans />} />
							<Route path="/dashboard/newloan/:id" element={<NewLoan />} />
							<Route path="/dashboard/categories" element={<Categories />} />
							<Route path="/login" element={<LoginPage />} />
							<Route path="/register" element={<Register />} />
							<Route path="*" element={<NotFound />} />
						</Route>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</div>
	)
}

export default App
