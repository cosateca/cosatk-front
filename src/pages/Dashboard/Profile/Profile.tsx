import { Box, Button, Container, Typography } from '@mui/material'
import Navbar from '../../../components/Navbar/Navbar'
import useAuth from '../../../hooks/useAuth'

const Profile = () => {
	const { auth } = useAuth()

	return (
		<>
			<Box display={{ xs: 'block', sm: 'flex' }} overflow-y={{ xs: 'hidden' }}>
				<Navbar />
				<section>
					<Container
						sx={{
							padding: { xs: '25px', sm: '50px' },
							width: '100vw',
							height: '100vh',
						}}
					>
						<Typography variant="h1">PERFIL</Typography>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: '60px',
								marginTop: '30px',
							}}
						>
							<Box>
								<Typography variant="h2">Email: </Typography>

								{auth?.email && auth?.email}
							</Box>
							<Box sx={{}}>
								<Typography variant="h2">Nom: </Typography>

								{auth?.first_name + ' '}
								{auth?.last_name}
							</Box>
							<Box sx={{}}>
								<Typography variant="h2">Rol: </Typography>

								{auth?.role === 'user' && 'Usuari'}
								{auth?.role === 'admin' && 'Administrador'}
							</Box>
						</Box>
						<Button sx={{ marginTop: '30px' }} variant="contained">
							Canviar Contrasenya
						</Button>
					</Container>
				</section>
			</Box>
		</>
	)
}

export default Profile
