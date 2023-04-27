import { Box, Container, SelectChangeEvent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar'

import { DataGrid, esES, GridColDef } from '@mui/x-data-grid'
import loanService from '../../../services/loanService'
import useAuth from '../../../hooks/useAuth'
import { ILoan } from '../../../interfaces/loans.interface'

//Data Grid
const columns: GridColDef[] = [
	{ field: 'idLoan', headerName: 'ID', width: 70 },
	{
		field: 'articleName',
		headerName: 'Nom article',
		width: 120,
		valueGetter: (params) => params.row?.article?.name,
	},
	{
		field: 'fee',
		headerName: 'Cost prèstec',
		type: 'number',
		width: 140,
	},
	{
		field: 'deposit',
		headerName: 'Diposit',
		type: 'number',
		width: 140,
	},
	{
		field: 'checked_in',
		headerName: 'Data inici',
		width: 130,
	},
	{
		field: 'checked_out',
		headerName: 'Data fi',
		width: 130,
	},
	{
		field: 'status',
		type: 'boolean',
		headerName: 'En prèstec',
		width: 120,
	},
]

const MyLoans = () => {
	//Data
	const [data, setData] = useState<any>([])
	const { auth } = useAuth()

	//Bring loans
	useEffect(() => {
		if (auth?.idUsers) {
			loanService
				.getLoansByUser(auth?.idUsers)
				.then((data: ILoan[]) => {
					setData(data)
				})
				.catch((error: Error) => {
					console.log(error)
				})
		} else {
			console.log('Not authenticated')
		}
	}, [])

	const [sortModel, setSortModel] = React.useState<any>([
		{
			field: 'idLoan',
			sort: 'desc',
		},
	])

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
