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
			fontWeight: 400,
			fontSize: '1.7rem',
			lineHeight: '5rem',
		},
		h2: {
			fontWeight: 200,
			fontSize: '1.1rem',
			lineHeight: '3rem',
		},
		h5: {
			fontWeight: 200,
			fontSize: '.8rem',
			lineHeight: '3rem',
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				style: {
					// textTransform: 'none',
					// borderRadius: '0px',
					// marginTop: '20px',
				},
			},
		},
		MuiInput: {
			defaultProps: {
				style: {},
			},
		},
		MuiInputLabel: {
			defaultProps: {
				style: {
					// marginBottom: '-20px',
					// marginTop: '20px',
					// fontSize: '1.2rem',
					// color: 'white',
					// fontWeight: 'bold',
				},
			},
		},
	},
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }: any) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
