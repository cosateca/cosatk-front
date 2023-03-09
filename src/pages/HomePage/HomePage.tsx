import { Container, Button } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
  props : Props
}

const HomePage = (props: Props) => {
	return (
		<Container>
			<div className="App">
				<Button variant="contained">
					<Link to="/dashboard/loans">Accedeix</Link>
				</Button>
			</div>
		</Container>
	)
}

export default HomePage
