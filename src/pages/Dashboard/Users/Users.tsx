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
import React, { useState } from 'react'
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
} from '@mui/x-data-grid'

type Props = {}

//Data Grid
const columns: GridColDef[] = [
	{
		field: 'remove',
		headerName: 'Eliminar',
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
					.forEach(
						(c) =>
							(thisRow[c.field] = params.getValue(params.id, c.field) || '')
					)
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
					.forEach(
						(c) =>
							(thisRow[c.field] = params.getValue(params.id, c.field) || '')
					)

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
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'name', headerName: 'Nom', width: 130 },
	{
		field: 'lastName',
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
]

const Users = (props: Props) => {
	const [prestecEnCurs, setPrestecEnCurs] = React.useState('')

	//Form
	const [data, setData] = useState<any>([])

	const [id, setId] = React.useState('')
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [dni, setDni] = useState('')
	const [phone, setPhone] = useState(0)
	const [adress, setAdress] = useState('')
	const [city, setCity] = useState('')
	const [membership, setMembership] = useState('')
	const [birthDate, setBirthDate] = useState<Date>(new Date('1975-01-01'))
	const [howMeet, setHowMeet] = useState('')
	const [subscriber, setSubscriber] = useState(0)

	const handleSubmit = (e: any) => {
		e.preventDefault()

		if (name === '' || lastName === '') {
			console.log('error, no name or lastname')
			return
		}

		const newObject: IUser = {
			first_name: name,
			last_name: lastName,
			email,
			dni,
			phone,
			adress,
			city,
			membership,
			birth_date: birthDate,
			how_meet_us: howMeet,
			subscriber,
		}
		setData([...data, newObject])

		// Resetear los estados
		setId('')
		setName('')
		setLastName('')
		setAdress('')
		setBirthDate(new Date('1975-01-01'))
		setCity('')
		setDni('')
		setEmail('')
		setHowMeet('')
		setMembership('')
		setPhone(0)
		setSubscriber(0)

		console.log(
			'New user added: ' + newObject.first_name + ' ' + newObject.last_name
		)
		setIsOpenForm(!isOpenForm)
	}

	//Modal
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const handleChange = (event: SelectChangeEvent) => {
		setPrestecEnCurs(event.target.value as string)
	}

	const [isOpenForm, setIsOpenForm] = React.useState(false)

	const handleClick = (e: any) => {
		e.preventDefault()
		setIsOpenForm(!isOpenForm)
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
												onChange={(e) => setAdress(e.target.value)}
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
												onChange={(e) => setBirthDate(new Date(e.target.value))}
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
											<FormLabel id="radio-subscr">Subscriptor</FormLabel>
											<RadioGroup
												onChange={(e) => setSubscriber(Number(e.target.value))}
												defaultValue="0"
												row
												aria-labelledby="radio-subscr"
												name="row-radio-buttons-group"
												sx={{
													width: { xs: '95%', sm: '42%' },
													margin: { xs: '10px', sm: '20px 10px' },
												}}
											>
												<FormControlLabel
													value="1"
													control={<Radio />}
													label="Si"
												/>
												<FormControlLabel
													value="0"
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
								</Box>
							) : (
								<>
									<Box
										sx={{
											display: 'flex',
											flexDirection: { xs: 'column', sm: 'row' },
											justifyContent: 'flex-start',
											alignItems: 'center',
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
												sx={{ width: { xs: '200px' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<Select
												displayEmpty
												sx={{ width: { xs: '200px' } }}
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
												columns={columns}
												disableSelectionOnClick
											/>
										</Box>
									</Box>
								</>
							)}
						</Box>
						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
							<Box sx={style}>
								<Typography id="modal-modal-title" variant="h1" component="h2">
									Confirmar eliminar
								</Typography>
								<Button
									onClick={handleClose}
									sx={{
										marginBottom: '20px',
										paddingLeft: '40px',
										paddingRight: '40px',
										height: '55px',
									}}
									variant="contained"
								>
									OK
								</Button>
							</Box>
						</Modal>
					</Container>
				</section>
			</Box>
		</>
	)
}

export default Users
