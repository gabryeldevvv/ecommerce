import { React, lazy, useState, useCallback, useEffect, useMemo, Suspense } from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/joy/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const CardProduto = lazy(() => import('../components/CardProduto'));

const Item = styled(Sheet)(({ theme }) => ({
    // Seus estilos personalizados aqui
}));

export default function Catalogo({ produtos }) {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const produtosPorPagina = 9;
  const indiceInicial = (paginaAtual - 1) * produtosPorPagina;
  const indiceFinal = indiceInicial + produtosPorPagina;
  const produtosPaginaAtual = produtos.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(produtos.length / produtosPorPagina);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Função para mudar de página
  const mudarPagina = useCallback((event, novaPagina) => {
    setPaginaAtual(novaPagina);
  }, []);

  // Personalização da paginação para mobile
  const renderPaginationItem = useCallback((item) => {
    if (isMobile) {
      // Para mobile, mostramos apenas setas e página atual
      if (item.type === 'previous' || item.type === 'next') {
        return <PaginationItem {...item} />;
      }
      if (item.type === 'page' && item.page === paginaAtual) {
        return <PaginationItem {...item} />;
      }
      return null;
    }
    return <PaginationItem {...item} />;
  }, [isMobile, paginaAtual]);

  return (
    <Box sx={{ width: '100%' }}>
      <Grid 
        container 
        spacing={2} 
        sx={{ width: '100%' }}
        columns={{ xs: 6, sm: 12, md: 12 }}
      >
        <Suspense fallback={<div>Carregando produtos...</div>}>
          {produtosPaginaAtual.map((produto, index) => (
            <Grid 
              item 
              xs={3}
              sm={4}
              key={index}
            >
              <Item>
                <CardProduto produto={produto} index={index} />
              </Item>
            </Grid>
          ))}
        </Suspense>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Stack spacing={2}>
          <Pagination
            count={totalPaginas}
            page={paginaAtual}
            onChange={mudarPagina}
            renderItem={renderPaginationItem}
            siblingCount={isMobile ? 0 : 1}
            boundaryCount={isMobile ? 0 : 1}
            color="primary"
            shape="rounded" 
            variant="outlined" 
            size={isMobile ? 'small' : 'medium'}
          />
        </Stack>
      </Box>
    </Box>
  );
}