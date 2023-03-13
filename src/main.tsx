import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ThemeConfig } from './config/theme.config'
import './styles/index.css'
import './styles/normalize.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
		<ThemeConfig>
			<App />
		</ThemeConfig>
		</BrowserRouter>
	</React.StrictMode>
)
