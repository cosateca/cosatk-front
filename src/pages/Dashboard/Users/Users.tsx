import {
	Box,
	Button,
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
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
import iconEditWhite from '../../../assets/images/icono_modificar_white.svg'
import { IUser } from '../../../interfaces/user.interface'
import {
	GridColDef,
	GridRenderCellParams,
	GridApi,
	GridCellValue,
	DataGrid,
	esES,
	GridToolbarContainer,
	GridToolbarExport,
} from '@mui/x-data-grid'
import FormAlert from '../../../components/FormAlert/FormAlert'
import {
	getAllUsers,
	getUsersByName,
	registerUser,
	updateUser,
} from '../../../services/userService'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

const Users = () => {
	//Data Grid
	const handleEdit = (params: any) => {
		setName(params.row?.first_name)
		setLastName(params.row?.last_name)
		setAddress(params.row?.address)
		setBirthDate(params.row?.birth_date)
		setCity(params.row?.city)
		setDni(params.row?.dni)
		setEmail(params.row?.email)
		setHowMeet(params.row?.how_meet_us)
		setMembership(params.row?.membership)
		setPhone(params.row?.telephone)
		setSubscriber(params.row?.subscriber)
		setEditMode(true)
		setIsOpenForm(true)
		setSelectedId(params.id)
	}
	const HandleEditButton = ({ handleEdit, params }: any) => {
		const handleClick = () => {
			handleEdit(params)
		}

		return (
			<Button
				onClick={handleClick}
				sx={{ display: 'flex', justifyContent: 'flex-start' }}
			>
				<img src={iconEdit} alt="eliminar" />
			</Button>
		)
	}

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
						<img src={iconTrash} alt="Eliminar" title="Eliminar" />
					</Button>
				)
			},
		},
		{
			field: 'edit',
			headerName: 'Editar',
			sortable: false,
			width: 50,
			renderCell: (params) => (
				<HandleEditButton handleEdit={handleEdit} params={params} />
			),
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

	//Alert
	const [alert, setAlert] = useState<any>({})
	const { msg } = alert

	//Edit mode
	const [editMode, setEditMode] = useState(false)

	//Id selected to edit mode
	const [selectedId, setSelectedId] = useState('')

	//Form
	const [data, setData] = useState<any>([])

	const [trigger, setTrigger] = useState(false)

	const [inputName, setInputName] = useState('')
	const [name, setName] = useState<string | null>(null)
	const [lastName, setLastName] = useState<string | null>(null)
	const [email, setEmail] = useState<string | null>(null)
	const [dni, setDni] = useState<string | null>(null)
	const [phone, setPhone] = useState<number | null>(null)
	const [address, setAddress] = useState<string | null>(null)
	const [city, setCity] = useState<string | null>(null)
	const [membership, setMembership] = useState<string | null>(null)
	const [birthDate, setBirthDate] = useState<any>(null)
	const [howMeet, setHowMeet] = useState<string | null>(null)
	const [subscriber, setSubscriber] = useState<boolean>(false)

	const resetStates = () => {
		setName(null)
		setLastName(null)
		setAddress(null)
		setBirthDate(null)
		setCity(null)
		setDni(null)
		setEmail(null)
		setHowMeet(null)
		setMembership(null)
		setPhone(null)
		setSubscriber(false)
	}

	const handleSubmitEdit = (e: any) => {
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
			birth_date: birthDate,
			how_meet_us: howMeet,
			subscriber,
		}
		if (selectedId) {
			updateUser(selectedId, newObject)
				.then(() => {
					setAlert({
						msg: 'Usuari actualitzat correctament, redirigint...',
						isError: false,
					})

					setTimeout(() => {
						// Reset states
						setAlert({})
						resetStates()
						setTrigger(!trigger)
						setEditMode(false)

						setIsOpenForm(!isOpenForm)
					}, 3000)
				})
				.catch((error: Error) => {
					console.log(error)
					setAlert({
						msg: 'Error inesperat, redirigint...',
						isError: true,
					})
					setTimeout(() => {
						// Reset states
						setAlert({})
						resetStates()
						setTrigger(!trigger)
						setEditMode(false)
						setIsOpenForm(!isOpenForm)
					}, 3000)
				})
		}
	}
	const handleSubmitNew = async (e: any) => {
		e.preventDefault()
		resetStates()

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
			birth_date: birthDate,
			how_meet_us: howMeet,
			subscriber,
			password: '12345678',
		}
		await registerUser(newObject)
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				console.log('Error when trying to create a new user: ', error)
				return
			})

		resetStates()

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

	const [isOpenForm, setIsOpenForm] = React.useState(false)

	const handleClick = (e: any) => {
		e.preventDefault()
		setIsOpenForm(!isOpenForm)
	}

	const handleChangeBirthDate = (e: any) => {
		const date = new Date(e.target.value)
		setBirthDate(date.toISOString().slice(0, 10))
	}

	//Material Custom Toolbar
	function CustomToolbar() {
		return (
			<GridToolbarContainer>
				<GridToolbarExport />
			</GridToolbarContainer>
		)
	}

	const handleFilter = async () => {
		if (inputName) {
			getUsersByName(inputName)
				.then((data: IUser[]) => {
					setData(data)
				})
				.catch((error: Error) => {
					console.log(error)
				})
		} else {
			getAllUsers()
				.then((data: IUser[]) => {
					setData(data)
				})
				.catch((error: Error) => {
					console.log(error)
				})
		}
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
											{editMode ? '✏️' : '➕'} Usuari
										</Typography>
										<Button
											onClick={() => {
												setIsOpenForm(false), setEditMode(false)
											}}
											sx={{ margin: '20px', marginRight: '100px' }}
											variant="contained"
										>
											<img src={iconBack} alt="tornar" title="Tornar" />
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
												defaultValue={editMode && name ? name : null}
												id="input-name"
												label="Nom *"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '40%' },
													margin: { xs: '10px', sm: '20px 10px' },
													backgroundColor: editMode ? '#ead9c7' : undefined,
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setLastName(e.target.value)}
												defaultValue={editMode && lastName ? lastName : null}
												id="input-last-name"
												label="Cognoms *"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '50%' },
													margin: { xs: '10px', sm: '20px 10px' },
													backgroundColor: editMode ? '#ead9c7' : undefined,
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setEmail(e.target.value)}
												defaultValue={editMode && email ? email : null}
												id="input-mail"
												label="Email"
												required
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '40%' },
													margin: { xs: '10px', sm: '20px 10px' },
													backgroundColor: editMode ? '#ead9c7' : undefined,
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setDni(e.target.value)}
												defaultValue={editMode && dni ? dni : null}
												id="input-identification-number"
												label="DNI/NIE/Passaport"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '50%' },
													margin: { xs: '10px', sm: '20px 10px' },
													backgroundColor: editMode ? '#ead9c7' : null,
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setPhone(Number(e.target.value))}
												defaultValue={editMode && phone ? phone : null}
												id="input-phone"
												label="Telèfon"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '40%' },
													margin: { xs: '10px', sm: '20px 10px' },
													backgroundColor: editMode ? '#ead9c7' : undefined,
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setAddress(e.target.value)}
												defaultValue={editMode && address ? address : null}
												id="input-address"
												label="Adreça"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '50%' },
													margin: { xs: '10px', sm: '20px 10px' },
													backgroundColor: editMode ? '#ead9c7' : undefined,
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setCity(e.target.value)}
												defaultValue={editMode && city ? city : null}
												id="input-location"
												label="Localitat"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '40%' },
													margin: { xs: '10px', sm: '20px 10px' },
													backgroundColor: editMode ? '#ead9c7' : undefined,
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setMembership(e.target.value)}
												defaultValue={
													editMode && membership ? membership : null
												}
												id="input-membership"
												label="Membresia"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '50%' },
													margin: { xs: '10px', sm: '20px 10px' },
													backgroundColor: editMode ? '#ead9c7' : undefined,
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>

											<TextField
												onChange={handleChangeBirthDate}
												value={editMode && birthDate ? birthDate : undefined}
												id="birthdate"
												label="Data de naixement"
												type="date"
												sx={{
													width: { xs: '95%', sm: '40%' },
													margin: { xs: '10px', sm: '20px 10px' },
													backgroundColor: editMode ? '#ead9c7' : undefined,
												}}
												InputLabelProps={{
													shrink: true,
												}}
											/>
											<TextField
												onChange={(e) => setHowMeet(e.target.value)}
												defaultValue={editMode && howMeet ? howMeet : null}
												id="input-how-to-meet"
												label="Com ens ha conegut?"
												variant="outlined"
												sx={{
													width: { xs: '95%', sm: '50%' },
													margin: { xs: '10px', sm: '20px 10px' },
													backgroundColor: editMode ? '#ead9c7' : undefined,
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
													backgroundColor: editMode ? '#ead9c7' : undefined,
												}}
											>
												Subscriptor
											</FormLabel>
											<RadioGroup
												onChange={(e) =>
													setSubscriber(e.target.value.toLowerCase() === 'true')
												}
												value={subscriber ? 'true' : 'false'}
												row
												aria-labelledby="radio-subscr"
												name="row-radio-buttons-group"
												sx={{
													width: { xs: '95%', sm: '28.4%' },
													margin: { xs: '10px', sm: '20px 10px' },
													backgroundColor: editMode ? '#ead9c7' : undefined,
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
											onClick={editMode ? handleSubmitEdit : handleSubmitNew}
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
											<img
												src={editMode ? iconEditWhite : iconNew}
												alt="nou"
												title="Nou"
											/>
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
												onChange={(e) => {
													setInputName(e.target.value)
												}}
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
											<Button
												onClick={handleFilter}
												sx={{
													bgcolor: '#D9D9D9',
													height: '55px',
												}}
												variant="contained"
											>
												<img src={iconSearch} alt="cerca" title="Cerca" />
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
											<img src={iconNew} alt="nou" title="Nou" />
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
