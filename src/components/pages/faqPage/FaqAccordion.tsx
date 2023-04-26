import * as React from 'react';
import { ReactNode } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FaqAccordionProps {
  header: string;
  text: string | any;
}

const FaqAccordion = ({ header, text }: FaqAccordionProps) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              color: '#000',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            {header}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: '#000',
              fontSize: '1rem',
              fontWeight: '',
            }}
          >
            {text}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
