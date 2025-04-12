import { React, useState, useCallback, useMemo, lazy } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  ListSubheader
} from '@mui/joy';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { filtros } from '../data/data';

const Multipicklist = lazy(() => import('../components/Multipicklist'));
const Cores = lazy(() => import('../components/Cores'));
const Range = lazy(() => import('../components/Range'));

export default function Filtros() {
  const [expanded, setExpanded] = useState({});
  const [value, setValue] = useState([]);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded((prev) => ({
      ...prev,
      [panel]: isExpanded
    }));
  };

  const renderFiltroOpcoes = useCallback((filtro) => {
    switch (filtro.tipo) {
      case 'checkbox':
        return (
          <Multipicklist
            filtro={filtro}
            value={value}
            setValue={setValue}
            
          />
        );

      case 'cores':
        return (
          <Cores
            filtro={filtro}
            value={value}
            setValue={setValue}
          />
        );
      case 'preco':
        return (
          <Range 
            filtro={filtro}
            value={value}
            setValue={setValue}
          />
        );

      default:
        return null;
    }
  }, [value]);

  const renderFiltrosMemoized = useMemo(() => {
    return filtros.map((filtro) => (
      <Accordion
        key={filtro.id}
        expanded={expanded[filtro.id] || false}
        onChange={handleAccordionChange(filtro.id)}
        sx={{
          '&:before': {
            display: 'none' // Remove a linha divisória padrão
          },
          boxShadow: 'none',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDown />}
          sx={{
            px: 0,
            '& .MuiAccordionSummary-content': {
              alignItems: 'center',
              gap: 1
            }
          }}
        >
          <Typography level="title-md" sx={{py: 2, px:1}}>{filtro.nome}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0, m: 0 }}>
          {renderFiltroOpcoes(filtro)}
        </AccordionDetails>
      </Accordion>
    ));
  }, [filtros, expanded, renderFiltroOpcoes]);

  return (
    <Box>
      <Typography level="title-lg" sx={{ mb: 0 }}>Filtros</Typography>
      <Box sx={{ pt: 2 }}>
        {renderFiltrosMemoized}
      </Box>
    </Box>
  );
}