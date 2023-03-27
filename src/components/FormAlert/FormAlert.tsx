import { Box } from '@mui/material'

const FormAlert = ({ alert }: any) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				bgcolor: alert.isError ? 'orange' : '#50C878',
				padding: '10px',
				width: '100%',
			}}
			role="alert"
		>
			{alert.msg}
		</Box>
	)
}

export default FormAlert
