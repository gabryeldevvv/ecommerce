import React, { lazy, Suspense, useState } from 'react';
import { produtos } from '../data/data';
import { Box, Grid } from '@mui/joy';

// Componentes lazy
const HeaderCheckout = lazy(() => import('../components/HeaderCheckout'));
const TabelaProdutos = lazy(() => import('../components/TabelaProdutos'));
const Descontos = lazy(() => import('../components/Descontos'));
const EntradaEmail = lazy(() => import('../components/EntradaEmail'));
const ResumoPedido = lazy(() => import('../components/ResumoPedido'));
const ContaCadastro = lazy(() => import('../components/ContaCadastro'));
// ... outros componentes

// Constantes fora do componente
const steps = [
  { id: 1, label: 'Carrinho' },
  { id: 2, label: 'Identificação' },
  { id: 3, label: 'Pagamento' },
  { id: 4, label: 'Confirmação' },
];

// Função para converter preço
const parsePrice = (priceStr) => {
  return parseFloat(priceStr.replace('R$ ', '').replace('.', '').replace(',', '.'));
};

export default function Checkout() {
  // Preparar dados iniciais
  const initialProducts = produtos.slice(0, 3).map(produto => ({
    id: produto.id,
    nome: produto.nome,
    preco: parsePrice(produto.preco),
    precoDesconto: parsePrice(produto.preco) * 0.9,
    imagem: produto.imagem,
    cor: produto.cor || 'Preto/Branco',
    tamanho: produto.tamanho || '42',
    quantidade: 1
  }));
  
  const [items, setItems] = useState([initialProducts]);

  const config = [
    { 
      id: 1, 
      componente1: TabelaProdutos, 
      componente2: Descontos, 
      step: 1,
      props1: {  }, 
      props2: { items }
    },
    { 
      id: 2, 
      componente1: EntradaEmail, 
      componente2: ResumoPedido, 
      step: 2,
      props1: {  }, 
      props2: { items }
    },
    { 
      id: 3, 
      componente1: ContaCadastro, 
      componente2: ResumoPedido, 
      step: 2,
      props1: {  }, 
      props2: { items }
    }
  ];

  const codigoTemplate = 3;

  const currentConfig = config.find(item => item.id === codigoTemplate) || config[0];
  const { componente1: Component1, componente2: Component2, step, props1, props2} = currentConfig;

  return (
    <Box className="page-builder" sx={{ maxWidth: '97.8vw', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Suspense fallback={<div>Carregando...</div>}>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          <Box>
            <HeaderCheckout 
              steps={steps}
              stepSelecionado={step} 
            />
          </Box>
          <Box sx={{ mt: 2, width: '99%' }} >
            <Grid container spacing={2} >
              <Grid xs={12} md={8} sx={{display: 'flex', justifyContent:'center'}}>
                <Box sx={{ pl: 4 }}>
                  <Suspense fallback={<div>Carregando componente principal...</div>}>
                    <Component1 {...props1}/>
                  </Suspense>
                </Box>
              </Grid>
              <Grid xs={12} md={4}>
                <Box sx={{ pl: 2 }}>
                  <Suspense fallback={<div>Carregando componente lateral...</div>}>
                    <Component2 {...props2}/>
                  </Suspense>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Suspense>
    </Box>
  );
}