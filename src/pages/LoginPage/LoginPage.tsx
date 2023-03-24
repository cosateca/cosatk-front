import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { Typography } from '@mui/material'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FormAlert from '../../components/FormAlert/FormAlert'
import { loginUser } from '../../services/userService'
import { useNavigate } from 'react-router'
import useAuth from '../../hooks/useAuth'

const LoginPage = () => {
	const navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [alert, setAlert] = useState<any>({})

	const { msg } = alert
	const { auth, setAuth } = useAuth()

	const handleSubmit = async (e: any) => {
		e.preventDefault()

		if ([email, password].includes('')) {
			setAlert({
				msg: 'Algun dels camps ha quedat buit.',
				isError: true,
			})
			console.error('Form validation: Error 1')
			return
		}

		const userInfo = {
			email,
			password,
		}

		await loginUser(userInfo)
			.then(async (response) => {
				const { user } = response

				if (user) {
					setAuth(user)
					setAlert({
						msg: 'Login correcte! Seràs redirigit en un instant...',
						isError: false,
					})

					if (user.role === 'user') {
						setTimeout(() => {
							navigate('/')
						}, 3000)
					} else if (user.role === 'admin') {
						setTimeout(() => {
							navigate('/dashboard/loans')
						}, 3000)
					}
				} else {
					setAlert({ msg: "Error quan s'intentava el login", isError: true })
				}
			})
			.catch((error) => {
				console.log("Error quan s'intentava el login: ", error)
				setAlert({ msg: "Error quan s'intentava el login", isError: true })
			})
	}

	return (
		<>
			<Header />
			<Box
				sx={{
					margin: '0 auto',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: { xs: '80%', sm: '20%' },
				}}
			>
				<Typography variant="h1" sx={{ margin: 5, fontWeight: 'light' }}>
					{' '}
					Benvingut{' '}
				</Typography>

				<TextField
					onChange={(e) => {
						setEmail(e.target.value)
					}}
					id="Email"
					label="Email"
					variant="outlined"
					required
					fullWidth
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
					margin="normal"
					required
					fullWidth
					name="password"
					label="Contrasenya"
					id="password"
					type="password"
					InputLabelProps={{
						style: {
							color: '#222222',
						},
					}}
				/>
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
						width: { xs: '100%', sm: '50%' },
					}}
				>
					Login
				</Button>
				{msg && <FormAlert alert={alert} />}

				<Grid item>
					<Link href="/register" variant="body2">
						{"No tens compte ? Registra't !"}
					</Link>
				</Grid>
			</Box>
			<Footer />
		</>
	)
}

export default LoginPage
