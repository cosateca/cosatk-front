import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeConfig } from './config/theme.config'
import './styles/index.css'
import './styles/normalize.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeConfig>
			<App />
		</ThemeConfig>
	</React.StrictMode>
)
