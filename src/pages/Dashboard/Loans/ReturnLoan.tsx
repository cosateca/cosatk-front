import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FormAlert from '../../../components/FormAlert/FormAlert'
import Navbar from '../../../components/Navbar/Navbar'
import loanService from '../../../services/loanService'

const ReturnLoan = () => {
	const navigate = useNavigate()

	const { id } = useParams()

	//Alert
	const [alert, setAlert] = useState<any>({})
	const { msg } = alert

	const handleSkip = () => {
		navigate('/dashboard/loans')
	}

	const handleReturn = () => {
		if (id) {
			loanService
				.returnLoan(id)
				.then((data: any) => {
					console.log(data)
					if (data === `Loan released correctly.`) {
						setAlert({
							msg: 'Prèstec retornat correctament, redirigint...',
							isError: false,
						})
						setTimeout(() => {
							navigate('/dashboard/loans')
						}, 3500)
					} else {
						setAlert({
							msg: 'El prèstec seleccionat no es pot retornar, possiblement perquè no consta en prèstec.',
							isError: true,
						})
					}
				})
				.catch((error: Error) => {
					setAlert({
						msg: error.message,
						isError: true,
					})
					setTimeout(() => {
						navigate('/dashboard/loans')
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
						<Typography variant="h1">🔙Retornar Prèstec</Typography>

						<Box
							sx={{
								display: 'flex',
								marginBottom: '20px',
								marginTop: '70px',
								height: '55px',
							}}
						>
							Retornar Prèstec amb codi: {id} ?
						</Box>
						<Button
							sx={{
								marginBottom: { xs: '25px', sm: '50px' },
							}}
							onClick={handleReturn}
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

export default ReturnLoan
