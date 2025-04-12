import React from 'react';
import { Box, Typography, Button, Input } from '@mui/joy';

export default function Descontos( {items} ) {

    // Calcular totais
    const subtotal = items.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    const totalDescontos = items.reduce((sum, item) => sum + ((item.preco - item.precoDesconto) * item.quantidade), 0);
    const total = subtotal - totalDescontos;

  return (
    <Box sx={{ mb: 2 }}>
        {/* Seção de Frete */}
        <Box sx={{ mb: 3 }}>
        <Typography level="title" sx={{ mt: 2, fontSize: {xs:'md', sm:'lg'}, fontWeight: '600' }}>ENTREGA</Typography>
        <Typography level="body-sm" sx={{ mb: 1 }}>Calcule o prazo e valor do frete</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
            <Input 
            size="sm" 
            placeholder="Digite seu CEP" 
            sx={{ flexGrow: 1 }}
            />
            <Button
            size="lg"
            sx={{ bgcolor: 'primary.700', '&:hover': { bgcolor: 'primary.800' } }}
            >
            ENVIAR
            </Button>
        </Box>
        </Box>
        
        {/* Seção de Cupom de Desconto */}
        <Box sx={{ mb: 3 }}>
        <Typography level="title" sx={{ fontSize: {xs:'md', sm:'lg'}, fontWeight: '600' }}>TEM CUPOM DE DESCONTO?</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
            <Input 
            size="sm" 
            placeholder="Digite seu cupom" 
            sx={{ flexGrow: 1 }}
            />
            <Button
            size="lg"
            sx={{ bgcolor: 'primary.700', '&:hover': { bgcolor: 'primary.800' } }}
            >
            ENVIAR
            </Button>
        </Box>
        </Box>
        
        {/* Resumo do Pedido */}
        <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography level="body-md">Subtotal</Typography>
                <Typography level="body-md" fontWeight="lg">
                R$ {subtotal.toFixed(2).replace('.', ',')}
                </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography level="body-md">Descontos</Typography>
                <Typography level="body-md" color="danger">
                - R$ {totalDescontos.toFixed(2).replace('.', ',')}
                </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography level="title-lg">Total</Typography>
                <Typography level="title-lg" fontWeight="xl">
                R$ {total.toFixed(2).replace('.', ',')}
                </Typography>
            </Box>
            
            <Button
                fullWidth
                size="lg"
                sx={{ bgcolor: 'primary.700', '&:hover': { bgcolor: 'primary.800' } }}
            >
                FINALIZAR COMPRA
            </Button>
            <Typography level="body-sm" textAlign="center" sx={{ mb: 2 }}>Continuar comprando</Typography>
        </Box>
    </Box>
  );
}
