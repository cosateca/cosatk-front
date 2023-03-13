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
import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import iconSearch from '../../../assets/images/icono_buscar.svg'
import iconNew from '../../../assets/images/icono_add.svg'
import iconTrash from '../../../assets/images/icono_eliminar.svg'
import iconEdit from '../../../assets/images/icono_modificar.svg'

const style = {
	position: 'absolute' as 'absolute',
	display: 'flex',
	flexDirection: 'column',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: { xs: '360', sm: '800' },
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
}

type Props = {}

const Users = (props: Props) => {
	const [prestecEnCurs, setPrestecEnCurs] = React.useState('')

	//Modal
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const handleChange = (event: SelectChangeEvent) => {
		setPrestecEnCurs(event.target.value as string)
	}

	//New Article
	const [isOpenForm, setIsOpenForm] = React.useState(false)

	const [name, setName] = React.useState('')
	const [shortDesc, setShortDesc] = React.useState('')
	const [longDesc, setLongDesc] = React.useState('')
	const [components, setComponents] = React.useState('')
	const [careInfo, setCareInfo] = React.useState('')
	const [ownedBy, setOwnedBy] = React.useState('')
	const [donatedBy, setDonatedBy] = React.useState('')
	const [category, setCategory] = React.useState('')
	const [serial, setSerial] = React.useState('')
	const [condition, setCondition] = React.useState('')
	const [location, setLocation] = React.useState('')
	const [brand, setBrand] = React.useState('')
	const [pricePaid, setPricePaid] = React.useState('')
	const [shownOnWeb, setShownOnWeb] = React.useState(false)
	const [loanFee, setLoanFee] = React.useState('')
	const [loanPeriod, setLoanPeriod] = React.useState('')

	const handleClick = (e: any) => {
		e.preventDefault()
		setIsOpenForm(!isOpenForm)
	}
	const handleChangeCategory = (event: SelectChangeEvent) => {
		setCategory(event.target.value as string)
	}
	const handleChangeCondition = (event: SelectChangeEvent) => {
		setCondition(event.target.value as string)
	}

	return (
		<>
			<Box display={{ xs: 'block', sm: 'flex' }} overflow-y={{ xs: 'hidden' }}
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
									<Typography
										id="modal-modal-title2"
										variant="h1"
										component="h2"
									>
										Nou Usuari
									</Typography>
									<Box
							sx={{
								width: { xs: '100%' , sm: '100wh'},
								display: 'flex',
								flexDirection: { xs: 'column', sm: 'row' },
								flexWrap:'wrap',
							}}
						>
							<FormControl
								sx={{
									width: { xs: '100%' , sm: '100wh'},
									display: 'flex',
									flexDirection: { xs: 'column', sm: 'row' },
									flexWrap:'wrap',
								}}
								fullWidth
							>
								<TextField
									id="input-name"
									label="Nom *"
									variant="outlined"
									sx={{
										width: { xs: '95%' , sm: '42%'},
										margin: { xs: '10px' , sm: '20px 10px'},
									}}
									InputLabelProps={{
										style: {
											color: '#222222',
										},
									}}
								/>
								<TextField
									id="input-last-name"
									label="Cognoms *"
									variant="outlined"
									sx={{
										width: { xs: '95%' , sm: '42%'},
										margin: { xs: '10px' , sm: '20px 10px'},
									}}
									InputLabelProps={{
										style: {
											color: '#222222',
										},
									}}
								/>
								<TextField
									id="input-mail"
									label="Email"
									variant="outlined"
									sx={{
										width: { xs: '95%' , sm: '42%'},
										margin: { xs: '10px' , sm: '20px 10px'},
									}}
									InputLabelProps={{
										style: {
											color: '#222222',
										},
									}}
								/>
								<TextField
									id="input-identification-number"
									label="DNI/NIE/Passaport"
									variant="outlined"
									sx={{
										width: { xs: '95%' , sm: '42%'},
										margin: { xs: '10px' , sm: '20px 10px'},
									}}
									InputLabelProps={{
										style: {
											color: '#222222',
										},
									}}
								/>
								<TextField
									id="input-phone"
									label="Telèfon"
									variant="outlined"
									sx={{
										width: { xs: '95%' , sm: '42%'},
										margin: { xs: '10px' , sm: '20px 10px'},
									}}
									InputLabelProps={{
										style: {
											color: '#222222',
										},
									}}
								/>
								<TextField
									id="input-address"
									label="Adreça"
									variant="outlined"
									sx={{
										width: { xs: '95%' , sm: '42%'},
										margin: { xs: '10px' , sm: '20px 10px'},
									}}
									InputLabelProps={{
										style: {
											color: '#222222',
										},
									}}
								/>
								<TextField
									id="input-location"
									label="Localitat"
									variant="outlined"
									sx={{
										width: { xs: '95%' , sm: '42%'},
										margin: { xs: '10px' , sm: '20px 10px'},
									}}
									InputLabelProps={{
										style: {
											color: '#222222',
										},
									}}
								/>
								<Select
									displayEmpty
									sx={{
										width: { xs: '95%' , sm: '42%'},
										margin: { xs: '10px' , sm: '20px 10px'},
									}}
									id="membership"
									value={undefined}
									label="Estat"
									onChange={handleChange}
								>
									<MenuItem value="">Membresia</MenuItem>
								</Select>	
    <FormLabel id="demo-row-radio-buttons-group-label"
								sx={{
										width: { xs: '95%' , sm: '100%'},
										margin: { xs: '10px' , sm: '20px 10px'},
																		
									}}
								>Suscriptor</FormLabel>
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
									sx={{
										width: { xs: '95%' , sm: '42%'},
										margin: { xs: '10px' , sm: '20px 10px'},
										
									}}
    >
        <FormControlLabel value="Si" control={<Radio />} label="Si" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
    </RadioGroup>

							<TextField
									id="input-date-born"
									label="Data de naixement"
									variant="outlined"
									sx={{
										width: { xs: '95%' , sm: '42%'},
										margin: { xs: '10px' , sm: '20px 10px'},
									}}
									InputLabelProps={{
										style: {
											color: '#222222',
										},
									}}
								/>
								<Select
									displayEmpty
									sx={{
										width: { xs: '95%' , sm: '42%'},
										margin: { xs: '10px' , sm: '20px 10px'},
									}}
									id="demo-simple-select"
									value={undefined}
									label="Estat"
									onChange={handleChange}
								>
									<MenuItem value="">Com ens va conèxier</MenuItem>
								</Select>	
								<Button variant="contained"
								sx={{
									width: { xs: '95%' , sm: '20%'},
									height: { xs: '45px' , sm: '45px' },
									color: { xs: 'white' , sm: 'white'},
									margin: { xs: '0 auto' , sm: '0 auto' },	
								}}
								>Enviar</Button>
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
											onClick={handleClick}
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
													marginBottom: '20px',
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
												marginBottom: '20px',
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
											display: 'flex',
											flexDirection: 'row',
											alignItems: 'center',
											justifyContent: 'space-between',
											gap: '10px',
											bgcolor: '#67B7E1',
											minHeight: '40px',
											width: '100%',
											paddingLeft: '10px',
										}}
									>
										<Box>914582457 | Joaquín Rodríguez Mata | 529482713T | 003469584756 | joqrodma@gmail.com</Box>
							
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
												marginRight: '10px',
												gap: '10px',
												height: '40px',
												marginTop: '-20px',
											}}
										>
											<Button
												onClick={handleOpen}
												sx={{
													height: '35px',
													bgcolor: 'white',
												}}
												variant="contained"
											>
												<img src={iconTrash} alt="eliminar" />
											</Button>
											<Button
												sx={{
													height: '35px',
													bgcolor: 'white',
												}}
												variant="contained"
											>
												<img src={iconEdit} alt="modificar" />
											</Button>
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