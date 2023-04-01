import {
	Box,
	Button,
	Container,
	FormControl,
	MenuItem,
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
	GridToolbarContainer,
	GridToolbarExport,
	esES,
} from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import iconSearch from '../../../assets/images/icono_buscar.svg'
import iconNew from '../../../assets/images/icono_add.svg'
import iconTrash from '../../../assets/images/icono_eliminar.svg'
import iconEdit from '../../../assets/images/icono_modificar.svg'
import iconBack from '../../../assets/images/icono_flecha_atras.svg'
import iconLoan from '../../../assets/images/icono_prestamos_mano.svg'
import iconEditWhite from '../../../assets/images/icono_modificar_white.svg'
import { IArticle, IArticleDto } from '../../../interfaces/article.interface'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router'
import articleService from '../../../services/articleService'
import { ICategory } from '../../../interfaces/category.interface'
import categoryService from '../../../services/categoryService'
import iconFolder from '../../../assets/images/icon_folder_upload.svg'
import FormAlert from '../../../components/FormAlert/FormAlert'

const Articles = () => {
	//Data Grid

	const handleEdit = (params: any) => {
		setName(params.row?.name)
		setSerial(params.row?.serial_number)
		setCondition(params.row?.condition)
		setBrand(params.row?.brand)
		setPricePaid(params.row?.price_paid)
		setValue(params.row?.value)
		setShownOnWeb(params.row?.shown_on_website)
		setLoanFee(params.row?.loan_fee)
		setLoanPeriod(params.row?.loan_period)
		setShortDesc(params.row?.short_description)
		setLongDesc(params.row?.long_description)
		setComponents(params.row?.components)
		setCareInfo(params.row?.care_information)
		setOwnedBy(params.row?.owned_by)
		setDonatedBy(params.row?.donated_by)
		setDeposit(params.row?.deposit)
		setCategoryId(params.row?.categoryIdCategory)
		setCategory(params.row?.categoryIdCategory)
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
	const navigate = useNavigate()
	const handleLoan2 = (params: any) => {
		if (params.row.is_on_loan === false) {
			return navigate(`/dashboard/newloan/${params.row?.code}`)
		}
	}
	const HandleLoanButton = ({ handleLoan, params }: any) => {
		const handleClickLoan = () => {
			handleLoan2(params)
		}

		return (
			<Button
				onClick={handleClickLoan}
				sx={{ display: 'flex', justifyContent: 'flex-start' }}
			>
				{params.row.is_on_loan ? '' : <img src={iconLoan} alt="prestar" />}
			</Button>
		)
	}

	const columns: GridColDef[] = [
		{
			field: 'remove',
			headerName: 'Eliminar',
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
						.forEach((c) => (thisRow[c.field] = params.row || ''))

					return navigate(`/dashboard/deletearticle/${params.row.code}`)
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
						<img src={iconTrash} alt="Eliminar" title="Eliminar" />
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
		{
			field: 'loan',
			headerName: 'Prèstec',
			sortable: false,
			width: 50,
			renderCell: (params) => (
				<HandleLoanButton handleEdit={handleLoan2} params={params} />
			),
		},
		{ field: 'code', headerName: 'Codi', width: 150 },
		{ field: 'name', headerName: 'Nom', width: 200 },
		{
			field: 'loan_fee',
			headerName: 'Preu',
			type: 'number',
			width: 90,
		},
		{
			field: 'loan_period',
			headerName: 'Periode',
			type: 'number',
			width: 90,
		},
		{
			field: 'is_on_loan',
			headerName: 'En prèstec',
			type: 'boolean',
			width: 90,
		},
	]

	//Data
	const [data, setData] = React.useState<any>([])
	const [data_categories, setData_categories] = React.useState<any>([])
	const [categories, setCategories] = useState<any>([])

	//Edit mode
	const [editMode, setEditMode] = useState(false)

	//Id selected to edit mode
	const [selectedId, setSelectedId] = useState('')

	//File
	const [image, setImage] = useState<File | null>(null)

	//Filter
	const [inputName, setInputName] = React.useState('')

	//New Article
	const [isOpenForm, setIsOpenForm] = React.useState(false)

	const [name, setName] = React.useState('')
	const [shortDesc, setShortDesc] = React.useState('')
	const [longDesc, setLongDesc] = React.useState('')
	const [serial, setSerial] = React.useState('')
	const [pricePaid, setPricePaid] = React.useState('0')
	const [value, setValue] = React.useState('0')
	const [loanFee, setLoanFee] = React.useState('0')
	const [deposit, setDeposit] = React.useState('0')
	const [loanPeriod, setLoanPeriod] = React.useState('0')
	const [components, setComponents] = React.useState('')
	const [careInfo, setCareInfo] = React.useState('')
	const [ownedBy, setOwnedBy] = React.useState('')
	const [donatedBy, setDonatedBy] = React.useState('')
	const [category, setCategory] = React.useState('')
	const [condition, setCondition] = React.useState('')
	const [brand, setBrand] = React.useState('')
	const [shownOnWeb, setShownOnWeb] = React.useState('true')
	const [categoryId, setCategoryId] = React.useState('0')

	//Trigger
	const [trigger, setTrigger] = React.useState(false)

	//Alert
	const [alert, setAlert] = useState<any>({})
	const { msg } = alert

	const handleClick = (e: any) => {
		e.preventDefault()
		setIsOpenForm(!isOpenForm)
	}

	const resetStates = () => {
		setName('')
		setShortDesc('')
		setLongDesc('')
		setSerial('')
		setPricePaid('0')
		setValue('0')
		setLoanFee('0')
		setLoanPeriod('0')
		setDeposit('0')
		setComponents('')
		setCareInfo('')
		setOwnedBy('')
		setDonatedBy('')
		setCategory('')
		setCondition('')
		setBrand('')
		setShownOnWeb('true')
		setImage(null)
		setCategoryId('0')
		setTrigger(!trigger)
	}

	const handleSubmitEdit = (e: any) => {
		e.preventDefault()

		if (name === '') {
			setAlert({
				msg: 'El camp del nom és obligatori',
				isError: true,
			})
			console.log('There is no name')
			return
		}

		if (category === '') {
			setAlert({
				msg: 'El camp de la categoria és obligatori',
				isError: true,
			})
			console.log('There is no category')
			return
		}

		const newObject: IArticleDto = {
			name,
			short_description: shortDesc,
			long_description: longDesc,
			serial_number: serial,
			price_paid: pricePaid,
			deposit,
			value,
			loan_fee: loanFee,
			loan_period: loanPeriod,
			components,
			care_information: careInfo,
			owned_by: ownedBy,
			donated_by: donatedBy,
			condition,
			brand,
			categoryIdCategory: categoryId,
		}
		if (selectedId) {
			articleService
				.updateArticle(selectedId, newObject)
				.then(() => {
					setAlert({
						msg: 'Article actualitzat correctament, redirigint...',
						isError: false,
					})

					setTimeout(() => {
						// Reset states
						setAlert({})
						resetStates()
						setTrigger(!trigger)
						setEditMode(false)

						setIsOpenForm(!isOpenForm)
					}, 3000)
				})
				.catch((error: Error) => {
					console.log(error)
					setAlert({
						msg: 'Error inesperat, redirigint...',
						isError: true,
					})
					setTimeout(() => {
						// Reset states
						setAlert({})
						resetStates()
						setTrigger(!trigger)
						setEditMode(false)
						setIsOpenForm(!isOpenForm)
					}, 3000)
				})
		}
	}

	const handleSubmitNew = (e: any) => {
		e.preventDefault()

		if (name === '') {
			setAlert({
				msg: 'El camp del nom és obligatori',
				isError: true,
			})
			console.log('There is no name')
			return
		}

		if (category === '') {
			setAlert({
				msg: 'El camp de la categoria és obligatori',
				isError: true,
			})
			console.log('There is no category')
			return
		}

		if (!image) {
			setAlert({
				msg: 'La imatge és necessària',
				isError: true,
			})
			console.log('There is no image')
			return
		}

		const formData = new FormData()
		formData.append('image', image)

		const newObject: IArticle = {
			code: nanoid(10),
			name,
			short_description: shortDesc,
			long_description: longDesc,
			serial_number: serial,
			price_paid: pricePaid,
			deposit,
			value,
			loan_fee: loanFee,
			loan_period: loanPeriod,
			components,
			care_information: careInfo,
			owned_by: ownedBy,
			donated_by: donatedBy,
			condition,
			brand,
			shown_on_website: shownOnWeb,
			categoryIdCategory: categoryId,
		}

		articleService
			.createArticle(newObject, image)
			.then((data) => {
				data && console.log('Article enviat correctament')
				setAlert({
					msg: 'Article introduït correctament, seràs redirigit al llistat...',
					isError: false,
				})
			})
			.catch((error) => {
				setAlert({
					msg:
						error == 'Error: Payload Too Large'
							? 'Error, arxiu excedeix el limit de 3 MB'
							: error,
					isError: true,
				})
			})

		resetStates()

		setTimeout(() => {
			setAlert({})
			setIsOpenForm(!isOpenForm)
		}, 4000)
	}

	const handleChangeCategory = (event: SelectChangeEvent) => {
		setCategoryId(event.target.value)
		setCategory(event.target.value)
	}

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedImage = event.target.files ? event.target.files[0] : null
		setImage(selectedImage)
	}

	//Bring categories
	useEffect(() => {
		categoryService
			.getData()
			.then((data_categories) => {
				setCategories(data_categories)
			})
			.catch((error: Error) => {
				console.log(error)
			})
	}, [])

	//Bring articles
	useEffect(() => {
		articleService
			.getArticles()
			.then((data: IArticle[]) => {
				setData(data)
			})
			.catch((error: Error) => {
				console.log(error)
			})
	}, [trigger])

	//Material Custom Toolbar
	function CustomToolbar() {
		return (
			<GridToolbarContainer>
				<GridToolbarExport />
			</GridToolbarContainer>
		)
	}

	const handleFilter = async () => {
		if (inputName) {
			articleService
				.getArticlesByName(inputName)
				.then((data: IArticle[]) => {
					setData(data)
				})
				.catch((error: Error) => {
					console.log(error)
				})
		} else {
			articleService
				.getArticles()
				.then((data: IArticle[]) => {
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
											{editMode ? '✏️' : '➕'} Article
										</Typography>
										<Button
											onClick={() => {
												setIsOpenForm(false), setEditMode(false)
											}}
											sx={{ margin: '20px', marginRight: '100px' }}
											variant="contained"
										>
											<img src={iconBack} alt="tornar" title="Tornar" />
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
												defaultValue={editMode && name ? name : undefined}
												required
												id="input-nom"
												label="Nom"
												variant="outlined"
												sx={{
													width: {
														xs: '92%',
														sm: '50%',
														backgroundColor: editMode ? '#ead9c7' : undefined,
													},
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
													width: {
														xs: '92%',
														sm: '40%',
														backgroundColor: editMode ? '#ead9c7' : undefined,
													},
												}}
												id="selectcategoria"
												value={category}
												label="Categoria"
												onChange={handleChangeCategory}
											>
												<MenuItem value="">Selecciona categoria *</MenuItem>
												{categories &&
													categories.map((category: ICategory, index: any) => (
														<MenuItem key={index} value={category.idCategory}>
															{category.category_name}
														</MenuItem>
													))}
											</Select>
											<TextareaAutosize
												onChange={(e) => setShortDesc(e.target.value)}
												defaultValue={
													editMode && shortDesc ? shortDesc : undefined
												}
												aria-label="empty textarea"
												placeholder="Descripció curta"
												minRows={2}
												maxLength={250}
												style={{
													width: '91%',
													backgroundColor: editMode ? '#ead9c7' : undefined,
												}}
											/>
											<TextareaAutosize
												onChange={(e) => setLongDesc(e.target.value)}
												defaultValue={
													editMode && longDesc ? longDesc : undefined
												}
												aria-label="empty textarea"
												placeholder="Descripció larga"
												minRows={6}
												maxLength={1490}
												style={{
													width: '91%',
													backgroundColor: editMode ? '#ead9c7' : undefined,
												}}
											/>
											<TextField
												onChange={(e) => setSerial(e.target.value)}
												defaultValue={editMode && serial ? serial : undefined}
												id="input-serial"
												label="Núm. Serie"
												variant="outlined"
												sx={{
													width: {
														xs: '50%',
														backgroundColor: editMode ? '#ead9c7' : undefined,
													},
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setBrand(e.target.value)}
												defaultValue={editMode && brand ? brand : undefined}
												id="input-brand"
												label="Marca"
												variant="outlined"
												sx={{
													width: {
														xs: '40%',
														backgroundColor: editMode ? '#ead9c7' : undefined,
													},
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e: any) => setPricePaid(e.target.value)}
												defaultValue={
													editMode && pricePaid ? pricePaid : undefined
												}
												onKeyPress={(e: any) => {
													const charCode = e.which ? e.which : e.keyCode
													if (
														charCode > 31 &&
														(charCode < 48 || charCode > 57)
													) {
														e.preventDefault()
													}
												}}
												id="input-preupagat"
												label="Preu pagat"
												variant="outlined"
												type="number"
												InputProps={{ inputProps: { min: 0, max: 1000 } }}
												sx={{
													width: {
														xs: '92%',
														sm: '17%',
														backgroundColor: editMode ? '#ead9c7' : undefined,
													},
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e: any) => setDeposit(e.target.value)}
												defaultValue={editMode && deposit ? deposit : undefined}
												onKeyPress={(e: any) => {
													const charCode = e.which ? e.which : e.keyCode
													if (
														charCode > 31 &&
														(charCode < 48 || charCode > 57)
													) {
														e.preventDefault()
													}
												}}
												id="input-deposit"
												label="Diposit"
												variant="outlined"
												type="number"
												InputProps={{ inputProps: { min: 0, max: 1000 } }}
												sx={{
													width: {
														xs: '92%',
														sm: '17%',
														backgroundColor: editMode ? '#ead9c7' : undefined,
													},
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>

											<TextField
												onChange={(e: any) => setValue(e.target.value)}
												defaultValue={editMode && value ? value : undefined}
												onKeyPress={(e: any) => {
													const charCode = e.which ? e.which : e.keyCode
													if (
														charCode > 31 &&
														(charCode < 48 || charCode > 57)
													) {
														e.preventDefault()
													}
												}}
												id="input-valor"
												label="Valor"
												variant="outlined"
												type="number"
												InputProps={{ inputProps: { min: 0, max: 1000 } }}
												sx={{
													width: {
														xs: '92%',
														sm: '16.5%',
														backgroundColor: editMode ? '#ead9c7' : undefined,
													},
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>

											<TextField
												onChange={(e: any) => setLoanFee(e.target.value)}
												defaultValue={editMode && loanFee ? loanFee : undefined}
												onKeyPress={(e: any) => {
													const charCode = e.which ? e.which : e.keyCode
													if (
														charCode > 31 &&
														(charCode < 48 || charCode > 57)
													) {
														e.preventDefault()
													}
												}}
												id="input-preu"
												label="Preu"
												variant="outlined"
												type="number"
												InputProps={{ inputProps: { min: 0, max: 1000 } }}
												sx={{
													width: {
														xs: '92%',
														sm: '16%',
														backgroundColor: editMode ? '#ead9c7' : undefined,
													},
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>

											<TextField
												onChange={(e: any) => {
													setLoanPeriod(e.target.value)
												}}
												defaultValue={
													editMode && loanPeriod ? loanPeriod : undefined
												}
												onKeyPress={(e: any) => {
													const charCode = e.which ? e.which : e.keyCode
													if (
														charCode > 31 &&
														(charCode < 48 || charCode > 57)
													) {
														e.preventDefault()
													}
												}}
												id="input-period"
												label="Periode prèstec (dies)"
												variant="outlined"
												type="number"
												InputProps={{
													inputProps: { min: 0, max: 1000 },
												}}
												sx={{
													width: {
														xs: '92%',
														sm: '18%',
														backgroundColor: editMode ? '#ead9c7' : undefined,
													},
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>

											<TextField
												onChange={(e) => setComponents(e.target.value)}
												defaultValue={
													editMode && components ? components : undefined
												}
												id="input-components"
												label="Components"
												variant="outlined"
												sx={{
													width: {
														xs: '92%',
														sm: '40%',
														backgroundColor: editMode ? '#ead9c7' : undefined,
													},
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setCareInfo(e.target.value)}
												defaultValue={
													editMode && careInfo ? careInfo : undefined
												}
												id="input-infoCures"
												label="Info de cures"
												variant="outlined"
												sx={{
													width: {
														xs: '92%',
														sm: '50%',
														backgroundColor: editMode ? '#ead9c7' : undefined,
													},
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setOwnedBy(e.target.value)}
												defaultValue={editMode && ownedBy ? ownedBy : undefined}
												id="input-ownedBy"
												label="Propietari"
												variant="outlined"
												sx={{
													width: {
														xs: '92%',
														sm: '40%',
														backgroundColor: editMode ? '#ead9c7' : undefined,
													},
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setDonatedBy(e.target.value)}
												defaultValue={
													editMode && donatedBy ? donatedBy : undefined
												}
												id="input-donatedBy"
												label="Donador"
												variant="outlined"
												sx={{
													width: {
														xs: '92%',
														sm: '50%',
														backgroundColor: editMode ? '#ead9c7' : undefined,
													},
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>
											<TextField
												onChange={(e) => setCondition(e.target.value)}
												defaultValue={
													editMode && condition ? condition : undefined
												}
												id="input-condition"
												label="Condició"
												variant="outlined"
												sx={{
													width: {
														xs: '92%',
														sm: '40%',
														backgroundColor: editMode ? '#ead9c7' : undefined,
													},
												}}
												InputLabelProps={{
													style: {
														color: '#222222',
													},
												}}
											/>

											{editMode ? (
												''
											) : (
												<Button
													sx={{
														width: { xs: '92%', sm: '92%' },
														paddingTop: '10px',
														paddingBottom: '10px',
													}}
													variant="contained"
													component="label"
												>
													<img src={iconFolder} alt="carpeta" title="Imatge" />
													&nbsp; Imatge *
													<input
														onChange={handleFileSelect}
														type="file"
														id="file_input"
														accept="image/*"
														hidden
													/>
												</Button>
											)}
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
											onClick={editMode ? handleSubmitEdit : handleSubmitNew}
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
											<img
												src={editMode ? iconEditWhite : iconNew}
												alt="nou"
												title="Nou"
											/>
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
											gap: '20px',
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
												onChange={(e) => {
													setInputName(e.target.value)
												}}
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
											<Button
												onClick={handleFilter}
												sx={{
													bgcolor: '#D9D9D9',
													height: '55px',
												}}
												variant="contained"
											>
												<img src={iconSearch} alt="cerca" title="Cerca" />
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
											<img src={iconNew} alt="nou" title="Nou" />
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
											getRowId={(row: any) => row.idArticle}
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
								</>
							)}
						</Box>
					</Container>
				</section>
			</Box>
		</>
	)
}

export default Articles
