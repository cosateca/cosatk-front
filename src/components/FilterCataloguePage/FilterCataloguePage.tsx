import { Box, Button, FormControl, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import iconSearch from '../../assets/images/icono_buscar.svg'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

const FilterCataloguePage = (props: Props) => {
  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '20px',
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
			value={undefined}
			label="Estat"
			onChange={undefined}
		>
			<MenuItem value="">Prèstec en curs</MenuItem>
			<MenuItem value={10}>Sense préstec</MenuItem>
		</Select>
		<Button
			sx={{
				bgcolor: '#D9D9D9',
				height: '55px',
			}}
			variant="contained"
		>
			<img src={iconSearch} alt="cerca" title='Cerca'/>
		</Button>
	</FormControl>
    </Box>
  )
}

export default FilterCataloguePage