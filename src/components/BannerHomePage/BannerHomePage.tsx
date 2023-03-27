import { Box } from '@mui/material'
import imagetools from '../../assets/images/banner/component22.svg'
import imagebaby from '../../assets/images/banner/component23.svg'
import imagehandicap from '../../assets/images/banner/component24.svg'
import imagebike from '../../assets/images/banner/component25.svg'
import imagepet from '../../assets/images/banner/component26.svg'
import imagebbq from '../../assets/images/banner/component27.svg'
import imageartist from '../../assets/images/banner/component28.svg'
import imageprueba from '../../assets/images/banner/component29.svg'
import React from 'react'

type Props = {}

const BannerHomePage = (props: Props) => {
  return (
    <Box
			sx={{
				backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/08/19/05/23/banner-895571_1280.jpg)',
				width: '100%',
				height: '250px',
				display: 'flex',
				flexDirection: 'row',
				flexWrap: { xs: 'wrap', sm: 'wrap', md: 'nowrap', lg: 'nowrap' },
				justifyContent: 'space-evenly',
				alignItems: 'center',
				marginBottom: '100px',
			}}
			>
				<Box
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					flexWrap: { xs: 'wrap', sm: 'wrap', md: 'nowrap', lg: 'nowrap' },
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
				>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagetools}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagebaby}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagehandicap}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagebike}
					/>
				</Box>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						flexWrap: { xs: 'wrap', sm: 'wrap', md: 'nowrap', lg: 'nowrap' },
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagepet}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagebbq}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imageartist}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imageprueba}
					/>
				</Box>
			</Box>
  )
}

export default BannerHomePage