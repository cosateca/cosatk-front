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
	const [loanFee, setLoanFee] = useState<any>(0)
	const [deposit, setDeposit] = useState<any>(0)
	const [loan_period, setLoan_Period] = useState<any>(0)

	const handleSkip = () => {
		navigate('/dashboard/articles')
	}
	//Bring article data
	useEffect(() => {
		if (articleCode) {
			articleService
				.articleIdFromCode(articleCode)
				.then((data: any) => {
					setLoanFee(data.loan_fee)
					setDeposit(data.deposit)
					setLoan_Period(data.loan_period)
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
			const findArticleIdFromCode = await articleService.articleIdFromCode(
				articleCode
			)

			// due date
			const due_date = new Date(Date.now() + loan_period * 24 * 60 * 60 * 1000)
			const formatted_due_date = due_date.toISOString().slice(0, 10)

			// checked_in
			const checked_in_date = new Date()
			const formatted_checked_in_date = checked_in_date
				.toISOString()
				.slice(0, 10)

			const newData = {
				status: true,
				fee: loanFee,
				deposit: deposit,
				checked_in: formatted_checked_in_date,
				checked_out: formatted_due_date,
				articleIdArticle: findArticleIdFromCode.idArticle,
				userIdUsers: userId,
			}

			loanService
				.createLoan(newData)
				.then((data: any) => {
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
								marginTop: { xs: '20px', sm: '70px' },
								height: '55px',
							}}
						>
							<p>
								Crear nou prèstec amb article id: <strong>{articleCode}</strong>{' '}
								i usuari amb id: <strong>{userId}</strong> ? Si voleu podeu
								personalitzar els següents camps associats a l&rsquo;article:
							</p>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: { xs: 'column', sm: 'row' },
								flexWrap: 'wrap',
								gap: '10px',
								marginTop: { xs: '100px', sm: '30px' },
							}}
						>
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
								sx={{ width: { xs: '92%', sm: '30%' } }}
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
								value={deposit}
								id="input-deposit"
								label="Preu Diposit"
								variant="outlined"
								type="number"
								InputProps={{ inputProps: { min: 0, max: 1000 } }}
								sx={{ width: { xs: '92%', sm: '30%' } }}
								InputLabelProps={{
									style: {
										color: '#222222',
									},
								}}
							/>
							<TextField
								onChange={(e: any) => setLoan_Period(e.target.value)}
								onKeyPress={(e: any) => {
									const charCode = e.which ? e.which : e.keyCode
									if (charCode > 31 && (charCode < 48 || charCode > 57)) {
										e.preventDefault()
									}
								}}
								value={loan_period}
								id="input-loanperiod"
								label="Periode de prèstec (dies)"
								variant="outlined"
								type="number"
								InputProps={{ inputProps: { min: 0, max: 1000 } }}
								sx={{ width: { xs: '92%', sm: '30%' } }}
								InputLabelProps={{
									style: {
										color: '#222222',
									},
								}}
							/>
						</Box>
						<Box sx={{ marginTop: '30px' }}>
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
						</Box>
					</Container>
				</section>
			</Box>
		</>
	)
}

export default ConfirmLoan
