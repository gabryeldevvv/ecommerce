import React from 'react';
import {
    Grid,
    Typography,
    Input,
    Button,
    Box
} from '@mui/joy';

const ContaCadastro = () => {
    return (
        <Box component="form" >
            <Typography 
                level="title" 
                sx={{ 
                    fontSize: {xs: 'sm', sm: 'sm', md: 'md'}, 
                    fontWeight: '600',
                    mb: 3
                }}
            >
                DADOS PESSOAIS
            </Typography>
            {/* First Row - 3 columns */}
            <Grid container spacing={2} sx={{ mb: 2 }}>
                {/* Column 1 */}
                <Grid item xs={12} sm={4} >
                    <Typography level="body-md" sx={{ mb: 1 }}>
                        Email
                    </Typography>
                    <Input size="lg" fullWidth />
                </Grid>
                
                {/* Column 2 */}
                <Grid item xs={12} sm={4} >
                    <Typography level="body-md" sx={{ mb: 1 }}>
                        Nome
                    </Typography>
                    <Input size="lg" fullWidth />
                </Grid>
                
                {/* Column 3 */}
                <Grid item xs={12} sm={4} >
                    <Typography level="body-md" sx={{ mb: 1 }}>
                        CPF
                    </Typography>
                    <Input size="lg" fullWidth />
                </Grid>
            </Grid>
            
            {/* Second Row - 1 column */}
            <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12}>
                    <Typography level="body-md" sx={{ mb: 1 }}>
                        Telefone
                    </Typography>
                    <Input size="lg" fullWidth />
                </Grid>
            </Grid>
            
            {/* Third Row - Submit button aligned right */}
            <Grid container justifyContent="flex-end">
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Button
                        fullWidth
                        size="lg"
                        sx={{ 
                            bgcolor: 'primary.700', 
                            '&:hover': { bgcolor: 'primary.800' } 
                        }}
                    >
                        ENVIAR
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContaCadastro;