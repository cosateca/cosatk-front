import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'

type Props = {}

const Loans = (props: Props) => {
	return (
		<>
			<Box display={{ xs: 'block', sm: 'flex' }}>
				<Navbar />
				<div>Prèstecs</div>
			</Box>
		</>
	)
}

export default Loans
