// import { Box, Container, Typography } from '@mui/material'
// import React from 'react'
// import Navbar from '../../../components/Navbar/Navbar'

// type Props = {}

// const Users = (props: Props) => {
// 	return (
// 		<>
// 			<Box display={{ xs: 'block', sm: 'flex' }} overflow-y={{ xs: 'hidden' }}>
// 				<Navbar />
// 				<section>
// 					<Container
// 						sx={{
// 							padding: { xs: '25px', sm: '50px' },
// 							width: '100vw',
// 							height: '100vh',
// 						}}
// 					>
// 						<Typography variant="h1">USUARIS</Typography>
// 						Users, aqui dentro va el contenido a desarrollar por cada developer
// 					</Container>
// 				</section>
// 			</Box>
// 		</>
// 	)
// }

// export default Users

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
	const [estat, setEstat] = React.useState('')

	//Modal
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const handleChange = (event: SelectChangeEvent) => {
		setEstat(event.target.value as string)
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
						<Typography variant="h1">USUARIS</Typography>

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
								{/* <TextField
									id="input-article"
									label="Cerca per article"
									variant="outlined"
									sx={{ width: { xs: '200px' } }}
									InputLabelProps={{
										style: {
											color: '#222222',
										},
									}}
								/> */}
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
									value={estat}
									label="Estat"
									onChange={handleChange}
								>
									<MenuItem value="">Prèstec en curs</MenuItem>
									<MenuItem value={10}>En termini</MenuItem>
									<MenuItem value={20}>Proper data</MenuItem>
									<MenuItem value={30}>Excedit</MenuItem>
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
						<Box>
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
								<Box>
								914582457 | Joaquín Rodríguez Mata | 529482713T |
								003469584756 | joqrodma@gmail.com{' '}
								</Box>
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
						</Box>
						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
							<Box sx={style}>
								<Typography id="modal-modal-title" variant="h1" component="h2">
									Confirma eliminar l'usuari
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