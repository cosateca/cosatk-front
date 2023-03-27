import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FormAlert from '../../../components/FormAlert/FormAlert'
import Navbar from '../../../components/Navbar/Navbar'
import { IArticle } from '../../../interfaces/article.interface'
import articleService from '../../../services/articleService'
import loanService from '../../../services/loanService'

const ConfirmLoan = () => {
	const navigate = useNavigate()

	const { articleCode, userId } = useParams()

	//Alert
	const [alert, setAlert] = useState<any>({})
	const { msg } = alert

	//Form
	const [loanFee, setLoanFee] = useState<any>(33)
	const [deposit, setDeposit] = useState<any>(44)

	const handleSkip = () => {
		navigate('/dashboard/articles')
	}

	//Bring article data
	useEffect(() => {
		if (articleCode) {
			articleService
				.articleIdFromCode(articleCode)
				.then((data: IArticle) => {
					setLoanFee(data.loan_fee)
					setDeposit(data.deposit)
				})
				.catch((error: Error) => {
					console.log(error)
				})
		} else {
			console.log('Error:not article code provided')
		}
	}, [])

	const handleCreate = async () => {
		if (userId && articleCode) {
			//get article id from code

			const findArticleIdFromCode = await articleService.articleIdFromCode(
				articleCode
			)

			const newData = {
				status: true,
				fee: loanFee,
				deposit: deposit,
				articleIdArticle: findArticleIdFromCode.idArticle,
				userIdUsers: userId,
			}

			loanService
				.createLoan(newData)
				.then((data: any) => {
					console.log(data)

					if (data) {
						setAlert({
							msg: 'Prèstec creat correctament, redirigint...',
							isError: false,
						})
						setTimeout(() => {
							navigate('/dashboard/loans')
						}, 3500)
					} else {
						setAlert({
							msg: 'Error inesperat, redirigint...',
							isError: true,
						})
						setTimeout(() => {
							navigate('/dashboard/loans')
						}, 3500)
					}
				})
				.catch((error: Error) => {
					setAlert({
						msg: 'Error inesperat, redirigint...',
						isError: true,
					})
					setTimeout(() => {
						navigate('/dashboard/loans')
					}, 3500)
					console.log(error)
				})
		} else {
			console.error('Error: there is no id or code provided')
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
						<Typography variant="h1">✔️ Confirmar prèstec</Typography>

						<Box
							sx={{
								display: 'flex',
								marginBottom: '20px',
								marginTop: '70px',
								height: '55px',
							}}
						>
							Crear nou prèstec amb article id: {articleCode} i usuari amb id:
							{userId} ?
							<br />
							Si voleu podeu personalitzar els següents camps:
						</Box>
						<TextField
							onChange={(e: any) => setLoanFee(e.target.value)}
							onKeyPress={(e: any) => {
								const charCode = e.which ? e.which : e.keyCode
								if (charCode > 31 && (charCode < 48 || charCode > 57)) {
									e.preventDefault()
								}
							}}
							id="input-preu"
							label="Preu prèstec"
							variant="outlined"
							type="number"
							value={loanFee}
							InputProps={{ inputProps: { min: 0, max: 1000 } }}
							sx={{ width: { xs: '92%', sm: '50%' } }}
							InputLabelProps={{
								style: {
									color: '#222222',
								},
							}}
						/>
						<TextField
							onChange={(e: any) => setDeposit(e.target.value)}
							onKeyPress={(e: any) => {
								const charCode = e.which ? e.which : e.keyCode
								if (charCode > 31 && (charCode < 48 || charCode > 57)) {
									e.preventDefault()
								}
							}}
							id="input-deposit"
							label="Preu Diposit"
							variant="outlined"
							type="number"
							InputProps={{ inputProps: { min: 0, max: 1000 } }}
							sx={{ width: { xs: '92%', sm: '50%' } }}
							InputLabelProps={{
								style: {
									color: '#222222',
								},
							}}
						/>
						<Button
							sx={{
								marginBottom: { xs: '25px', sm: '50px' },
							}}
							onClick={handleCreate}
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

export default ConfirmLoan
