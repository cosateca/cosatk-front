import React, { useRef, useState } from 'react'
import Cropper from 'react-cropper'
import Skeleton from '@mui/material/Skeleton'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'

import 'cropperjs/dist/cropper.css'

interface HTMLImageElementWithCropper extends HTMLImageElement {
	cropper: any
}

export default function CropperDemo({ src, getCroppedFile }: any) {
	const cropperRef = useRef<HTMLImageElementWithCropper>(null)
	const [loading, setLoading] = useState(true)
	const [scaleX, setScaleX] = useState(1)
	const [scaleY, setScaleY] = useState(1)

	const handleClick = () => {
		const imageElement = cropperRef?.current
		const cropper = imageElement?.cropper
		const img = cropper.getCroppedCanvas().toDataURL()
		getCroppedFile(img)
	}
	const rotate = () => {
		const imageElement = cropperRef?.current
		const cropper = imageElement?.cropper
		cropper.rotate(90)
	}
	const flip = (type: any) => {
		const imageElement = cropperRef?.current
		const cropper = imageElement?.cropper
		if (type === 'h') {
			cropper.scaleX(scaleX === 1 ? -1 : 1)
			setScaleX(scaleX === 1 ? -1 : 1)
		} else {
			cropper.scaleY(scaleY === 1 ? -1 : 1)
			setScaleY(scaleY === 1 ? -1 : 1)
		}
	}
	return (
		<>
			{loading && (
				<Skeleton variant="rectangular" width={'100%'} height={400} />
			)}
			<Box display={'flex'} justifyContent={'flex-end'} mb={1}>
				<ButtonGroup disableElevation variant="contained">
					<Button onClick={rotate}>Rotar</Button>
					<Button onClick={() => flip('h')}>Reflexar H</Button>
					<Button onClick={() => flip('v')}>Reflexar V</Button>
				</ButtonGroup>
			</Box>

			<Cropper
				src={src}
				style={{ height: 400, width: '100%' }}
				// Cropper.js options
				aspectRatio={1 / 1}
				guides={true}
				ready={() => {
					setLoading(false)
				}}
				ref={cropperRef}
			/>
			<Button
				sx={{
					float: 'right',
					mt: 1,
				}}
				onClick={handleClick}
				autoFocus
				color="success"
				variant="contained"
			>
				Ok
			</Button>
		</>
	)
}
