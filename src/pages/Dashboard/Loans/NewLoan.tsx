import { Button, FormControl, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import iconSearch from '../../../assets/images/icono_buscar.svg'
import { useParams } from 'react-router'
import Navbar from '../../../components/Navbar/Navbar'
import {
	DataGrid,
	GridApi,
	GridCellValue,
	GridColDef,
	GridRenderCellParams,
} from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllUsers, getUsersByName } from '../../../services/userService'
import { IUser } from '../../../interfaces/user.interface'
import loanService from '../../../services/loanService'

//Data Grid
const columns: GridColDef[] = [
	{
		field: 'loan',
		headerName: 'Prèstec',
		sortable: false,
		width: 50,
		renderCell: (params: GridRenderCellParams<any>) => {
			const { id } = useParams()
			const navigate = useNavigate()
			const onClick = (e: any) => {
				e.stopPropagation()

				const api: GridApi = params.api
				const thisRow: Record<string, GridCellValue> = {}

				api
					.getAllColumns()
					.filter((c) => c.field !== '__check__' && !!c)
					.forEach(
						(c) =>
							(thisRow[c.field] = params.getValue(params.id, c.field) || '')
					)

				return navigate(`/dashboard/confirmloan/${thisRow.idUsers}/${id}`)
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
					💾
				</Button>
			)
		},
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
]

const NewLoan = () => {
	const { id } = useParams()

	const [data, setData] = useState<any>([])
	const [name, setName] = useState<any>('')

	//Bring users
	useEffect(() => {
		getAllUsers()
			.then((data: IUser[]) => {
				setData(data)
			})
			.catch((error: Error) => {
				console.log(error)
			})
	}, [])

	const handleFilter = async () => {
		if (name) {
			getUsersByName(name)
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
						<Typography variant="h1">💾 Prèstec</Typography>

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
									onChange={(e) => {
										setName(e.target.value)
									}}
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
									onClick={handleFilter}
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
									<p>
										Codi article seleccionat: <strong>{id}</strong>
									</p>
								</Box>
							</FormControl>
						</Box>
						<Box>
							<Typography variant="h2" color="initial">
								Per crear un nou prèstec associat a l&apos;article seleccionat
								cerca un usuari i clica en la icona de desar
							</Typography>

							<Box sx={{ height: { xs: 460, xl: 600 }, width: '100%' }}>
								<DataGrid
									rows={data}
									getRowId={(row: any) => row.idUsers}
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
