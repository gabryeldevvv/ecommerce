import React from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/joy';
import { Add, Remove, Delete } from '@mui/icons-material';
import { produtos } from '../data/data';

const TabelaProdutos = () => {
  return (
    <Box sx={{ 
      width: '100%',
      minWidth: '330px',
      overflow: 'hidden',
      
    }}>
      {/* Linha de cabeçalho */}
      <Grid container spacing={0} sx={{
        padding: '12px 16px',
        borderBottom: '1px solid #ccc',
        justifyContent: 'space-between',
        display: {xs:'none', sm: 'flex'}
      }}>
        <Grid  xs={5}>
          <Typography level="title-lg">PRODUTOS</Typography>
        </Grid>
        <Grid  xs={2}>
          <Typography level="title-lg">PREÇO</Typography>
        </Grid>
        <Grid  xs={2}>
          <Typography level="title-lg">QTD</Typography>
        </Grid>
        <Grid  xs={2}>
          <Typography level="title-lg">TOTAL</Typography>
        </Grid>
      </Grid>
      
      {/* Área de conteúdo com scroll */}
      <Box sx={{ maxHeight: '430px', overflowY: 'auto' }}>
        {produtos.map((produto, index) => (
          <Grid 
            container 
            spacing={0} 
            key={index} 
            sx={{
              padding: '12px 16px',
              borderBottom: '1px solid #eee',
              '&:last-child': { borderBottom: 'none' },
              alignItems: 'center',
              justifyContent: {xs: 'space-between', sm:'space-between'}
            }}
          >
            <Grid  xs={12} sm={5}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <img 
                  src={produto.imagem} 
                  alt={produto.nome} 
                  style={{ width: 80, height: 80, objectFit: 'cover' }} 
                />
                <div>
                  <Typography>{produto.nome}</Typography>
                  <Typography level="body-sm">COR</Typography>
                  <Typography level="body-sm">TAMANHO</Typography>
                </div>
              </Box>
            </Grid>

            <Grid  xs={4} sm={2} sx={{ml: {xs: '97px', sm: 0}}}>
              <Box>
                <Typography level="body-sm" whiteSpace='nowrap' sx={{ textDecoration: 'line-through' }}>
                  {produto.preco}
                </Typography>
                <Typography whiteSpace='nowrap'>{produto.preco}</Typography>
              </Box>
            </Grid>

            <Grid  xs={4} sm={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="a" href="#">
                  {/* <img src={Minus} alt="Diminuir quantidade" style={{ width: '20px' }} /> */}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton 
                    size="sm" 
                    >
                    <Remove />
                    </IconButton>
                    <Typography sx={{ minWidth: 30, textAlign: 'center' }}>
                    {10}
                    </Typography>
                    <IconButton 
                    size="sm" 
                    >
                    <Add />
                    </IconButton>
                </Box>
                <Box component="a" href="#">
                  {/* <img src={Plus} alt="Aumentar quantidade" style={{ width: '20px' }} /> */}
                </Box>
              </Box>
            </Grid>

            <Grid  xs={2} sx={{ml: {xs: '0px', sm: 0}}}>
              <Box sx={{ display: {xs:'none', sm:'flex'}, alignItems: 'center', justifyContent: 'space-between', gap: 1}}>
                <Typography whiteSpace='nowrap'>{produto.preco}</Typography>
                <IconButton 
                    size="sm" 
                    color="danger" 
                    sx={{ alignSelf: 'flex-start', mr: 2 }}
                >
                    <Delete />
                </IconButton>
                
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default TabelaProdutos;