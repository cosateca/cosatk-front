import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'

type Props = {}

const Categories = (props: Props) => {
	return (
		<>
			<Box display={{ xs: 'block', sm: 'flex' }}>
				<Navbar />
				<div>Categories</div>
			</Box>
		</>
	)
}

export default Categories
