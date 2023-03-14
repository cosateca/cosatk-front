import { Button, Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout/DashboardLayout'
import Articles from './pages/Dashboard/Articles/Articles'
import Categories from './pages/Dashboard/Categories/Categories'
import Detall from './pages/Dashboard/Detall/Detall'
import Loans from './pages/Dashboard/Loans/Loans'
import Users from './pages/Dashboard/Users/Users'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import NotFound from './pages/NotFoundPage/NotFound'
import Register from './pages/Register/Register'
import './styles/index.css'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route element={<DashboardLayout />}>
						<Route path="/" element={<HomePage />} />
						<Route path="/dashboard/users" element={<Users />} />
						<Route path="/dashboard/articles" element={<Articles />} />
						<Route path="/dashboard/detall" element={<Detall />} />
						<Route path="/dashboard/loans" element={<Loans />} />
						<Route path="/dashboard/categories" element={<Categories />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<Register />} />

						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
