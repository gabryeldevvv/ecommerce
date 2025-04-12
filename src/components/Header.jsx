import { React, useState, lazy } from 'react';
import { useNavigate } from '@tanstack/react-location';
import { styled } from '@mui/material/styles';
import { Container, IconButton, Drawer } from '@mui/material';
import { Box, Input, Badge  } from '@mui/joy';
import ListCategorias from './ListCategorias';
import Categorias from './Categorias';
import MenuIcon from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import CloseRoundedIcon from '@mui/icons-material/Close';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import './Header.css';

const LogoIcone = lazy(() => import('../assets/LogoIcone'));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: {sm:'', md:'space-between'},
  flexShrink: 0,
  border: '0 1px 1px 1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: 'transparent'
}));

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const navigate = useNavigate();
  const toggleDrawer = () => setOpen(!open);
  const handleClick = () => {
    navigate({ to: '/busca' });
  };

  return (
    <Box component={'header'} aria-label="Cabeçalho da loja"
      sx={{
        boxShadow: 0,
        bgcolor: 'white',
        backgroundImage: 'none',

      }}
    >
      <StyledContainer sx={{ py: {xs:'1rem', md:'0px'}, paddingLeft: '1rem', justifyContent: 'center',  maxHeight:'8rem'}}>
        <Box sx={{ flexGrow: {xs: 0, md: 1}, display: 'flex', alignItems: 'center', px: 0 }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <LogoIcone w={'13.5vw'} h={'8vw'} />
            <Categorias />
          </Box>
          <Box
              sx={{
              display: 'flex',
              gap: 1,
              alignItems: 'center',
              justifyContent: 'end',
              }}
          > 
              <Input value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' && handleClick()}
                sx={{borderRadius: '20px', width: { xs: '50vw', sm: '20vw' }}} 
                endDecorator={<IconButton aria-label="Botão de busca" onClick={handleClick}>
                              <Search />
                            </IconButton>}>
              </Input>
              <Box sx={{ flexGrow: 1, display: {xs: 'none', sm: 'flex'}, alignItems: 'center', px: 0}}>
                  <IconButton aria-label="Botão de conta">
                  <PermIdentityIcon />
                  </IconButton>
                  <IconButton aria-label="Botão de favoritos">
                  <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton aria-label="Boputão de carrinho">
                    <Badge badgeContent={4} color='primary' size='sm'>
                      <ShoppingBagOutlinedIcon />
                    </Badge>
                  </IconButton>
              </Box>
              
          </Box>
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 1, marginLeft: { xs: '1rem', sm: 0 } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer} x>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right"  open={open} aria-labelledby="drawer-title">
              <Box
                role="dialog" aria-modal="true"
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <ListCategorias/>
              </Box>
            </Drawer>
          </Box>
        </Box>
      </StyledContainer>
    </Box>
  );
}
