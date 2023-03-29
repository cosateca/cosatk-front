import {
	Box,
	Button,
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputLabel,
	MenuItem,
	Modal,
	Radio,
	RadioGroup,
	Select,
	SelectChangeEvent,
	TextareaAutosize,
	TextField,
	Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import iconSearch from '../../../assets/images/icono_buscar.svg'
import iconNew from '../../../assets/images/icono_add.svg'
import iconTrash from '../../../assets/images/icono_eliminar.svg'
import iconEdit from '../../../assets/images/icono_modificar.svg'
import iconBack from '../../../assets/images/icono_flecha_atras.svg'
import { IUser } from '../../../interfaces/user.interface'
import {
	GridColDef,
	GridRenderCellParams,
	GridApi,
	GridCellValue,
	DataGrid,
	esES,
	GridToolbar,
	GridToolbarContainer,
	GridToolbarExport,
} from '@mui/x-data-grid'
import FormAlert from '../../../components/FormAlert/FormAlert'
import {
	createUserFromDashboard,
	getAllUsers,
	registerUser,
} from '../../../services/userService'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

//Data Grid
const columns: GridColDef[] = [
	{
		field: 'remove',
		headerName: 'Eliminar',
		sortable: false,
		width: 50,
		renderCell: (params: GridRenderCellParams<any>) => {
			const navigate = useNavigate()
			const onClick = (e: any) => {
				e.stopPropagation() // don't select this row after clicking

				const api: GridApi = params.api
				const thisRow: Record<string, GridCellValue> = {}

				api
					.getAllColumns()
					.filter((c) => c.field !== '__check__' && !!c)
					.forEach((c) => (thisRow[c.field] = params.row || ''))
				return navigate(`/dashboard/deleteuser/${params.row.idUsers}`)
			}

			return (
				<Button
					sx={{
						display: 'flex',
						justifyContent: 'flex-start',
						borderRadius: '0px',
					}}
					onClick={onClick}
				>
					<img src={iconTrash} alt="eliminar" />
				</Button>
			)
		},
	},
	{
		field: 'edit',
		headerName: 'Editar',
		sortable: false,
		width: 50,
		renderCell: (params: GridRenderCellParams<any>) => {
			const onClick = (e: any) => {
				e.stopPropagation() // don't select this row after clicking

				const api: GridApi = params.api
				const thisRow: Record<string, GridCellValue> = {}

				api
					.getAllColumns()
					.filter((c) => c.field !== '__check__' && !!c)
					.forEach((c) => (thisRow[c.field] = params.row || ''))

				return alert(JSON.stringify(thisRow, null, 4))
			}

			return (
				<Button
					sx={{
						display: 'flex',
						justifyContent: 'flex-start',
						borderRadius: '0px',
					}}
					onClick={onClick}
				>
					<img src={iconEdit} alt="modificar" />
				</Button>
			)
		},
	},
	{ field: 'idUsers', headerName: 'ID', width: 70 },
	{ field: 'first_name', headerName: 'Nom', width: 130 },
	{
		field: 'last_name',
		headerName: 'Cognoms',
		width: 190,
	},
	{
		field: 'dni',
		headerName: 'DNI/Passaport',
		width: 150,
	},
	{
		field: 'email',
		headerName: 'Email',
		width: 190,
	},
	{
		field: 'role',
		headerName: 'Rol',
		width: 90,
	},
]

const Users = () => {
	const navigate = useNavigate()

	const [prestecEnCurs, setPrestecEnCurs] = React.useState('')

	//Alert
	const [alert, setAlert] = useState<any>({})
	const { msg } = alert

	//Form
	const [data, setData] = useState<any>([])

	const [trigger, setTrigger] = useState(false)

	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [dni, setDni] = useState('')
	const [phone, setPhone] = useState(0)
	const [address, setAddress] = useState('')
	const [city, setCity] = useState('')
	const [membership, setMembership] = useState('')
	const [birthDate, setBirthDate] = useState<any>(
		moment().startOf('day').toDate()
	)
	const [howMeet, setHowMeet] = useState('')
	const [subscriber, setSubscriber] = useState(false)

	const handleSubmit = async (e: any) => {
		e.preventDefault()

		if ([name, lastName, email].includes('')) {
			setAlert({
				msg: 'Algun dels camps requerits ha quedat buit.',
				isError: true,
			})
			console.error('Form validation: Error 1')
			return
		}

		if (name === '' || lastName === '') {
			console.log('error, no name or lastname')
			return
		}

		if (email === '') {
			console.log('error, no email introduced')
			return
		}

		const newObject: IUser = {
			first_name: name,
			last_name: lastName,
			email,
			dni,
			telephone: phone,
			address,
			city,
			membership,
			birth_date: moment(birthDate).format('YYYY-MM-DD'),
			how_meet_us: howMeet,
			subscriber,
			password: '12345678', //TODO: use .env
		}
		// await createUserFromDashboard(newObject)
		// 	.then(async (response) => {
		// 		const { user } = response

		// 		if (user) {
		// 			setData(user)
		// 			setAlert({
		// 				msg: 'Usuari creat correctament Redirigint...',
		// 				isError: false,
		// 			})
		// 			setTimeout(() => {
		// 				setAlert({})
		// 				setTrigger(!trigger)
		// 				setIsOpenForm(!isOpenForm)
		// 			}, 3000)
		// 		} else {
		// 			setAlert({
		// 				msg: "Error quan s'intentava crear un usuari",
		// 				isError: true,
		// 			})
		// 			setTimeout(() => {
		// 				setAlert({})
		// 				setTrigger(!trigger)
		// 				setIsOpenForm(!isOpenForm)
		// 			}, 3000)
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		console.log("Error quan s'intentava crear un usuari: ", error)
		// 		setAlert({
		// 			msg: "Error quan s'intentava crear un usuari",
		// 			isError: true,
		// 		})
		// 		setTimeout(() => {
		// 			setAlert({})
		// 			setTrigger(!trigger)
		// 			setIsOpenForm(!isOpenForm)
		// 		}, 3000)
		// 	})

		await registerUser(newObject)
			.then(async (response) => {
				if (typeof response !== 'undefined' && response.data.idUsers) {
					console.log('New user registered succesfully')
				}
			})
			.catch((error) => {
				console.log('Error when trying to create a new user: ', error)
				return
			})

		// Resetear los estados
		setName('')
		setLastName('')
		setAddress('')
		setBirthDate(moment(birthDate).format('YYYY-MM-DD'))
		setCity('')
		setDni('')
		setEmail('')
		setHowMeet('')
		setMembership('')
		setPhone(0)
		setSubscriber(false)

		setAlert({
			msg: 'Usuari registrat correctament. Redirigint...',
			isError: false,
		})
		setTimeout(() => {
			setAlert({})
			setTrigger(!trigger)
			setIsOpenForm(!isOpenForm)
		}, 3500)
	}

	//Bring users
	useEffect(() => {
		getAllUsers()
			.then((data: IUser[]) => {
				setData(data)
			})
			.catch((error: Error) => {
				console.log(error)
			})
	}, [trigger])

	const handleChange = (event: SelectChangeEvent) => {
		setPrestecEnCurs(event.target.value as string)
	}

	const [isOpenForm, setIsOpenForm] = React.useState(false)

	const handleClick = (e: any) => {
		e.preventDefault()
		setIsOpenForm(!isOpenForm)
	}

	const handleChangeBirthDate = (e: any) => {
		const date = moment(e.target.value).format('YYYY-MM-DD')
		setBirthDate(moment(date, 'YYYY-MM-DD').toDate())
	}

	//Material Custom Toolbar
	function CustomToolbar() {
		return (
			<GridToolbarContainer>
				<GridToolbarExport />
			</GridToolbarContainer>
		)
	}

	return (
		<>
			<Box
				display={{ xs: 'block', sm: 'flex' }}
				overflow-y={{ xs: 'hidden' }}
				sx={{
					overflow: { xs: 'scroll', sm: 'scroll' },
				}}
			>
				<Navbar />
				<section>
					<Container
						sx={{
							padding: { xs: '25px', sm: '50px' },
							width: '100vw',
							height: '100vh',
						}}
					>
						<Typography variant="h1">USUARIS</Typography>
						<Box>
							{' '}
							{isOpenForm ? (
								<Box>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
											marginBottom: '10px',
										}}
									>
										<Typography
											id="modal-modal-title2"
											variant="h1"
											component="h2"
										>
											✏️Usuari
										</Typography>
										<Button
											onClick={() => setIsOpenForm(false)}
											sx={{ margin: '20px', marginRight: '100px' }}
											variant="contained"
										>
											<img src={iconBack} alt="tornar" />
										</Button>
									</Box>
									<Box
										sx={{
											width: { xs: '100%', sm: '100wh' },
											display: 'flex',
											flexDirection: { xs: 'column', sm: 'row' },
											flexWrap: 'wrap',
										}}
									>
										<FormControl
											sx={{
												width: { xs: '100%', sm: '100wh' },
												display: 'flex',
												flexDirection: { xs: 'column', sm: 'row' },
												flexWrap: 'wrap',
											}}
											fullWidth
										>
											<TextField
												onChange={(e) => setName(e.target.value)}
												id="input-name"
												label="Nom *"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '40%' },
													margin: { xs: '10px', sm: '20px 10px' },
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setLastName(e.target.value)}
												id="input-last-name"
												label="Cognoms *"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '50%' },
													margin: { xs: '10px', sm: '20px 10px' },
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setEmail(e.target.value)}
												id="input-mail"
												label="Email"
												required
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '40%' },
													margin: { xs: '10px', sm: '20px 10px' },
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setDni(e.target.value)}
												id="input-identification-number"
												label="DNI/NIE/Passaport"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '50%' },
													margin: { xs: '10px', sm: '20px 10px' },
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setPhone(Number(e.target.value))}
												id="input-phone"
												label="Telèfon"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '40%' },
													margin: { xs: '10px', sm: '20px 10px' },
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setAddress(e.target.value)}
												id="input-address"
												label="Adreça"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '50%' },
													margin: { xs: '10px', sm: '20px 10px' },
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setCity(e.target.value)}
												id="input-location"
												label="Localitat"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '40%' },
													margin: { xs: '10px', sm: '20px 10px' },
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setMembership(e.target.value)}
												id="input-membership"
												label="Membresia"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '50%' },
													margin: { xs: '10px', sm: '20px 10px' },
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>

											<TextField
												onChange={handleChangeBirthDate}
												id="birthdate"
												label="Data de naixement"
												type="date"
												sx={{
													width: { xs: '95%', sm: '40%' },
													margin: { xs: '10px', sm: '20px 10px' },
												}}
												InputLabelProps={{
													shrink: true,
												}}
											/>
											<TextField
												onChange={(e) => setHowMeet(e.target.value)}
												id="input-how-to-meet"
												label="Com ens ha conegut?"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '50%' },
													margin: { xs: '10px', sm: '20px 10px' },
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<FormLabel
												id="radio-subscr"
												sx={{
													width: { xs: '95%', sm: '10%' },
													margin: { xs: '10px', sm: '20px 10px' },
												}}
											>
												Subscriptor
											</FormLabel>
											<RadioGroup
												onChange={(e) =>
													setSubscriber(e.target.value.toLowerCase() === 'true')
												}
												defaultValue="false"
												row
												aria-labelledby="radio-subscr"
												name="row-radio-buttons-group"
												sx={{
													width: { xs: '95%', sm: '42%' },
													margin: { xs: '10px', sm: '20px 10px' },
												}}
											>
												<FormControlLabel
													value="true"
													control={<Radio />}
													label="Si"
												/>
												<FormControlLabel
													value="false"
													control={<Radio />}
													label="No"
												/>
											</RadioGroup>
										</FormControl>
									</Box>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<Button
											onClick={handleSubmit}
											sx={{
												marginBottom: '20px',
												marginTop: '10px',
												paddingLeft: '40px',
												paddingRight: '40px',
												height: '55px',
												width: { xs: '70%', sm: '40%' },
											}}
											variant="contained"
										>
											<img src={iconNew} alt="nou" />
										</Button>
									</Box>
									{msg && <FormAlert alert={alert} />}
								</Box>
							) : (
								<>
									<Box
										sx={{
											display: 'flex',
											flexDirection: { xs: 'column', sm: 'row' },
											justifyContent: 'flex-start',
											alignItems: 'center',
											marginTop: '30px',
										}}
									>
										<FormControl
											sx={{
												display: 'flex',
												flexDirection: { xs: 'column', sm: 'row' },
												justifyContent: 'flex-start',
												alignItems: 'center',
												gap: '20px',
											}}
											fullWidth
										>
											<TextField
												id="input-nom"
												label="Cerca per nom"
												variant="outlined"
												sx={{ width: { xs: '90%', sm: '200px' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<Select
												displayEmpty
												sx={{ width: { xs: '90%', sm: '200px' } }}
												id="demo-simple-select"
												value={prestecEnCurs}
												label="Estat"
												onChange={handleChange}
											>
												<MenuItem value="">Prèstec en curs</MenuItem>
												<MenuItem value={10}>Sense préstec</MenuItem>
											</Select>
											<Button
												sx={{
													bgcolor: '#D9D9D9',
													height: '55px',
												}}
												variant="contained"
											>
												<img src={iconSearch} alt="cerca" />
											</Button>
										</FormControl>
										<Button
											onClick={handleClick}
											sx={{
												paddingLeft: '40px',
												paddingRight: '40px',
												marginTop: { xs: '20px', sm: '0' },
												height: '55px',
											}}
											variant="contained"
										>
											<img src={iconNew} alt="nou" />
										</Button>
									</Box>
									<Box
										sx={{
											marginTop: '20px',
											display: 'flex',
											flexDirection: 'row',
											alignItems: 'center',
											justifyContent: 'space-between',
											gap: '10px',

											minHeight: '40px',
											width: '100%',
										}}
									>
										<Box sx={{ height: { xs: 460, xl: 600 }, width: '100%' }}>
											<DataGrid
												rows={data}
												getRowId={(row: any) => row.idUsers}
												columns={columns}
												localeText={
													esES.components.MuiDataGrid.defaultProps.localeText
												}
												components={{
													Toolbar: CustomToolbar,
												}}
												disableSelectionOnClick
											/>
										</Box>
									</Box>
								</>
							)}
						</Box>
					</Container>
				</section>
			</Box>
		</>
	)
}

export default Users
