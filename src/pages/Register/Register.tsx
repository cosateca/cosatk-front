import { Box, Typography, TextField, Button, Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validator from 'validator'
import Footer from '../../components/Footer/Footer'
import FormAlert from '../../components/FormAlert/FormAlert'
import Header from '../../components/Header/Header'
import { registerUser } from '../../services/userService'

const Register = () => {
	const navigate = useNavigate()

	const [first_name, setFirst_name] = useState<string>('')
	const [last_name, setLast_name] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [telephone, setTelephone] = useState<number | null>(null)
	const [adress, setAdress] = useState<string | null>(null)
	const [city, setCity] = useState<string | null>(null)
	const [how_meet_us, setHow_meet_us] = useState<string | null>(null)
	const [dni, setDni] = useState<string | null>(null)
	const [birth_date, setBirth_date] = useState<Date | null>(null)
	const [password, setPassword] = useState<string>('')
	const [repassword, setRepassword] = useState<string>('')

	const [alert, setAlert] = useState<any>({})

	const handleSubmit = async (e: any) => {
		e.preventDefault()

		//Form Validation

		if ([email, password, repassword, first_name, last_name].includes('')) {
			setAlert({ msg: 'There is some empty input', isError: true })
			console.error('Form validation: Error 1')
			return
		}

		if (password !== repassword) {
			setAlert({ msg: 'Password not coincident', isError: true })
			console.error('Form validation: Error 2')
			return
		}

		if (password.length < 8) {
			setAlert({ msg: 'Password too short', isError: true })
			console.error('Form validation: Error 3')
			return
		}

		if (!validator.isEmail(email)) {
			setAlert({ msg: 'Invalid Email format', isError: true })
			console.error('Form validation: Error 4')
			return
		}

		//Create user with Api

		const newUser = { password, email, first_name, last_name }
		await registerUser(newUser)
			.then(async (response) => {
				if (typeof response !== 'undefined' && response.data.idUsers) {
					console.log('New user registered succesfully')
				}
			})
			.catch((error) => {
				console.log('Error when trying to create a new user: ', error)
			})

		setAlert({})
		navigate('/login')
	}

	const { msg } = alert

	return (
		<>
			<Header />
			<Box
				sx={{
					overflow: 'scroll',
					height: '800px',
				}}
			>
				<Typography
					variant="h1"
					sx={{
						textAlign: 'center',
						fontWeight: 'light',
					}}
				>
					{' '}
					Registre{' '}
				</Typography>

				<Box
					sx={{
						margin: '0 auto',
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						alignItems: 'center',
						width: { xs: '90%', sm: '100%' },
						flexWrap: { xs: 'nowrap', sm: 'wrap' },
						justifyContent: 'center',

						gap: '1em',
					}}
				>
					<TextField
						onChange={(e) => {
							setFirst_name(e.target.value)
						}}
						id="first_name"
						label="Nom"
						variant="outlined"
						required
						InputLabelProps={{
							style: {
								color: '#222222',
							},
						}}
						sx={{
							width: { xs: '80%', sm: '35%' },
						}}
					/>
					<TextField
						onChange={(e) => {
							setLast_name(e.target.value)
						}}
						id="last_name"
						label="Cognom"
						variant="outlined"
						required
						sx={{
							width: { xs: '80%', sm: '35%' },
						}}
						InputLabelProps={{
							style: {
								color: '#222222',
							},
						}}
					/>
					<TextField
						onChange={(e) => {
							setDni(e.target.value)
						}}
						id="DNI"
						label="DNI/NIE/Passaport"
						variant="outlined"
						sx={{
							width: { xs: '80%', sm: '35%' },
						}}
						InputLabelProps={{
							style: {
								color: '#222222',
							},
						}}
					/>
					<TextField
						onChange={(e) => {
							setEmail(e.target.value)
						}}
						required
						id="email"
						label="Email"
						variant="outlined"
						sx={{
							width: { xs: '80%', sm: '35%' },
						}}
						InputLabelProps={{
							style: {
								color: '#222222',
							},
						}}
					/>
					<TextField
						onChange={(e) => {
							setAdress(e.target.value)
						}}
						id="Adress"
						label="Adreça"
						variant="outlined"
						sx={{
							width: { xs: '80%', sm: '35%' },
						}}
						InputLabelProps={{
							style: {
								color: '#222222',
							},
						}}
					/>
					<TextField
						onChange={(e) => {
							setCity(e.target.value)
						}}
						id="city"
						label="Localitat"
						variant="outlined"
						sx={{
							width: { xs: '80%', sm: '35%' },
						}}
						InputLabelProps={{
							style: {
								color: '#222222',
							},
						}}
					/>
					<TextField
						onChange={(e) => {
							setTelephone(Number(e.target.value))
						}}
						id="Phone"
						label="Telèfon"
						variant="outlined"
						sx={{
							width: { xs: '80%', sm: '35%' },
						}}
						InputLabelProps={{
							style: {
								color: '#222222',
							},
						}}
					/>
					<TextField
						onChange={(e) => {
							setBirth_date(new Date(e.target.value))
						}}
						type="date"
						id="birth_date"
						label="Data de naixement"
						variant="outlined"
						sx={{
							width: { xs: '80%', sm: '35%' },
						}}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						onChange={(e) => {
							setHow_meet_us(e.target.value)
						}}
						id="how_meet_us"
						label="Com ens has conegut?"
						variant="outlined"
						sx={{
							width: { xs: '80%', sm: '35%' },
						}}
						InputLabelProps={{
							style: {
								color: '#222222',
							},
						}}
					/>
					<TextField
						onChange={(e) => {
							setPassword(e.target.value)
						}}
						id="password"
						label="Contrasenya"
						variant="outlined"
						required
						sx={{
							width: { xs: '80%', sm: '35%' },
						}}
						InputLabelProps={{
							style: {
								color: '#222222',
							},
						}}
					/>
					<TextField
						onChange={(e) => {
							setRepassword(e.target.value)
						}}
						required
						name="repet_password"
						label="Repetir contrasenya"
						id="password"
						sx={{
							width: { xs: '80%', sm: '35%' },
						}}
						InputLabelProps={{
							style: {
								color: '#222222',
							},
						}}
					/>
					<Box sx={{ width: { xs: '80%', sm: '35%' } }}>
						<Checkbox /> He llegit i accepto els termes i condicions i la
						política de privacitat.
					</Box>
					<Button
						onClick={handleSubmit}
						type="submit"
						variant="contained"
						sx={{
							mt: 3,
							mb: 2,
							borderRadius: '0px',
							bgcolor: '',
							color: 'white',
							width: { xs: '80%', sm: '35%' },
						}}
					>
						Registrar
					</Button>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<Link to="/" style={{ textAlign: 'center' }}>
						{' '}
						<p> Tornar</p>{' '}
					</Link>
					{msg && <FormAlert alert={alert} />}
				</Box>
				<Footer />
			</Box>
		</>
	)
}

export default Register
