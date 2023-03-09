import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'

type Props = {}

const Articles = (props: Props) => {
	return (
		<>
			<Box display={{ xs: 'block', sm: 'flex' }}>
				<Navbar />
				<div>Articles</div>
			</Box>
		</>
	)
}

export default Articles
