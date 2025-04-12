import { React } from 'react';
import { Box, Dropdown, Menu, MenuButton, Typography, ListSubheader, ListItemButton, ListItem, List } from '@mui/joy';
import { cores } from '../data/cores';
import { categorias } from '../data/data';

export default function Categorias() {

  return (
    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
        {categorias.map((categoria, index) => (
        <Dropdown key={index} >
            <MenuButton className='hover-link' variant="text" color="info" size="small"><Typography sx={{ level: { sm: 'title-sm', md: 'title-md', borderBottom: cores.bordaBaixoCinzaClaro } }}>{categoria.nome}</Typography></MenuButton>
            <Menu >
            <List
                sx={{ width: 'fit-content', borderRadius: 'sm', p: '0.5rem',display: 'flex', flexDirection:'row',  }}
            >
                <img
                    width={180}
                    heigth={249}
                    src={categoria.imagem}
                    alt=""
                    sx={{borderRadius: '10px'}}
                />
                {categoria.subcategorias.map((subcategoria, colIndex) => (
                <ListItem key={colIndex} nested  sx={{}}>
                    <ListSubheader><Typography level='title-sm' >{subcategoria.nome}</Typography></ListSubheader>
                    <List>
                    {subcategoria.opcoes.map((opcao, valIndex) => (
                        <ListItem key={valIndex}>
                        <ListItemButton><Typography level='body-sm' >{opcao.texto}</Typography></ListItemButton>
                        </ListItem>
                    ))}
                    </List>
                </ListItem>
                ))}
            </List>
            </Menu>
        </Dropdown>
        ))}
    </Box>
  );
}