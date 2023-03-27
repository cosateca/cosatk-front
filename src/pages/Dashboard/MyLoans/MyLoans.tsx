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
import React, { useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import iconSearch from '../../../assets/images/icono_buscar.svg'
import iconNew from '../../../assets/images/icono_add.svg'
import iconTrash from '../../../assets/images/icono_eliminar.svg'
import iconEdit from '../../../assets/images/icono_modificar.svg'
import {
	DataGrid,
	GridApi,
	GridCellValue,
	GridColDef,
	GridRenderCellParams,
} from '@mui/x-data-grid'
import { nanoid } from 'nanoid'

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
	{ field: 'articleName', headerName: 'Nom article', width: 190 },
	{
		field: 'personName',
		headerName: 'Nom',
		width: 140,
	},
	{
		field: 'personLastName',
		headerName: 'Cognoms',
		width: 190,
	},
	{
		field: 'checkinDate',
		headerName: 'Data inici',
		width: 120,
	},
	{
		field: 'checkoutDate',
		headerName: 'Data fi',
		width: 120,
	},
]

const MyLoans = (props: Props) => {
	const [estat, setEstat] = React.useState('')

	//Data
	const [data, setData] = useState<any>([
		{
			id: nanoid(),
			articleName: 'Crosses',
			personName: 'Jose',
			personLastName: 'Mata Mateo',
			checkinDate: '24/05/2022',
			checkoutDate: '24/06/2022',
		},
	])

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
						<Typography variant="h1">ELS MEUS PRÈSTECS</Typography>

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
									id="input-article"
									label="Cerca per article"
									variant="outlined"
									sx={{ width: { xs: '200px' } }}
									InputLabelProps={{
										style: {
											color: '#222222',
										},
									}}
								/>
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
									<MenuItem value="">Selecciona Estat</MenuItem>
									<MenuItem value={10}>En termini</MenuItem>
									<MenuItem value={20}>Proper data</MenuItem>
									<MenuItem value={30}>Excedit</MenuItem>
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
						</Box>
						<Box>
							<Box
								sx={{
									marginTop: '20px',
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-between',
									gap: '10px',
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
						</Box>
					</Container>
				</section>
			</Box>
		</>
	)
}

export default MyLoans
