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
import iconNew from '../../../assets/images/icono_add.svg'
import iconEditWhite from '../../../assets/images/icono_modificar_white.svg'
import iconBack from '../../../assets/images/icono_flecha_atras.svg'
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
import FormAlert from '../../../components/FormAlert/FormAlert'
import moment from 'moment'

const Loans = () => {
	//Data Grid
	const handleEdit = (params: any) => {
		setChecked_out(params.row?.checked_out)
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
			renderCell: (params) => (
				<HandleEditButton handleEdit={handleEdit} params={params} />
			),
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
			headerName: 'Data retorn',
			width: 120,
		},
		{
			field: 'status',
			headerName: 'En prèstec',
			type: 'boolean',
			width: 120,
		},
	]

	const [estat, setEstat] = React.useState('')

	//Data
	const [data, setData] = useState<any>([])

	const [trigger, setTrigger] = useState(false)

	//Edit mode
	const [editMode, setEditMode] = useState(false)

	//Id selected to edit mode
	const [selectedId, setSelectedId] = React.useState('')

	//Form
	const [isOpenForm, setIsOpenForm] = React.useState(false)
	const [checked_out, setChecked_out] = React.useState<Date>(
		new Date('2023-01-01')
	)

	//Alert
	const [alert, setAlert] = React.useState<any>({})
	const { msg } = alert

	const handleChangeEstat = (event: SelectChangeEvent) => {
		setEstat(event.target.value as string)
	}

	const handleChangeChecked_out = (e: React.ChangeEvent<HTMLInputElement>) => {
		const date = new Date(e.target.value)
		const checkedOutDate = date.toISOString().substring(0, 10)
		setChecked_out(checkedOutDate)
	}

	const handleSubmitEdit = (e: any) => {
		e.preventDefault()

		const newObject: { checked_out: Date } = {
			checked_out,
		}
		if (selectedId) {
			loanService
				.updateCheckedout(selectedId, newObject)
				.then(() => {
					setAlert({
						msg: 'Prèstec actualitzat correctament, redirigint...',
						isError: false,
					})
					// Reset state
					setChecked_out(new Date('2023-01-01'))
					setTimeout(() => {
						// Reset states
						setAlert({})
						setChecked_out(new Date('2023-01-01'))
						setTrigger(!trigger)
						setEditMode(false)
						setIsOpenForm(!isOpenForm)
					}, 3000)
				})
				.catch((error: Error) => {
					console.log(error.stack)
					setAlert({
						msg: error.message,
						isError: true,
					})
					setTimeout(() => {
						// Reset states
						setAlert({})
						setChecked_out(new Date('2023-01-01'))
						setTrigger(!trigger)
						setEditMode(false)
						setIsOpenForm(!isOpenForm)
					}, 3000)
				})
		}
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
	}, [trigger])

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
										{editMode ? '✏️' : '➕'} Prèstecs
									</Typography>
									<Button
										onClick={() => {
											setIsOpenForm(false), setEditMode(false)
										}}
										sx={{ margin: '20px', marginRight: '100px' }}
										variant="contained"
									>
										<img src={iconBack} alt="tornar" />
									</Button>
								</Box>

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
											onChange={handleChangeChecked_out}
											value={editMode && checked_out ? checked_out : undefined}
											required
											id="input-checkedout"
											label="Data de retorn"
											variant="outlined"
											type="date"
											sx={{
												width: { xs: '92%', sm: '50%' },
												backgroundColor: editMode ? '#ead9c7' : undefined,
											}}
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
										onClick={handleSubmitEdit}
										sx={{
											marginBottom: '20px',
											marginTop: '20px',
											paddingLeft: '40px',
											paddingRight: '40px',
											height: '55px',
											width: { xs: '70%', sm: '40%' },
										}}
										variant="contained"
									>
										<img src={editMode ? iconEditWhite : iconNew} alt="nou" />
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
							</>
						)}
					</Container>
				</section>
			</Box>
		</>
	)
}
export default Loans
