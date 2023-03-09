import { ThemeProvider, createTheme } from '@mui/material'
import { themeVars } from './themeVars.enum'

type ThemeProp = {
	children: JSX.Element
}

const theme = createTheme({
	palette: {
		primary: {
			main: themeVars.BLUECOLOR,
		},
		secondary: {
			main: themeVars.GRAYCOLOR,
		},
		error: {
			main: themeVars.ERRORCOLOR,
		},
	},
	typography: {
		h1: {
			fontWeight: 600,
			fontSize: '3.7rem',
		},
		h2: {
			fontWeight: 600,
			fontSize: '3.1rem',
		},
		h5: {
			fontWeight: 400,
			fontSize: '1rem',
		},
		fontFamily: themeVars.FONT_GLOBAL,
	},
	components: {
		MuiButton: {
			defaultProps: {
				style: {
					textTransform: 'none',
					borderRadius: '0.5em',
					marginTop: '20px',
				},
			},
		},
		MuiInput: {
			defaultProps: {
				style: {
					marginTop: '20px',
				},
			},
		},
		MuiInputLabel: {
			defaultProps: {
				style: {
					marginBottom: '-20px',
					marginTop: '20px',
					fontSize: '1.2rem',
					color: 'white',
					fontWeight: 'bold',
				},
			},
		},
	},
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }: any) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
