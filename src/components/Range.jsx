import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';
import { React, useState }  from 'react';
import { Typography } from '@mui/joy';

function valueText(value) {
  return `${value}°C`;
}

export default function Range({ filtro  }) {
  const [value, setValue] = useState([0, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    

  return (
    <Box 
    className={`busca-filtro-opcoes ${filtro.aberto ? 'aberto' : ''}`}>
        <Typography id="rank" level="body-sm" sx={{ fontWeight: 'lg', my: 1.5, pl: 2.8 }}>
            Selecione um range de preço
        </Typography>
        <Box sx={{ width: 300, py: 0, px: 3.7 }}>
            <Slider
                min={0}
                max={1000}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valueText}
        />
        </Box>
    </Box>
  );
}
