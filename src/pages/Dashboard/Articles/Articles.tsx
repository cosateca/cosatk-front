import {
	Box,
	Button,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Modal,
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

const Articles = (props: Props) => {
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

	const handleClick = (e) => {
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
						<Typography variant="h1">ARTICLES</Typography>
						<Box>
							{' '}
							{isOpenForm ? (
								<Box>
									<Typography
										id="modal-modal-title2"
										variant="h1"
										component="h2"
									>
										Nou Article
									</Typography>
									<Box
										sx={{
											display: 'flex',
											flexDirection: { xs: 'column', sm: 'row' },
										}}
									>
										<FormControl
											sx={{
												display: 'flex',
												flexDirection: { xs: 'column', sm: 'row' },
												flexWrap: 'wrap',
												justifyContent: 'flex-start',
												alignItems: 'center',
												gap: '20px',
											}}
											fullWidth
										>
											<TextField
												required
												id="input-nom"
												label="Nom"
												variant="outlined"
												sx={{ width: { xs: '92%', sm: '50%' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>

											<Select
												displayEmpty
												sx={{ width: { xs: '92%', sm: '40%' } }}
												id="selectcategoria"
												value={category}
												label="Categoria"
												onChange={handleChangeCategory}
											>
												<MenuItem value="">Selecciona categoria</MenuItem>
												<MenuItem value={10}>Eines de bricolatge</MenuItem>
												<MenuItem value={20}>Nens petits</MenuItem>
												<MenuItem value={30}>Ortopedia</MenuItem>
											</Select>
											<TextareaAutosize
												aria-label="empty textarea"
												placeholder="Descripció curta"
												minRows={2}
												maxLength={300}
												style={{ width: '91%' }}
											/>
											<TextareaAutosize
												aria-label="empty textarea"
												placeholder="Descripció larga"
												minRows={6}
												maxLength={2000}
												style={{ width: '91%' }}
											/>
											<TextField
												id="input-serial"
												label="Núm. Serie"
												variant="outlined"
												sx={{ width: { xs: '92%' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												id="input-preupagat"
												label="Preu pagat"
												variant="outlined"
												type="Number"
												InputProps={{ inputProps: { min: 0, max: 1000 } }}
												sx={{ width: { xs: '92%', sm: '50%' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												id="input-valor"
												label="Valor"
												variant="outlined"
												type="Number"
												InputProps={{ inputProps: { min: 0, max: 1000 } }}
												sx={{ width: { xs: '92%', sm: '40%' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												id="input-preu"
												label="Preu"
												variant="outlined"
												type="Number"
												InputProps={{ inputProps: { min: 0, max: 1000 } }}
												sx={{ width: { xs: '92%', sm: '50%' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												id="input-period"
												label="Periode (dies)"
												variant="outlined"
												type="Number"
												InputProps={{ inputProps: { min: 0, max: 1000 } }}
												sx={{ width: { xs: '92%', sm: '40%' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												id="input-components"
												label="Components"
												variant="outlined"
												sx={{ width: { xs: '92%', sm: '50%' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												id="input-infoCures"
												label="Info de cures"
												variant="outlined"
												sx={{ width: { xs: '92%', sm: '40%' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												id="input-ownedBy"
												label="Propietari"
												variant="outlined"
												sx={{ width: { xs: '92%', sm: '50%' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												id="input-donatedBy"
												label="Donador"
												variant="outlined"
												sx={{ width: { xs: '92%', sm: '40%' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												id="input-condition"
												label="Condició"
												variant="outlined"
												sx={{ width: { xs: '92%', sm: '50%' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
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
												<MenuItem value="">Selecciona estat</MenuItem>
												<MenuItem value={10}>Disponible</MenuItem>
												<MenuItem value={20}>En prèstec</MenuItem>
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
										<Box>Crosses | Ortopedia | 7 díes | 0 euros</Box>
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

export default Articles
