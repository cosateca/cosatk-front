import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'

const pages = [
	'Bricolatge i jardineria',
	'Criança',
	'Neteja i llar',
	'Oci i aventura',
	'Oficina',
	'Salut i cures',
]
// const pages = [
//   { text: 'Home', href: '/' },
//   { text: 'About', href: '/about' }
// ]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function MenuCatalogue() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<AppBar position="static">
			<Container maxWidth="lg">
				<Toolbar disableGutters>
					<Link to="/">
						<HomeIcon
							sx={{
								display: { xs: 'none', md: 'flex' },
								mr: 1,
								color: 'white',
							}}
						/>
					</Link>
					<Link to="/">
						<HomeIcon
							sx={{
								display: { xs: 'flex', md: 'none' },
								mr: 1,
								color: 'white',
							}}
						/>
					</Link>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default MenuCatalogue
