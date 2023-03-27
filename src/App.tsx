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

import AppRouter from './router/AppRouter'
import CataloguePage from './pages/CataloguePage/CataloguePage'

import './styles/index.css'

function App() {
	return (
		<>
			<AppRouter />
		</>
	)
}

export default App
