import { React } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import ImageIcon from '@mui/icons-material/Image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Grid from '@mui/joy/Grid';
import './CardProduto.css'
import {  Chip, Box } from '@mui/material';

export default function CardProduto( {produto} ) {

  return (
    <Card variant="plain" sx={{ width: '100%', p:0, gap:0}}>
        <Chip
          label={`10% OFF`}
          color="error"
          size="small"
          sx={{
            position: 'absolute',
            top: 10,
            left: 10,
            zIndex: 1,
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            borderRadius: 1,
          }}
        />
        <Box  >
        
            <img 
                src={produto.imagens?.[0]?.url_imagem || '/imagem-padrao.jpg'}
                srcSet={produto.imagens?.[0]?.url_imagem || '/imagem-padrao.jpg'}
                loading="lazy"
                alt={produto.nome}
                className="card-produto-imagem" 
            />
        </Box>
        <Box sx={{ width:'100%'}}>
            <Grid container spacing={0}>
                <Grid item xs={12} md={12} sx={{}}>
                  <Box sx={{display:'flex', alignItems: 'center'}}>
                    <Typography level="title-md" sx={{ fontSize: {xs:'sm', sm:'sm', md:'md'}, fontWeight: '600' }}>{produto.nome}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={10} md={10} sx={{display:'flex', alignItems: 'center', gap: 1}}>
                    <Typography sx={{ fontSize: {xs:'sm', sm:'sm', md:'md'}, fontWeight: '600', whiteSpace: 'nowrap' }}>{produto.preco}</Typography>
                    <Typography sx={{ fontSize: {xs:'sm', sm:'sm', md:'md'}, fontWeight: '400', whiteSpace: 'nowrap' }}>R$ 899,99</Typography>
                </Grid>
                <Grid item xs={2} md={2} >
                    <IconButton aria-label="Botão de favoritos" >
                        <FavoriteBorderIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    </Card>
  );
}
