import React from 'react';
import { Box, AppBar, Container, Toolbar, Button, IconButton, Drawer } from '@mui/material';
import { Dropdown, Menu, MenuButton, MenuItem, Input }  from '@mui/joy';
import { createTheme, styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseRoundedIcon from '@mui/icons-material/Close';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LogoIcone from '../components/LogoIcone';
// import './Header.css'

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const BoxIcones = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
  }));

  const CampoBusca = styled(Input)(({ theme }) => ({
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
    },
  }));

  const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginLeft: '0',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    boxShadow: (theme.vars || theme).shadows[1],
  }));

  return (
    <AppBar position='fixed' role='banner' enableColorOnDark sx={{ boxShadow: 0,  backgroundColor: 'transparent'} } 
    >
        <Container component='container' maxWidth='2000px' >
            <CustomToolbar variant='dense' role='toolbar' aria-label='Barra de ferramentas' >
            {/* Left */}
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0}}>
                <LogoIcone w={90} h={80} />
                <Box sx={{ display: { xs: 'none', md: 'flex'}}}>
                <Button variant="text" color="info" size="small">
                    Tênis casual
                </Button>
                <Button variant="text" color="info" size="small">
                    Tênis esportivo
                </Button>
                </Box>
            </Box>
            {/* Right */}
            <Box
                sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                }}
            >
                <CampoBusca endDecorator={<IconButton aria-label="Botão de busca">
                                        <SearchIcon />
                                    </IconButton>}>
                </CampoBusca>
                <BoxIcones >
                    <IconButton aria-label="Botão de conta">
                    <PermIdentityIcon />
                    </IconButton>
                    <IconButton aria-label="Botão de favoritos">
                    <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton aria-label="Boputão de carrinho">
                    <ShoppingBagOutlinedIcon />
                    </IconButton>
                </BoxIcones>
                
            </Box>
            
            <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, marginLeft: { xs: '10px', sm: 0} }}>
                <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
                </IconButton>
            </Box>
            {/*
            <Drawer anchor="top"
                    open={open}
                    onClose={toggleDrawer(false)}
                    slotProps= {{
                        sx: {
                        top: 'var(--template-frame-height, 0px)',
                        },
                    }}
            >
                <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon/>
                    </IconButton>
                </Box>
                <Dropdown>
                    <MenuButton>Dashboard...</MenuButton>
                    <Menu>
                    <MenuItem>Tênis masculino</MenuItem>  
                    <MenuItem>Tênis feminino</MenuItem>  
                    </Menu>
                </Dropdown>
                </Box>
            </Drawer> */}
            </CustomToolbar>
        </Container>
    </AppBar>
    // <div>
    //   <Box component="header" sx={{ border: '1px solid',p: 1, m: 1 }}>
    //     Header
    //   </Box>
    // </div>
  );
}
