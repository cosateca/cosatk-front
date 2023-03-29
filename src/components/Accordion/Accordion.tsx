import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark'
			? 'rgba(255, 255, 255, .05)'
			: 'rgba(0, 0, 0, .03)',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export default function CustomizedAccordions() {
	const [expanded, setExpanded] = React.useState<string | false>('panel1')

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false)
		}

	return (
		<Box>
			<Accordion
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
			>
				<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
					<Typography>1. Fes-te usuària</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Enregistra’t a través del web o presencialment. Un cop et registrada
						com a usuaria, podràs gestionar els teus prèstecs.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}
			>
				<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
					<Typography>2. Consulta el catàleg d’objectes</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Consultant el catàleg online podràs saber si l’objecte està
						disponible fent click al detall de l’objecte.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel3'}
				onChange={handleChange('panel3')}
			>
				<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
					<Typography>
						3. Vine a la biblioteca i recull l’objecte que necessitis!
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Consulta l’horari d’obertura i vine a recollir l’article que
						necessitis.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel4'}
				onChange={handleChange('panel4')}
			>
				<AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
					<Typography>4. Vols donar algún objecte?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						La biblioteca de les coses accepta donacions o prèstecs temporals,
						principalment d’objectes poc comuns a les llars i que poden ser
						d’utilitat a les veines.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel5'}
				onChange={handleChange('panel5')}
			>
				<AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
					<Typography>5. Retorna’l abans de la data limit</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Assegura’t de retornar-lo net i en les mateixes condicions que el
						vas recollir per tal que la pròxima persona que el necessiti el
						pugui utilitzar!
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	)
}
