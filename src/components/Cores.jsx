// Cores.js
import React from 'react';
import { Sheet, Typography, List, ListItem, Checkbox } from '@mui/joy';
import Done from '@mui/icons-material/Done';

const Cores = ({ filtro, value, setValue }) => {
  return (
    <ul className={`busca-filtro-opcoes ${filtro.aberto ? 'aberto' : ''}`}>
      <Sheet sx={{ width: '85%', borderRadius: 'sm' }}>
        <Typography id="rank" level="body-sm" sx={{ fontWeight: 'lg', mb: 1.5 }}>
          Selecione as opções
        </Typography>
        <div role="group" aria-labelledby="rank">
          <List
            orientation="horizontal"
            wrap
            sx={{
              '--List-gap': '8px',
              '--ListItem-radius': '20px',
              '--ListItem-minHeight': '32px',
              '--ListItem-gap': '4px',
            }}
          >
            {filtro.opcoes.map((opcao, index) => (
              <ListItem key={index} sx={{backgroundColor: opcao}}>
                {value.includes(opcao) && (
                  <Done
                    fontSize="md"
                    color="primary"
                    sx={{ ml: -0.5, zIndex: 2, pointerEvents: 'none', position:'absolute'}}
                  />
                )}
                <Checkbox
                  size="sm"
                  disableIcon
                  overlay
                  checked={value.includes(opcao)}
                  variant={value.includes(opcao) ? 'outlined' : 'outlined'}
                  sx={{p:0.5}}
                  onChange={(event) => {
                    const isChecked = event.target.checked;
                    setValue((prevValue) => {
                      if (isChecked) {
                        return [...prevValue, opcao];
                      } else {
                        return prevValue.filter((item) => item !== opcao);
                      }
                    });
                  }}
                  slotProps={{
                    action: ({ checked }) => ({
                      sx: checked
                        ? {
                            border: '1px solid',
                            borderColor: 'primary.500',
                          }
                        : {},
                    }),
                  }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Sheet>
    </ul>
  );
};

export default Cores;