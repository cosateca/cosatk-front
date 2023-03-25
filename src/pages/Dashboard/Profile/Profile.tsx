import { Box, Container, Typography } from '@mui/material'
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
								marginTop: '20px',
							}}
						>
							<Box>
								<Typography variant="h2">Email: </Typography>

								{auth?.email && auth?.email}
							</Box>
							<Box
								sx={{
									marginTop: '20px',
								}}
							>
								<Typography variant="h2">Rol: </Typography>

								{auth?.role === 'user' && 'Usuari'}
								{auth?.role === 'admin' && 'Administrador'}
							</Box>
						</Box>
					</Container>
				</section>
			</Box>
		</>
	)
}

export default Profile
