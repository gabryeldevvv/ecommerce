import React, { lazy, Suspense, useState } from 'react';
import {
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
  AspectRatio,
  IconButton,
  Link,
  Box,
  Grid,
  List,
  ListItem,
  ListItemDecorator,
  Chip,
  Breadcrumbs,
  Input,
  Drawer,
  Sheet,
  Stack,
  Badge
} from '@mui/joy';
import {
  FavoriteBorder,
  ShoppingCart,
  LocalShipping,
  CheckCircle,
  Security,
  Home,
  ChevronRight,
  Close,
  Delete
} from '@mui/icons-material';
import { categorias } from '../data/data';

const Header = lazy(() => import('../components/Header'));
const Slider = lazy(() => import('../components/Slider'));

const headerProps = { 
  categorias
};

// Objeto do produto
const produto = {
  id: 1,
  nome: 'Tênis Masculino Mizuno Wave Prophecy 13',
  preco: 'R$ 999,99',
  precoOriginal: 'R$ 1.099,99',
  imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true',
  desconto: { 
    texto: '10% OFF', 
    corFundo: 'red', 
    corTexto: 'white'  
  },
  cores: [
    { name: 'preto', img: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' },
    { name: 'azul', img: 'https://mizunobr.vtexassets.com/arquivos/ids/243834-1200-1200?v=638459587720400000&width=1200&height=1200&aspect=true' },
  ],
  descricao: 'O Tênis Mizuno Wave Prophecy 13 é ideal para corridas de longa distância, oferecendo amortecimento premium e resposta rápida para cada passada.',
  detalhes: [
    'Tecnologia Wave para amortecimento',
    'Entressola U4icX com resposta rápida',
    'Cabedal em mesh respirável',
    'Solado de borracha durável',
    'Peso leve: 320g (tamanho 42)'
  ]
};

const Produto = () => {
  const [selectedColor, setSelectedColor] = React.useState(produto.cores[0].name);
  const [selectedSize, setSelectedSize] = React.useState('M');
  const [cep, setCep] = React.useState('');
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const sizes = ['P', 'M', 'G', 'GG'];

  const addToCart = () => {
    const newItem = {
      ...produto,
      color: selectedColor,
      size: selectedSize,
      quantity: 1
    };
    setCartItems([...cartItems, newItem]);
    setCartOpen(true);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.preco.replace('R$ ', '').replace(',', '.'));
      return sum + price;
    }, 0);

    const discount = cartItems.reduce((sum, item) => {
      if (item.precoOriginal) {
        const originalPrice = parseFloat(item.precoOriginal.replace('R$ ', '').replace(',', '.'));
        const currentPrice = parseFloat(item.preco.replace('R$ ', '').replace(',', '.'));
        return sum + (originalPrice - currentPrice);
      }
      return sum;
    }, 0);

    return {
      subtotal: subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      discount: discount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      total: (subtotal - discount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    };
  };

  const totals = calculateTotal();

  return (
    <div className="page-builder">
      <Suspense fallback={<div>Carregando...</div>}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <Box>
            <Header {...headerProps} />
          </Box>
          
          {/* Slider */}
          <Box>
            <Slider />
          </Box>
          
          {/* Conteúdo do Produto */}
          <Box sx={{ maxWidth: 1200, margin: '0 auto', p: 3 }}>
            {/* Breadcrumbs */}
            <Breadcrumbs separator={'/'} >
              <Link href="/" color="black">
                <Typography sx={{ fontSize: {xs:'xs', sm:'sm', md:'md'}, fontWeight: '600'}}>Home</Typography>
              </Link>
              <Link href="/" color="black">
                <Typography sx={{ fontSize: {xs:'xs', sm:'sm', md:'md'}, fontWeight: '600'}}>Esportes</Typography>
              </Link>
              <Link href="/" color="black">
                <Typography sx={{ fontSize: {xs:'xs', sm:'sm', md:'md'}, fontWeight: '600'}}>Tênis</Typography>
              </Link>
              <Typography sx={{ fontSize: {xs:'xs', sm:'sm', md:'md'}, fontWeight: '600'}}>{produto.nome}</Typography>
            </Breadcrumbs>

            <Grid container spacing={2}>
              {/* Galeria de Imagens */}
              <Grid xs={12} md={6}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {/* Miniaturas laterais */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {produto.cores.map((cor, index) => (
                      <AspectRatio
                        key={index}
                        ratio="1/1"
                        sx={{ width: 60, borderRadius: 'md', cursor: 'pointer' }}
                      >
                        <img
                          src={cor.img}
                          alt={`Cor ${cor.name}`}
                          style={{ objectFit: 'cover'}}
                        />
                      </AspectRatio>
                    ))}
                  </Box>

                  {/* Imagem principal */}
                  <AspectRatio ratio="1/1" sx={{ flexGrow: 1, borderRadius: 'lg', maxWidth: '603px', maxHeight: '603px'}}>
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                      style={{ objectFit: 'cover', maxWidth: '603px', maxHeight: '603px' }}
                    />
                  </AspectRatio>
                </Box>
              </Grid>

              {/* Informações do Produto */}
              <Grid xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography level="title-lg" fontSize="xl2" fontWeight={700}>
                    {produto.nome}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: {xs:'sm', sm:'sm', md:'md'}, fontWeight: '600', whiteSpace: 'nowrap' }}>
                      {produto.preco}
                    </Typography>
                    {produto.desconto && (
                      <Chip 
                        size="sm" 
                        sx={{ 
                          ml: 1,
                          bgcolor: produto.desconto.corFundo,
                          color: produto.desconto.corTexto
                        }}
                      >
                        {produto.desconto.texto}
                      </Chip>
                    )}
                  </Box>
                  
                  <Typography level="body1">
                    {produto.descricao}
                  </Typography>

                  <Divider sx={{ my: 1 }} />

                  {/* Seletor de Cores */}
                  <Box>
                    <Typography level="body2" fontWeight="lg" sx={{ mb: 1 }}>
                      COR: {selectedColor}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {produto.cores.map((cor) => (
                        <Box
                          key={cor.name}
                          onClick={() => setSelectedColor(cor.name)}
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: 'sm',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            border: '2px solid',
                            borderColor: selectedColor === cor.name ? 'primary.500' : 'transparent'
                          }}
                        >
                          <img
                            src={cor.img}
                            alt={cor.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Seletor de Tamanhos */}
                  <Box>
                    <Typography level="body2" fontWeight="lg" sx={{ mb: 1 }}>
                      TAMANHO: {selectedSize}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {sizes.map((size) => (
                        <Button
                          key={size}
                          variant={selectedSize === size ? 'soft' : 'outlined'}
                          color={selectedSize === size ? 'primary' : 'neutral'}
                          onClick={() => setSelectedSize(size)}
                          size="sm"
                        >
                          {size}
                        </Button>
                      ))}
                    </Box>
                  </Box>

                  {/* Calculadora de Frete */}
                  <Box sx={{ mt: 2 }}>
                    <Typography level="body2" fontWeight="lg" sx={{ mb: 1 }}>
                      CALCULAR FRETE
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Input
                        size="sm"
                        placeholder="Digite seu CEP"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        sx={{ flexGrow: 1, p: 1.3 }}
                      />
                      <Button size="sm" color="primary" sx={{ bgcolor: 'primary.700', '&:hover': { bgcolor: 'primary.800' } }}>
                        CALCULAR
                      </Button>
                    </Box>
                    <Link level="body2" sx={{ ml: 0.3, display: 'block', fontSize:'xs' }}>
                        Não sei meu CEP
                    </Link>
                  </Box>

                  <Divider sx={{ my: 1 }} />

                  {/* Ações */}
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                      startDecorator={<ShoppingCart />}
                      size="lg"
                      onClick={addToCart}
                      sx={{ flexGrow: 1, bgcolor: 'primary.700', '&:hover': { bgcolor: 'primary.800' } }}
                    >
                      ADICIONAR AO CARRINHO
                    </Button>
                    <IconButton variant="outlined" size="lg">
                      <FavoriteBorder />
                    </IconButton>
                  </Box>

                  {/* Benefícios */}
                  <List size="sm" sx={{ '--ListItemDecorator-size': '32px' }}>
                    <ListItem>
                      <ListItemDecorator>
                        <LocalShipping sx={{ color: 'primary.700' }} />
                      </ListItemDecorator>
                      Frete grátis para todo o Brasil
                    </ListItem>
                    <ListItem>
                      <ListItemDecorator>
                        <CheckCircle sx={{ color: 'primary.700' }} />
                      </ListItemDecorator>
                      Garantia de 30 dias
                    </ListItem>
                    <ListItem>
                      <ListItemDecorator>
                        <Security sx={{ color: 'primary.700' }} />
                      </ListItemDecorator>
                      Pagamento seguro
                    </ListItem>
                  </List>
                </Box>
              </Grid>

              {/* Descrição Detalhada */}
              <Grid xs={12}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography level="h3" fontSize="lg" mb={2}>
                      Detalhes do Produto
                    </Typography>
                    <Typography level="body1" mb={2}>
                      {produto.descricao}
                    </Typography>
                    <Typography level="body1" mb={2}>
                      Características:
                    </Typography>
                    <List marker="disc">
                      {produto.detalhes.map((detalhe, index) => (
                        <ListItem key={index}>{detalhe}</ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Drawer do Carrinho */}
        <Drawer
            open={cartOpen}
            onClose={() => setCartOpen(false)}
            anchor="right"
            size='md'
        >
          <Sheet
            sx={{
              width: '92%',
              height: '100%',
              minHeight: '700px',
              p: 2,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Cabeçalho do Drawer */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography level="h4" fontWeight="lg">
                Meu Carrinho
              </Typography>
              <IconButton onClick={() => setCartOpen(false)}>
                <Close />
              </IconButton>
            </Box>

            <Divider sx={{ mb: 2 }} />

            {/* Lista de Produtos */}
            <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2}}>
              {cartItems.length === 0 ? (
                <Typography textAlign="center" sx={{ my: 4 }}>
                  Seu carrinho está vazio
                </Typography>
              ) : (
                <Stack spacing={2}>
                  {cartItems.map((item, index) => (
                    <Card key={index} variant="outlined" sx={{ p: 1 }}>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        {/* Imagem do Produto */}
                        <AspectRatio ratio="1/1" sx={{ width: 120, borderRadius: 'sm' }}>
                          <img
                            src={item.imagem}
                            alt={item.nome}
                            style={{ objectFit: 'cover' }}
                          />
                        </AspectRatio>

                        {/* Detalhes do Produto */}
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography fontWeight="md">{item.nome}</Typography>
                          
                          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: 1 }}>
                            <Typography fontWeight="lg">{item.preco}</Typography>
                            {item.precoOriginal && (
                              <Typography level="body2" sx={{ textDecoration: 'line-through', color: 'text.tertiary' }}>
                                {item.precoOriginal}
                              </Typography>
                            )}
                          </Box>
                          
                          <Typography level="body2" sx={{ mt: 1 }}>
                            Cor: {item.color}
                          </Typography>
                          
                          <Typography level="body2">
                            Tamanho: {item.size}
                          </Typography>
                        </Box>

                        {/* Botão de Remover */}
                        <IconButton 
                          size="sm" 
                          color="danger" 
                          onClick={() => removeFromCart(index)}
                          sx={{ alignSelf: 'flex-start' }}
                        >
                          <Delete />
                        </IconButton>
                      </Box>
                    </Card>
                  ))}
                </Stack>
              )}
            </Box>

            {/* Totalização */}
            {cartItems.length > 0 && (
              <>
                <Divider sx={{ mb: 2 }} />
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography level="body1">Subtotal</Typography>
                    <Typography level="body1" fontWeight="lg">{totals.subtotal}</Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography level="body1">Descontos</Typography>
                    <Typography level="body1" color="danger">{totals.discount}</Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography level="title-lg">Total</Typography>
                    <Typography level="title-lg" fontWeight="xl">{totals.total}</Typography>
                  </Box>
                  
                  <Typography level="body2" textAlign="center" sx={{ mb: 2 }}>
                    Entrega e taxas calculadas no checkout
                  </Typography>
                  
                  <Button
                    fullWidth
                    size="lg"
                    sx={{ bgcolor: 'primary.700', '&:hover': { bgcolor: 'primary.800' } }}
                  >
                    FINALIZAR COMPRA
                  </Button>
                </Box>
              </>
            )}
          </Sheet>
        </Drawer>
      </Suspense>
    </div>
  );
};

export default Produto;