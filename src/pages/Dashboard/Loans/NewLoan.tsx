import { Button, FormControl, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import iconSearch from '../../../assets/images/icono_buscar.svg'
import iconTrash from '../../../assets/images/icono_eliminar.svg'
import iconEdit from '../../../assets/images/icono_modificar.svg'
import { useParams } from 'react-router'
import Navbar from '../../../components/Navbar/Navbar'
import {
	DataGrid,
	GridApi,
	GridCellValue,
	GridColDef,
	GridRenderCellParams,
} from '@mui/x-data-grid'
import { useState } from 'react'

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

const NewLoan = (props: Props) => {
	const { id } = useParams()

	const [data, setData] = useState<any>([])

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
						<Typography variant="h1">✏️Prèstec</Typography>

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
									label="Cerca usuari"
									variant="outlined"
									sx={{ width: { xs: '200px' } }}
									InputLabelProps={{
										style: {
											color: '#222222',
										},
									}}
								/>
								<Button
									sx={{
										bgcolor: '#D9D9D9',
										height: '55px',
									}}
									variant="contained"
								>
									<img src={iconSearch} alt="cerca" />
								</Button>
								<Box
									sx={{
										display: 'flex',
										marginBottom: '20px',
										marginTop: '20px',
										paddingLeft: '40px',
										paddingRight: '40px',
										height: '55px',
										bgcolor: '#67b7e1',
										width: { xs: '70%', sm: '100%' },
									}}
								>
									<p>Id. article seleccionat: {id}</p>
								</Box>
							</FormControl>
						</Box>
						<Box>
							<Typography variant="h2" color="initial">
								Per crear un nou prèstec associat a l'article seleccionat cerca
								un usuari
							</Typography>

							<Box sx={{ height: { xs: 460, xl: 600 }, width: '100%' }}>
								<DataGrid
									rows={data}
									columns={columns}
									disableSelectionOnClick
								/>
							</Box>
						</Box>
					</Container>
				</section>
			</Box>
		</>
	)
}

export default NewLoan
