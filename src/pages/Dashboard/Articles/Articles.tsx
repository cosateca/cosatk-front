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
import {
	DataGrid,
	GridColDef,
	GridApi,
	GridCellValue,
	GridRenderCellParams,
	GridRowModel,
} from '@mui/x-data-grid'
import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import iconSearch from '../../../assets/images/icono_buscar.svg'
import iconNew from '../../../assets/images/icono_add.svg'
import iconTrash from '../../../assets/images/icono_eliminar.svg'
import iconEdit from '../../../assets/images/icono_modificar.svg'
import iconBack from '../../../assets/images/icono_flecha_atras.svg'
import iconLoan from '../../../assets/images/icono_prestamos_mano.svg'
import { IArticle } from '../../../interfaces/article.interface'
import { nanoid } from 'nanoid'
import { redirect, useNavigate } from 'react-router'

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
	{
		field: 'loan',
		headerName: 'Prèstec',
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

				return navigate(`/dashboard/newloan/${thisRow.id}`)
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
					<img src={iconLoan} alt="prestar" />
				</Button>
			)
		},
	},
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'name', headerName: 'Nom', width: 130 },
	{
		field: 'loanFee',
		headerName: 'Preu',
		type: 'number',
		width: 90,
	},
	{
		field: 'loanPeriod',
		headerName: 'Periode',
		type: 'number',
		width: 90,
	},
]

const Articles = (props: Props) => {
	const [data, setData] = React.useState<any>([])

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

	const [id, setId] = React.useState('')
	const [name, setName] = React.useState('')
	const [shortDesc, setShortDesc] = React.useState('')
	const [longDesc, setLongDesc] = React.useState('')
	const [serial, setSerial] = React.useState('')
	const [pricePaid, setPricePaid] = React.useState(0)
	const [value, setValue] = React.useState(0)
	const [loanFee, setLoanFee] = React.useState(0)
	const [loanPeriod, setLoanPeriod] = React.useState(0)
	const [components, setComponents] = React.useState('')
	const [careInfo, setCareInfo] = React.useState('')
	const [ownedBy, setOwnedBy] = React.useState('')
	const [donatedBy, setDonatedBy] = React.useState('')
	const [category, setCategory] = React.useState('')
	const [condition, setCondition] = React.useState('')
	const [brand, setBrand] = React.useState('')
	const [shownOnWeb, setShownOnWeb] = React.useState('false')

	const handleClick = (e: any) => {
		e.preventDefault()
		setIsOpenForm(!isOpenForm)
	}
	const handleSubmit = (e: any) => {
		e.preventDefault()

		if (name === '') {
			return
		}

		const newObject: IArticle = {
			id: nanoid(),
			name,
			shortDesc,
			longDesc,
			serial,
			pricePaid,
			value,
			loanFee,
			loanPeriod,
			components,
			careInfo,
			ownedBy,
			donatedBy,
			condition,
			brand,
			shownOnWeb,
		}
		setData([...data, newObject])

		// Resetear los estados
		setId('')
		setName('')
		setShortDesc('')
		setLongDesc('')
		setSerial('')
		setPricePaid(0)
		setValue(0)
		setLoanFee(0)
		setLoanPeriod(0)
		setComponents('')
		setCareInfo('')
		setOwnedBy('')
		setDonatedBy('')
		setCategory('')
		setCondition('')
		setBrand('')
		setShownOnWeb('false')

		setIsOpenForm(!isOpenForm)
	}
	const handleChangeCategory = (event: SelectChangeEvent) => {
		setCategory(event.target.value as string)
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
											✏️Article
										</Typography>
										<Button
											onClick={() => setIsOpenForm(false)}
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
												onChange={(e) => setName(e.target.value)}
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
												onChange={(e) => setShortDesc(e.target.value)}
												aria-label="empty textarea"
												placeholder="Descripció curta"
												minRows={2}
												maxLength={300}
												style={{ width: '91%' }}
											/>
											<TextareaAutosize
												onChange={(e) => setLongDesc(e.target.value)}
												aria-label="empty textarea"
												placeholder="Descripció larga"
												minRows={6}
												maxLength={2000}
												style={{ width: '91%' }}
											/>
											<TextField
												onChange={(e) => setSerial(e.target.value)}
												id="input-serial"
												label="Núm. Serie"
												variant="outlined"
												sx={{ width: { xs: '50%' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setBrand(e.target.value)}
												id="input-brand"
												label="Marca"
												variant="outlined"
												sx={{ width: { xs: '40%' } }}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setPricePaid(Number(e.target.value))}
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
												onChange={(e) => setValue(Number(e.target.value))}
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
												onChange={(e) => setLoanFee(Number(e.target.value))}
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
												onChange={(e) => setLoanPeriod(Number(e.target.value))}
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
												onChange={(e) => setComponents(e.target.value)}
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
												onChange={(e) => setCareInfo(e.target.value)}
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
												onChange={(e) => setOwnedBy(e.target.value)}
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
												onChange={(e) => setDonatedBy(e.target.value)}
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
												onChange={(e) => setCondition(e.target.value)}
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
											<FormLabel id="radio-btns-shown">
												Mostrar al web?
											</FormLabel>
											<RadioGroup
												onChange={(e) => setShownOnWeb(e.target.value)}
												row
												aria-labelledby="radio-btns-shown"
												defaultValue="true"
												name="radio-buttons-group"
											>
												<FormControlLabel
													value="true"
													control={<Radio />}
													label="Públic"
												/>
												<FormControlLabel
													value="false"
													control={<Radio />}
													label="Privat"
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
											onClick={handleSubmit}
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
											height: { xs: 460, xl: 600 },
											width: '100%',
											marginTop: '20px',
										}}
									>
										<DataGrid
											rows={data}
											columns={columns}
											disableSelectionOnClick
										/>
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
