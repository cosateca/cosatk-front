import {
	Box,
	Button,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import iconLoan from '../../assets/images/icono_prestamos.svg'
import iconUsers from '../../assets/images/icono_usuarios.svg'
import iconArticles from '../../assets/images/icono_articulos.svg'
import iconCategories from '../../assets/images/icono_categorias.svg'
import iconSession from '../../assets/images/icono_cerrar_sesion.svg'
import useAuth from '../../hooks/useAuth'

const Navigation = () => {
	const { auth, logout } = useAuth()

	return (
		<div>
			<header>
				<Box
					display={{ xs: 'flex' }}
					flexDirection={{ xs: 'column' }}
					alignItems={{ xs: 'center' }}
					width={{ xs: '100%', sm: '250px' }}
					height={{ xs: '100%', sm: 'auto' }}
					minHeight={{ xs: 'auto', sm: '100vh' }}
					sx={{
						backgroundColor: '#D2D2D2',
						overflowY: 'auto',
					}}
				>
					<Box
						display={{ xs: 'flex' }}
						justifyContent={{ xs: 'center' }}
						alignItems={{ xs: 'center' }}
						bgcolor={{ xs: '#D2D2D2' }}
						width={{ xs: '100%' }}
						height={{ xs: '146px' }}
					>
						<Box>
							<Link to="/">
								<img height="110px" src={logo} alt="Logo" />
							</Link>
						</Box>
					</Box>

					<Box
						display={{ xs: 'flex', sm: 'flex' }}
						flexDirection={{ xs: 'column' }}
						justifyContent={{ xs: 'space-between' }}
						height={{ xs: '70px', sm: 'calc(100vh - 292px)' }}
						maxWidth={{ sm: '360' }}
						width={{ xs: '100%', sm: '250px' }}
						bgcolor={{ xs: '#F9F9F9' }}
					>
						{' '}
						{auth?.role === 'admin' && (
							<nav aria-label="main mailbox folders">
								<List
									sx={{
										display: 'flex',
										flexDirection: { xs: 'row', sm: 'column' },
										width: { xs: 'auto', sm: '250px' },
										// gap: '20px',
									}}
								>
									<ListItem disablePadding>
										<ListItemButton
											component={Link}
											to="/dashboard/loans"
											sx={{
												padding: { xs: '0', sm: '10px' },
												margin: '0',
												display: 'flex',
												justifyContent: 'center',
											}}
										>
											<ListItemIcon>
												<Box
													display={{ xs: 'flex' }}
													bgcolor={{ xs: '#67B7E1' }}
													borderRadius={{ xs: '10px' }}
													padding={{ xs: '5px' }}
												>
													<img
														src={iconLoan}
														alt="Icona prèstec"
														title="Prèstec"
													/>
												</Box>
											</ListItemIcon>
											<ListItemText
												sx={{
													paddingLeft: '10px',
													display: { xs: 'none', sm: 'flex' },
												}}
												primary="Prèstecs"
											/>
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton
											component={Link}
											to="/dashboard/users"
											sx={{
												padding: { xs: '0', sm: '10px' },
												margin: '0',
												display: 'flex',
												justifyContent: 'center',
											}}
										>
											<ListItemIcon>
												<Box
													display={{ xs: 'flex' }}
													bgcolor={{ xs: '#67B7E1' }}
													borderRadius={{ xs: '10px' }}
													padding={{ xs: '5px' }}
												>
													<img
														src={iconUsers}
														alt="Icona usuaris"
														title="Usuaris"
													/>
												</Box>
											</ListItemIcon>
											<ListItemText
												sx={{
													paddingLeft: '10px',
													display: { xs: 'none', sm: 'flex' },
												}}
												primary="Usuaris"
											/>
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton
											component={Link}
											to="/dashboard/articles"
											sx={{
												padding: { xs: '0', sm: '10px' },
												margin: '0',
												display: 'flex',
												justifyContent: 'center',
											}}
										>
											<ListItemIcon>
												<Box
													display={{ xs: 'flex' }}
													bgcolor={{ xs: '#67B7E1' }}
													borderRadius={{ xs: '10px' }}
													padding={{ xs: '5px' }}
												>
													<img
														src={iconArticles}
														alt="Icona articles"
														title="Articles"
													/>
												</Box>
											</ListItemIcon>
											<ListItemText
												sx={{
													paddingLeft: '10px',
													display: { xs: 'none', sm: 'flex' },
												}}
												primary="Articles"
											/>
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton
											component={Link}
											to="/dashboard/categories"
											sx={{
												padding: { xs: '0', sm: '10px' },
												margin: '0',
												display: 'flex',
												justifyContent: 'center',
											}}
										>
											<ListItemIcon>
												<Box
													display={{ xs: 'flex' }}
													bgcolor={{ xs: '#67B7E1' }}
													borderRadius={{ xs: '10px' }}
													padding={{ xs: '5px' }}
												>
													<img
														src={iconCategories}
														alt="Icona categories"
														title="Categories"
													/>
												</Box>
											</ListItemIcon>
											<ListItemText
												sx={{
													paddingLeft: '10px',
													display: { xs: 'none', sm: 'flex' },
												}}
												primary="Categories"
											/>
										</ListItemButton>
									</ListItem>
									<ListItem
										disablePadding
										sx={{
											display: { xs: 'flex', sm: 'none' },
										}}
									>
										<ListItemButton
											component={Link}
											to="/"
											sx={{
												display: 'flex',
												justifyContent: 'center',
												padding: { xs: '0', sm: '10px' },
												margin: '0',
											}}
										>
											<ListItemIcon>
												<Box
													display={{ xs: 'flex' }}
													bgcolor={{ xs: '#67B7E1' }}
													borderRadius={{ xs: '10px' }}
													padding={{ xs: '5px' }}
												>
													<img
														src={iconSession}
														alt="Icona sessio"
														title="Tancar sessió"
													/>
												</Box>
											</ListItemIcon>
											<ListItemText
												sx={{
													paddingLeft: '10px',
													display: { xs: 'none', sm: 'flex' },
												}}
												primary="Logout"
											/>
										</ListItemButton>
									</ListItem>
								</List>
							</nav>
						)}
						{auth?.role === 'user' && (
							<nav>
								<List>
									<ListItem disablePadding>
										<ListItemButton
											component={Link}
											to="/dashboard/myloans"
											sx={{
												padding: { xs: '0', sm: '10px' },
												margin: '0',
												display: 'flex',
												justifyContent: 'center',
											}}
										>
											<ListItemIcon>
												<Box
													display={{ xs: 'flex' }}
													bgcolor={{ xs: '#67B7E1' }}
													borderRadius={{ xs: '10px' }}
													padding={{ xs: '5px' }}
												>
													<img src={iconLoan} alt="Icona prèstecs" />
												</Box>
											</ListItemIcon>
											<ListItemText
												sx={{
													paddingLeft: '10px',
													display: { xs: 'none', sm: 'flex' },
												}}
												primary="Prèstecs"
											/>
										</ListItemButton>
									</ListItem>
								</List>
							</nav>
						)}
						<Box
							display={{ xs: 'none', sm: 'flex' }}
							justifyContent={{ xs: 'center' }}
							alignItems={{ xs: 'center' }}
							height={{ xs: '46px' }}
							width={{ xs: '100%' }}
						>
							{auth?.email && <Link to="/dashboard">{`${auth?.email}`}</Link>}
						</Box>
					</Box>

					<Box
						display={{ xs: 'none', sm: 'flex' }}
						justifyContent={{ xs: 'center' }}
						alignItems={{ xs: 'center' }}
						bgcolor={{ xs: '#d2d2d2' }}
						height={{ xs: '146px' }}
						width={{ xs: '100%' }}
					>
						<Button
							onClick={logout}
							sx={{
								bgcolor: '#F9F9F9',
								paddingTop: '10px',
								paddingBottom: '10px',
							}}
							variant="contained"
							color="secondary"
						>
							<Box
								display={{ xs: 'flex' }}
								bgcolor={{ xs: '#67B7E1' }}
								borderRadius={{ xs: '10px' }}
								padding={{ xs: '5px' }}
							>
								<img src={iconSession} alt="Tancar sessió" />
							</Box>
							<Typography paddingLeft={{ xs: '10px' }} variant="h5">
								TANCAR SESSIÓ
							</Typography>
						</Button>
					</Box>
				</Box>
			</header>
		</div>
	)
}

export default Navigation
