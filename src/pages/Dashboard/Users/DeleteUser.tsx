import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FormAlert from '../../../components/FormAlert/FormAlert'
import Navbar from '../../../components/Navbar/Navbar'
import { deleteUser } from '../../../services/userService'

const DeleteUser = () => {
	const navigate = useNavigate()

	const { id } = useParams()

	//Alert
	const [alert, setAlert] = useState<any>({})
	const { msg } = alert

	const handleSkip = () => {
		navigate('/dashboard/users')
	}

	const handleDelete = () => {
		if (id) {
			deleteUser(id)
				.then((data: any) => {
					console.log(data)
					setAlert({
						msg: 'Usuari eliminat correctament, redirigint...',
						isError: false,
					})
					setTimeout(() => {
						navigate('/dashboard/users')
					}, 3500)
				})
				.catch((error: Error) => {
					setAlert({
						msg: 'Error inesperat, redirigint...',
						isError: true,
					})
					setTimeout(() => {
						navigate('/dashboard/users')
					}, 3500)
					console.log(error)
				})
		} else {
			console.error('Error: there is no id provided')
		}
	}

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
						<Typography variant="h1">❌Eliminar Usuari</Typography>

						<Box
							sx={{
								display: 'flex',
								marginBottom: '20px',
								marginTop: '70px',
								height: '55px',
							}}
						>
							Eliminar Usuari amb id: {id} ?
						</Box>
						<Button
							sx={{
								marginBottom: { xs: '25px', sm: '50px' },
							}}
							onClick={handleDelete}
							variant="contained"
						>
							Confirmar
						</Button>
						<Button
							sx={{
								marginBottom: { xs: '25px', sm: '50px' },
								marginLeft: { xs: '15px', sm: '20px' },
							}}
							onClick={handleSkip}
							variant="contained"
						>
							Descartar
						</Button>
						{msg && <FormAlert alert={alert} />}
					</Container>
				</section>
			</Box>
		</>
	)
}

export default DeleteUser
