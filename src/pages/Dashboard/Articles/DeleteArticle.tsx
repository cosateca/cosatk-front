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

	const handleDelete = () => {
		if (id) {
			articleService
				.deleteArticle(id)
				.then((data: any) => {
					console.log(data)
					setAlert({
						msg: 'Article eliminat correctament, seràs redirigit...',
						isError: false,
					})
					setTimeout(() => {
						navigate('/dashboard/articles')
					}, 3500)
				})
				.catch((error: Error) => {
					setAlert({
						msg: 'Error inesperat, seràs redirigit...',
						isError: true,
					})
					setTimeout(() => {
						navigate('/dashboard/articles')
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
						<Typography variant="h1">❌Eliminar Article</Typography>

						<Box
							sx={{
								display: 'flex',
								marginBottom: '20px',
								marginTop: '20px',
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
						{msg && <FormAlert alert={alert} />}
					</Container>
				</section>
			</Box>
		</>
	)
}

export default DeleteArticle
