import React, { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  Input,
  Button,
  Link
} from '@mui/joy';

const EntradaEmail = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError(true);
      return;
    }
    // Lógica para enviar o email
    console.log('Email enviado:', email);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        maxWidth: '500px',
        margin: '0 auto',
        mr: 2,
        textAlign: 'center'
      }}
    >
      {/* Título */}
      <Typography level="title" sx={{ fontSize: {xs:'sm', sm:'sm', md:'md'}, fontWeight: '600' }}>
        PARA FINALIZAR, INFORME SEU EMAIL
      </Typography>

      {/* Formulário de email */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          gap: 1,
          width: '100%',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <Input
          placeholder="Seu email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          sx={{ flexGrow: 1, maxWidth: '400px' }}
        />
        <Button
          size="lg"
          sx={{ bgcolor: 'primary.700', '&:hover': { bgcolor: 'primary.800' } }}
          >
          ENVIAR
        </Button>
      </Box>

      {/* Mensagem de erro */}
      <Typography level="body-sm" color="danger" sx={{ fontSize: {xs:'xs', sm:'sm'} }}>
        Campo obrigatório
      </Typography>

      {/* Card com informações */}
      <Card
        variant="plain"
        sx={{
          backgroundColor: '#F5F5F5',
          width: '100%',
          textAlign: 'center',
          marginTop: 2,
          gap: 0
      
        }}
      >
        <Typography level="title" sx={{ fontSize: {xs:'sm', sm:'sm', md:'md'}, fontWeight: '600' }}>
          USAMOS SEU EMAIL DE FORMA 100% SEGURA PARA:
        </Typography>
        <Box component="ul" sx={{ pl: 0 }}>
          <Typography component="li" sx={{ pb: 2, fontSize: {xs:'sm', sm:'sm', md:'md'} }}>Identificar seu perfil</Typography>
          <Typography component="li" sx={{ pb: 2, fontSize: {xs:'sm', sm:'sm', md:'md'} }}>Notificar sobre o andamento do seu pedido</Typography>
          <Typography component="li" sx={{ pb: 2, fontSize: {xs:'sm', sm:'sm', md:'md'} }}>Gerenciar seu histórico de compras</Typography>
          <Typography component="li" sx={{ fontSize: {xs:'sm', sm:'sm', md:'md'} }}>Acelerar o preenchimento de suas informações</Typography>
        </Box>
      </Card>

      {/* Link para voltar */}
      <Link
        href="#"
        color="neutral"
        underline="always"
        sx={{
          color: 'common.black',
          fontWeight: 400,
          fontSize: 'sm'
        }}
      >
        <Typography component="li" sx={{ fontSize: {xs:'xs', sm:'sm'} }}>Voltar para o carrinho</Typography>
      </Link>
    </Box>
  );
};

export default EntradaEmail;