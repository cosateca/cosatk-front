import { Button, Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout/DashboardLayout'
import Articles from './pages/Dashboard/Articles/Articles'
import Categories from './pages/Dashboard/Categories/Categories'
import Loans from './pages/Dashboard/Loans/Loans'
import Users from './pages/Dashboard/Users/Users'
import HomePage from './pages/HomePage/HomePage'
import NotFound from './pages/NotFoundPage/NotFound'
import './styles/index.css'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route element={<DashboardLayout />}>
						<Route path="/" element={<HomePage />} />
						<Route path="/dashboard/users" element={<Users />} />
						<Route path="/dashboard/newuser" element={<NewUser />} />
						<Route path="/dashboard/articles" element={<Articles />} />
						<Route path="/dashboard/loans" element={<Loans />} />
						<Route path="/dashboard/categories" element={<Categories />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
