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
import { useNavigate, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import iconLoan from '../../assets/images/icono_prestamos.svg'
import iconUsers from '../../assets/images/icono_usuarios.svg'
import iconArticles from '../../assets/images/icono_articulos.svg'
import iconCategories from '../../assets/images/icono_categorias.svg'
import iconSession from '../../assets/images/icono_cerrar_sesion.svg'

const Navigation = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/dashboard/loans')
	}

	return (
		<div>
			<header>
				<Box
					display={{ xs: 'flex' }}
					flexDirection={{ xs: 'column' }}
					alignItems={{ xs: 'center' }}
					width={{ xs: '100%', sm: '250px' }}
					minHeight={{ xs: '100%', sm: '100vh' }}
				>
					<Box
						display={{ xs: 'flex' }}
						justifyContent={{ xs: 'center' }}
						alignItems={{ xs: 'center' }}
						sx={{ backgroundColor: '#D2D2D2' }}
						onClick={handleClick}
						bgcolor={{ xs: '#D2D2D2' }}
						width={{ xs: '100%' }}
						height={{ xs: '146px' }}
					>
						<img height="110px" src={logo} alt="Logo" />
					</Box>
					<Box
						display={{ xs: 'flex', sm: 'flex' }}
						justifyContent={{ xs: 'flex-start' }}
						height={{ sm: 'calc(100vh - 292px)' }}
						maxWidth={{ sm: '360' }}
						bgcolor={{ sm: '#F9F9F9' }}
					>
						<nav aria-label="main mailbox folders">
							<List
								sx={{
									display: 'flex',
									flexDirection: { xs: 'row', sm: 'column' },
									width: { xs: 'auto', sm: '250px' },
								}}
							>
								<ListItem disablePadding>
									<ListItemButton component={Link} to="/dashboard/loans">
										<ListItemIcon>
											<Box
												display={{ xs: 'flex' }}
												bgcolor={{ xs: '#67B7E1' }}
												borderRadius={{ xs: '10px' }}
												padding={{ xs: '5px' }}
											>
												<img src={iconLoan} alt="Icona prèstec" />
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
									<ListItemButton component={Link} to="/dashboard/users">
										<ListItemIcon>
											<Box
												display={{ xs: 'flex' }}
												bgcolor={{ xs: '#67B7E1' }}
												borderRadius={{ xs: '10px' }}
												padding={{ xs: '5px' }}
											>
												<img src={iconUsers} alt="Icona usuaris" />
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
									<ListItemButton component={Link} to="/dashboard/articles">
										<ListItemIcon>
											<Box
												display={{ xs: 'flex' }}
												bgcolor={{ xs: '#67B7E1' }}
												borderRadius={{ xs: '10px' }}
												padding={{ xs: '5px' }}
											>
												<img src={iconArticles} alt="Icona articles" />
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
									<ListItemButton component={Link} to="/dashboard/categories">
										<ListItemIcon>
											<Box
												display={{ xs: 'flex' }}
												bgcolor={{ xs: '#67B7E1' }}
												borderRadius={{ xs: '10px' }}
												padding={{ xs: '5px' }}
											>
												<img src={iconCategories} alt="Icona categories" />
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
									<ListItemButton component={Link} to="/">
										<ListItemIcon>
											<Box
												display={{ xs: 'flex' }}
												bgcolor={{ xs: '#67B7E1' }}
												borderRadius={{ xs: '10px' }}
												padding={{ xs: '5px' }}
											>
												<img src={iconSession} alt="Icona sessio" />
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
