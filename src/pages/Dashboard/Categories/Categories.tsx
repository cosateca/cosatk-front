import {
	Autocomplete,
	Box,
	Button,
	Container,
	FormControl,
	Modal,
	TextField,
	Typography,
} from '@mui/material'
import {
	DataGrid,
	GridColDef,
	GridApi,
	GridCellValue,
	GridRenderCellParams,
} from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import iconSearch from '../../../assets/images/icono_buscar.svg'
import iconNew from '../../../assets/images/icono_add.svg'
import iconTrash from '../../../assets/images/icono_eliminar.svg'
import iconEdit from '../../../assets/images/icono_modificar.svg'
import iconBack from '../../../assets/images/icono_flecha_atras.svg'

import { ICategory } from '../../../interfaces/category.interface'
import categoryService from '../../../services/categoryService'
import { useParams, useSearchParams } from 'react-router-dom'
import {deleteCatagoryRequest, getCategoryRequest} from '../../../services/category/categoryService'

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
	{ field: 'idCategory', headerName: 'ID', width: 70 },
	{ field: 'category_name', headerName: 'Nom', width: 160 },
]

const Categories = (props: Props) => {
	//Data
	const [data, setData] = React.useState<ICategory[]>([])
	const [trigger, setTrigger] = React.useState(false)
	
	const handleDelete = async (idCategory:ICategory)=>{
        try{
         const response = await  deleteCatagoryRequest(idCategory)
         setData(data.filter(data =>data.idCategory !== 0))
         console.log(response)
        }catch(error){
            console.error(error)
        }
	}


	//Modal
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	//New category
	const [isOpenForm, setIsOpenForm] = React.useState(false)
	const [category_name, setCategory_name] = React.useState('')

	const handleClick = (e: any) => {
		e.preventDefault()
		setIsOpenForm(!isOpenForm)
	}
	const handleSubmit = (e: any) => {
		e.preventDefault()

		if (category_name === '') {
			return
		}
		const newObject: ICategory = {
			category_name,
		}
		categoryService
			.postData(newObject)
			.then(() => {
				console.log('Category created')
			})
			.catch((error: Error) => {
				console.log(error)
			})

		// Reset states
		setCategory_name('')
		setTrigger(!trigger)
		setIsOpenForm(!isOpenForm)
	}

	useEffect(() => {
		categoryService
			.getData()
			.then((data: ICategory[]) => {
				setData(data)
			})
			.catch((error: Error) => {
				console.log(error)
			})
	}, [trigger])

	
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
						<Typography variant="h1">CATEGORIES</Typography>
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
											Categoria
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
												onChange={(e) => setCategory_name(e.target.value)}
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
											<Autocomplete
											id="free-solo-demo"
											freeSolo
											options={data.map((option) => option.category_name)}
											renderInput={(params) => (
											<TextField {...params} 
											label="Cercar per nom" 
											margin="normal" 
											variant="outlined"
											
											sx={{ width: { xs: '200px' }, marginBottom:'32px' }}
											InputLabelProps={{ style: {color: '#222222',},}}
											/>
											)}
											/>
											<Button
												sx={{
													bgcolor: '#D9D9D9',
													height: '95px',
													marginBottom:'20px'
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
											getRowId={(row: any) => row.idCategory}
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

export default Categories
