import { Box } from '@mui/material'

const FormAlert = ({ alert }: any) => {
	return (
		<Box sx={{ bgcolor: 'orange', padding: '3px' }} role="alert">
			{alert.msg}
		</Box>
	)
}

export default FormAlert
