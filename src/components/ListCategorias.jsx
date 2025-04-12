import { React, useState } from 'react';
import { Box, Typography, ListSubheader, ListItemButton, ListItem, List, IconButton  } from '@mui/joy';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { categorias } from '../data/data';
import { cores  } from '../data/cores';

export default function ListCategorias() {
    const [openStates, setOpenStates] = useState({});

    const toggleCategory = (index) => {
        setOpenStates((prev) => ({
        ...prev,
        [index]: !prev[index],
        }));
    };

    return (
        <List sx={{ width: 300, borderRadius: 'sm'}}
            >{categorias.map((categoria, index) => (
            <Box key={`categoria-${index}`}>
                <ListItem index={index} sx={{ my: 1, mx: 1 }} startAction={
                    <IconButton
                    variant="plain"
                    size="sm"
                    color="neutral"
                    onClick={() => toggleCategory(index)}
                    >
                        <KeyboardArrowDown
                            sx={{
                                transform: openStates[index] ? 'initial' : 'rotate(-90deg)',
                                transition: 'transform 0.2s',
                            }}
                        />
                        <ListSubheader>
                            <Typography level='title-md' sx={{ borderBottom: cores.bordaBaixoCinzaClaro }}>{categoria.nome}</Typography>
                        </ListSubheader>
                    </IconButton>
                }/>
                

                <ListItem sx={{
                    display: openStates[index] ? 'flex' : 'none',
                    flexDirection: 'column',
                    alignItems: 'start'
                }}>
                {categoria.subcategorias.map((subcategoria, colIndex) => (
                    <Box key={`subcategoria-${index}-${colIndex}`}>
                        <ListSubheader key={colIndex}>
                            <Typography level='title-sm' >{subcategoria.nome}</Typography>
                        </ListSubheader>
                        <List>
                        {subcategoria.opcoes.map((valor, valIndex) => (
                            <ListItem  key={valIndex}>
                                <ListItemButton><Typography level='body-sm' >{valor.texto}</Typography></ListItemButton>
                            </ListItem>
                        ))}
                        </List>
                    </Box>
                ))}
                </ListItem>
            </Box>
            ))}
        </List>
    );
}