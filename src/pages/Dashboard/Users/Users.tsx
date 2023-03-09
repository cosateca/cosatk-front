import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'

type Props = {}

const Users = (props: Props) => {
	return (
		<>
			<Box display={{ xs: 'block', sm: 'flex' }}>
				<Navbar />
				<div>Users</div>
			</Box>
		</>
	)
}

export default Users
