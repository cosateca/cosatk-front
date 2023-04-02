import iconFolder from '../../assets/images/icon_folder_upload.svg'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { Box } from '@mui/material'

const Input = styled('input')({
	display: 'none',
})

export default function Upload({ getUploadedFile }: any) {
	const onChange = (e: any) => {
		e.preventDefault()
		let files
		if (e.dataTransfer) {
			files = e.dataTransfer.files
		} else if (e.target) {
			files = e.target.files
		}
		if (files.length === 0) {
			return alert('Please select a file.')
		}
		const reader = new FileReader()
		reader.onload = () => {
			getUploadedFile(reader.result)
		}
		reader.readAsDataURL(files[0])
	}
	return (
		<Box>
			<label htmlFor="contained-button-file">
				<Input
					accept="image/*"
					id="contained-button-file"
					multiple
					type="file"
					onChange={onChange}
				/>
				<Button
					sx={{
						paddingX: '102px',
						paddingY: '8px',
					}}
					variant="contained"
					component="span"
				>
					<img src={iconFolder} alt="carpeta" title="Imatge" />
					&nbsp; Imatge *
				</Button>
			</label>
		</Box>
	)
}
