/* eslint-disable no-mixed-spaces-and-tabs */
// import { Box, Container, Typography } from '@mui/material'
// import React from 'react'
// import Navbar from '../../../components/Navbar/Navbar'

// type Props = {}

// const NewUser = (props: Props) => {
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
// 						<Typography variant="h1">NOU USUARI</Typography>
// 						User, aqui dentro va el contenido a desarrollar por cada developer
// 					</Container>
// 				</section>
// 			</Box>
// 		</>
// 	)
// }

// export default NewUser

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
	TextField,
	Typography,
} from '@mui/material'
import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import iconSearch from '../../../assets/images/icono_buscar.svg'
import iconNew from '../../../assets/images/icono_add.svg'
import iconTrash from '../../../assets/images/icono_eliminar.svg'
import iconEdit from '../../../assets/images/icono_modificar.svg'
import { Link } from 'react-router-dom'

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

const NewUser = (props: Props) => {
	const [estat, setEstat] = React.useState('')



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
						}}
					>
						<Typography variant="h1">NOU USUARI</Typography>

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
									value={estat}
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
									value={estat}
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
					</Container>
				</section>
			</Box>
		</>
	)
}

export default NewUser