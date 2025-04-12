import React, { lazy, Suspense } from 'react';
import { styled } from '@mui/material/styles';
import { produtos } from '../data/data';
import { Box, Grid, Typography, Select, Option } from '@mui/joy';
import { Paper } from '@mui/material';

const Header = lazy(() => import('../components/Header'));
const Slider = lazy(() => import('../components/Slider'));
const Filtros = lazy(() => import('../components/Filtros'));
const Catalogo = lazy(() => import('../components/Catalogo'));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
}));

export default function Busca() {
  return (
    <div className="page-builder">
      <Suspense fallback={<div>Carregando...</div>}>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          <Box>
            <Header />
          </Box>
          <Box >
            <Slider />
          </Box>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Grid container spacing={2} sx={{width: '100%',maxWidth:'1155px'}}>
                <Grid item xs={12} md={12} sx={{display:'flex', justifyContent: 'space-between', pt:'2rem', pb: '0.5rem', borderBottom: '1px solid black'}}>
                  <Box sx={{display:'flex', alignItems: 'center'}}>
                    <Typography level='title-lg' sx={{ fontSize: {xs:'sm', sm:'sm', md:'md', lg:'lg'}, fontWeight: '600' }}>Você buscou por: "Mizuno Pro"</Typography>
                  </Box>
                  <Box sx={{display:'flex', gap: 3, alignItems: 'center'}}>
                    <Select defaultValue="relevancia" sx={{ fontSize: {xs:'sm', sm:'sm', md:'md'}, fontWeight: '600' }}>
                      <Option value="relevancia"><Typography sx={{ fontSize: {xs:'sm', sm:'sm', md:'md'}, fontWeight: '600' }}>Relevância</Typography> </Option>
                      <Option value="menor"><Typography sx={{ fontSize: {xs:'sm', sm:'sm', md:'md'}, fontWeight: '600' }}>Preço: Menor para maior</Typography></Option>
                      <Option value="maior"><Typography sx={{ fontSize: {xs:'sm', sm:'sm', md:'md'}, fontWeight: '600' }}>Preço: maior para menor</Typography></Option>
                      <Option value="novidade"><Typography sx={{ fontSize: {xs:'sm', sm:'sm', md:'md'}, fontWeight: '600' }}>Novidade</Typography></Option>
                    </Select>
                  </Box>
                </Grid>
                <Grid item xs={4} md={4} sx={{display: {xs: 'none', md:'flex'}}}>
                  <Filtros />
                </Grid>
                <Grid item xs={12} md={8} sx={{display: 'grid'}}>
                  <Catalogo produtos={produtos}/>
                </Grid>
            </Grid>
          </Box>
        </Box>
      </Suspense>
    </div>
  );
}