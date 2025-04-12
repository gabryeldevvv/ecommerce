import { React, useState, lazy } from 'react';
import { Grid, Typography, Box, ListItem, Checkbox, Badge } from '@mui/joy';
import { Add, Remove, Done  } from '@mui/icons-material';
import { produtos } from '../data/data';

export default function ListaProdutos( ) {

  return (
    <Box sx={{ 
        width: '100%',
        minWidth: '330px',
        maxWidth: '500px',
        overflow: 'hidden'
    }}>
        <Box sx={{ maxHeight: '430px', overflowY: 'auto' }}>
            {produtos.map((produto, index) => (
                <Grid 
                    container 
                    spacing={0} 
                    key={index} 
                    sx={{
                    padding: '12px 16px',
                    pl: 0,
                    borderBottom: '1px solid #eee',
                    '&:last-child': { borderBottom: 'none' },
                    alignItems: 'center',
                    justifyContent: {xs: 'space-between', sm:'space-between'}
                    }}
                >
                    <Grid  xs={12} >
                        <Box sx={{ display: 'flex', gap: 5 }}>
                            <Badge badgeContent={4} color='neutral' size='sm' anchorOrigin={{vertical: 'bottom',horizontal: 'right'}} sx={{mb:'1rem'}}>
                                <img 
                                    src={produto.imagem} 
                                    alt={produto.nome} 
                                    style={{ width: 80, height: 80, objectFit: 'cover' }} 
                                />
                            </Badge>
                            <div>
                                <Typography sx={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}>{produto.nome}</Typography>
                                <Typography level="body-sm" whiteSpace='nowrap' sx={{ textDecoration: 'line-through' }}>
                                {produto.preco}
                                </Typography>
                                <Typography whiteSpace='nowrap'>{produto.preco}</Typography>
                            </div>
                            <Box sx={{ borderRadius: '50%', pt: 0.8}}>
                                <ListItem key={index} sx={{backgroundColor: 'black', borderRadius: '50%', mb:2}}>
                                    <Checkbox
                                        size="sm"
                                        disableIcon
                                        overlay
                                        checked={true}
                                        variant={'plain'}
                                        sx={{p:1}}
                                    />
                                </ListItem>
                                <Typography>43</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            ))}
        </Box>
    </Box>

  );
}
