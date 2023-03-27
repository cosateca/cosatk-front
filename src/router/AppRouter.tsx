import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout/DashboardLayout'
import { AuthProvider } from '../context/AuthProvider'
import CataloguePage from '../pages/CataloguePage/CataloguePage'
import Articles from '../pages/Dashboard/Articles/Articles'
import DeleteArticle from '../pages/Dashboard/Articles/DeleteArticle'
import Categories from '../pages/Dashboard/Categories/Categories'
import DeleteCategory from '../pages/Dashboard/Categories/DeleteCategory'
import Detall from '../pages/Dashboard/Detall/Detall'
import Loans from '../pages/Dashboard/Loans/Loans'
import NewLoan from '../pages/Dashboard/Loans/NewLoan'
import MyLoans from '../pages/Dashboard/MyLoans/MyLoans'
import Profile from '../pages/Dashboard/Profile/Profile'
import DeleteUser from '../pages/Dashboard/Users/DeleteUser'
import Users from '../pages/Dashboard/Users/Users'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import NotFound from '../pages/NotFoundPage/NotFound'
import Register from '../pages/Register/Register'
import { AdminRoute } from './AdminRoute'

const AppRouter = () => {
	return (
		<>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route element={<DashboardLayout />}>
							<Route path="/" element={<HomePage />} />
							<Route path="/login" element={<LoginPage />} />
							<Route path="/register" element={<Register />} />
							<Route path="/catalogue" element={<CataloguePage />} />
							<Route path="/detall" element={<Detall />} />
							<Route path="*" element={<NotFound />} />
							<Route path="/dashboard" element={<Profile />} />
							<Route path="/dashboard/myloans" element={<MyLoans />} />
							<Route
								path="/dashboard/users"
								element={
									<AdminRoute>
										<Users />
									</AdminRoute>
								}
							/>
							<Route
								path="/dashboard/deleteuser/:id"
								element={
									<AdminRoute>
										<DeleteUser />
									</AdminRoute>
								}
							/>
							<Route
								path="/dashboard/articles"
								element={
									<AdminRoute>
										<Articles />
									</AdminRoute>
								}
							/>
							<Route
								path="/dashboard/deletearticle/:id"
								element={
									<AdminRoute>
										<DeleteArticle />
									</AdminRoute>
								}
							/>
							<Route
								path="/dashboard/newloan/:id"
								element={
									<AdminRoute>
										<NewLoan />
									</AdminRoute>
								}
							/>
							<Route
								path="/dashboard/categories"
								element={
									<AdminRoute>
										<Categories />
									</AdminRoute>
								}
							/>
							<Route
								path="/dashboard/deletecategory/:id"
								element={
									<AdminRoute>
										<DeleteCategory />
									</AdminRoute>
								}
							/>
							<Route
								path="dashboard/loans"
								element={
									<AdminRoute>
										<Loans />
									</AdminRoute>
								}
							/>
						</Route>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</>
	)
}

export default AppRouter
