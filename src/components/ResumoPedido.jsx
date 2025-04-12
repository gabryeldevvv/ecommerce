import React, { Suspense } from 'react';
import { Box, Typography, Button, Grid } from '@mui/joy';
import ListaProdutos from './ListaProdutos';

export default function ResumoPedido() {

  return (
    <Box >
      <Suspense fallback={<div>Carregando...</div>}>
        <Grid container spacing={2} >
            <Grid xs={12}>
                <Typography level="title-md" sx={{ fontWeight: '600' }}>
                Resumo do pedido
                </Typography>
            </Grid>
            <Grid xs={12}>
                <ListaProdutos />
            </Grid>
            <Grid xs={12}>
                <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography level="body-md">Subtotal</Typography>
                        <Typography level="body-md" fontWeight="lg">
                        {/* R$ {subtotal.toFixed(2).replace('.', ',')} */}
                        </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography level="body-md">Descontos</Typography>
                        <Typography level="body-md" color="danger">
                        {/* - R$ {totalDescontos.toFixed(2).replace('.', ',')} */}
                        </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography level="title-lg">Total</Typography>
                        <Typography level="title-lg" fontWeight="xl">
                        {/* R$ {total.toFixed(2).replace('.', ',')} */}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
      </Suspense>
    </Box>
  );
}
