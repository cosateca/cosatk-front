import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FormAlert from '../../../components/FormAlert/FormAlert'
import Navbar from '../../../components/Navbar/Navbar'
import articleService from '../../../services/articleService'

const DeleteArticle = () => {
	const navigate = useNavigate()

	const { id } = useParams()

	//Alert
	const [alert, setAlert] = useState<any>({})
	const { msg } = alert

	const handleSkip = () => {
		navigate('/dashboard/articles')
	}

	const handleDelete = () => {
		if (id) {
			articleService
				.deleteArticle(id)
				.then((data: any) => {
					if (data.status) {
						//error
						setAlert({
							msg: data.error,
							isError: true,
						})
						setTimeout(() => {
							setAlert({})
							navigate('/dashboard/articles')
						}, 3500)
					} else {
						//ok
						setAlert({
							msg: 'Article eliminat correctament, redirigint...',
							isError: false,
						})
						setTimeout(() => {
							setAlert({})
							navigate('/dashboard/articles')
						}, 3500)
					}
				})
				.catch((error: Error) => {
					setAlert({
						msg: error.message,
						isError: true,
					})
					setTimeout(() => {
						navigate('/dashboard/articles')
					}, 3500)
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
						<Typography variant="h1">❌Eliminar Article</Typography>

						<Box
							sx={{
								display: 'flex',
								marginBottom: '20px',
								marginTop: '70px',
								height: '55px',
							}}
						>
							Eliminar Article amb codi: {id} ?
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

export default DeleteArticle
