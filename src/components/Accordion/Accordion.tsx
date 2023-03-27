import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import ArrowForwardIosSharpIcon from '../../assets/images/icono_mayor_que.svg';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

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
}));

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
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>1. Fes-te usuària</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Amb el carnet d’usuària que us donarem, podreu gestionar els vostres préstecs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>2. Consulta el catàleg d`objectes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Si alguna cosa t’interessa pots contactar-nos per demanar una reserva a través del nostre correu (cosatk@gmail.com)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>3. Vine a la biblioteca i recull l´objecte que necessitis!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Pagaràs un preu simbòlic pel préstec de l’objecte (d’1 a 5€) i tindràs dret al seu ús durant una setmana.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>4. Dóna-li vida a casa teva!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Has viscut alguna anècdota mentre el feies servir? Tens algun comentari a afegir que pot ser útil per la pròxima persona que l’utilitzi? Escriu la teva experiència al Twitter afegint #codi_QR_de_l’objecte i #bibliotecadelescoses
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>5. Retorna’l abans de la data limit</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Assegura’t de retornar-lo net i en les mateixes condicions que el vas recollir per tal que la pròxima persona que el necessiti el pugui utilitzar!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}