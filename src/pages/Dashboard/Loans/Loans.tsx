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
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import iconSearch from '../../../assets/images/icono_buscar.svg'
import iconTrash from '../../../assets/images/icono_eliminar.svg'
import iconEdit from '../../../assets/images/icono_modificar.svg'
import {
	DataGrid,
	esES,
	GridApi,
	GridCellValue,
	GridColDef,
	GridRenderCellParams,
	GridToolbarContainer,
	GridToolbarExport,
} from '@mui/x-data-grid'
import loanService from '../../../services/loanService'
import { ILoan } from '../../../interfaces/loans.interface'
import { useNavigate } from 'react-router-dom'

//Data Grid
const columns: GridColDef[] = [
	{
		field: 'remove',
		headerName: 'Retornar',
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
					.forEach(
						(c) =>
							(thisRow[c.field] = params.getValue(params.id, c.field) || '')
					)
				return navigate(`/dashboard/returnloan/${thisRow.idLoan}`)
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
					↩️
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
	{ field: 'idLoan', headerName: 'ID', width: 70 },
	{
		field: 'articleName',
		headerName: 'Nom article',
		width: 140,
		valueGetter: (params) => params.row?.article?.name,
	},
	{
		field: 'articleCode',
		headerName: 'Codi article',
		width: 140,
		valueGetter: (params) => params.row?.article?.code,
	},
	{
		field: 'personName',
		headerName: 'Nom',
		width: 130,
		valueGetter: (params) => params.row?.user?.first_name,
	},
	{
		field: 'personLastName',
		headerName: 'Cognoms',
		width: 150,
		valueGetter: (params) => params.row?.user?.last_name,
	},
	{
		field: 'checked_in',
		headerName: 'Data inici',
		width: 120,
	},
	{
		field: 'checked_out',
		headerName: 'Data fi',
		width: 120,
	},
	{
		field: 'status',
		headerName: 'En prèstec',
		type: 'boolean',
		width: 120,
	},
]

const Loans = () => {
	const [estat, setEstat] = React.useState('')

	//Data
	const [data, setData] = useState<any>([])

	const handleChangeEstat = (event: SelectChangeEvent) => {
		setEstat(event.target.value as string)
	}

	//Bring loans
	useEffect(() => {
		loanService
			.getLoans()
			.then((data: ILoan[]) => {
				setData(data)
			})
			.catch((error: Error) => {
				console.log(error)
			})
	}, [])

	const [sortModel, setSortModel] = React.useState<any>([
		{
			field: 'idLoan',
			sort: 'desc',
		},
	])

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
						<Typography variant="h1">PRÈSTECS</Typography>

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
									id="input-article"
									label="Cerca per article"
									variant="outlined"
									sx={{ width: { xs: '90%', sm: '200px' } }}
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
									value={estat}
									label="Estat"
									onChange={handleChangeEstat}
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
										{...data}
										sortModel={sortModel}
										onSortModelChange={(model) => setSortModel(model)}
										rows={data}
										getRowId={(row: any) => row.idLoan}
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
						</Box>
					</Container>
				</section>
			</Box>
		</>
	)
}
export default Loans
