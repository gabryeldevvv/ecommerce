import { React, lazy } from 'react';
import { Box, Typography } from '@mui/joy';
import { GridItem, GridWrapper } from "../styles/GridWrapper";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PaymentIcon from '@mui/icons-material/Payment';
import PixIcon from '@mui/icons-material/Pix';
import Banner1 from "../assets/banner1.jpg";
import Banner1Mobile2 from "../assets/banner1mobile-2.jpg";
import Banner1Desktop2 from "../assets/banner1desktop-2.jpg";
import Banner2Desktop from "../assets/banner2desktop.jpg";
import Banner4 from "../assets/banner4desktop.jpg";
import "../styles/grid-system.css";
import CardSlider from '../components/CardSlider';

import { useCategoriasComProdutos } from "../hooks/useCategoriaComProdutos";

const Header = lazy(() => import('../components/Header'));
const Slider = lazy(() => import('../components/Slider'));

export default function App() {
  const { data: categoriaProdutos = [], isLoading, error } = useCategoriasComProdutos();
  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar dados</div>;

  return (
      <div className="page-builder">
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fcfcfc'}}>
          <Box>
            <Header/>
          </Box>
          <Box >
            <Slider/>
          </Box>
          <Box sx={{ px: 0, margin: '0 auto', backgroundColor: '#F5F5F5'}}>
            <GridWrapper>
              {/* BANNER */}
              <GridItem xs={12}>
                <Box sx={{  maxWidth: '1390px' }} >
                  <picture>
                    {/* Para telas menores que 600px */}
                    <source 
                      media="(max-width: 599px)" 
                      srcSet={Banner1Mobile2}  // Substitua por sua imagem mobile
                    />
                    {/* Para telas 600px e maiores */}
                    <source 
                      media="(min-width: 600px)" 
                      srcSet={Banner1Desktop2}
                    />
                    {/* Fallback para navegadores que não suportam picture */}
                    <img 
                      src={Banner1}
                      loading="lazy"
                      alt="Banner promocional"
                      style={{ width: "100%" }}        
                    />
                  </picture>
                </Box>
              </GridItem>
              
              {/* TEXTO INFORMATIVO */}
              {/* <GridItem xs={12} >
                <Box
                  sx={{
                    maxWidth: 800,
                    mx: 'auto',
                    p: 5,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    level="h1"
                    sx={{
                      fontSize: {
                        xs: '1.8rem',
                        sm: '2.5rem',
                      },
                      fontWeight: 'bold',
                      lineHeight: 1.2,
                    }}
                  >
                    Tênis Incríveis
                    <Box component="br" sx={{ display: { xs: 'inline', sm: 'none' } }} />
                    {' '}
                    para Cada Passo da Sua Jornada
                  </Typography>

                  <Typography
                    level="body-lg"
                    sx={{
                      mt: 2,
                      fontSize: {
                        xs: '1rem',
                        sm: '1.2rem',
                      },
                      lineHeight: 1.6,
                    }}
                  >
                    Descubra qual o melhor tênis para{' '}
                    <Box component="span" sx={{ whiteSpace: { xs: 'normal', sm: 'nowrap' } }}>
                      estilo
                    </Box>
                    , conforto e performance.
                    <Box component="br" sx={{ display: { xs: 'none', sm: 'inline' } }} />
                    {' '}
                    Com promoções exclusivas e lançamentos das marcas que você ama.
                  </Typography>
                </Box>
              </GridItem> */}

              {/* SLIDER DE PRODUTOS */}
              <GridItem xs={12}  >
                <Box sx={{ backgroundColor: '#fcfcfc', maxWidth: '1395px', pb:'4rem'}}>
                  <Typography level='h2'  sx={{ fontSize: {xs: '1.4rem', sm:'1.6rem', md:'2rem'} , py: '2rem', pl: '2.3rem'}}>Em destaque</Typography>
                  <CardSlider produtos={categoriaProdutos[1].produtos} />
                </Box>
              </GridItem>

              {/* GRADE DE BANNERS */}
              {/* <GridItem xs={12} sm={6} hideXs>
                <Box sx={{maxHeight: '690px' }}>
                  <img 
                    src={Banner2Desktop}
                    srcSet={Banner2Desktop}
                    loading="lazy"
                    alt=""
                    style={{ width: "100%", maxHeight: '690px' }}                
                  />
                </Box>
              </GridItem> */}
              {/* <GridItem xs={12} sm={4}>
                <Box sx={{ maxWidth: '460px'}}>
                  <img 
                    src={Banner3}
                    srcSet={Banner3}
                    loading="lazy"
                    alt=""
                    style={{ width: "100%" }}                
                  />
                </Box>
              </GridItem> */}
              {/* <GridItem xs={12} sm={6}>
                <Box>
                  <img 
                    src={Banner4}
                    srcSet={Banner4}
                    loading="lazy"
                    alt=""
                    style={{ width: "100%"}}                
                  />
                </Box>
              </GridItem> */}

              <GridItem xs={12}  >
                <Box sx={{ backgroundColor: '#fcfcfc', maxWidth: '1395px', pb:'4rem'}}>
                  <Typography level='h2'  sx={{ fontSize: {xs: '1.4rem', sm:'1.6rem', md:'2rem'} , py: '2rem', pl: '2.3rem'}}>Tênis esportivos</Typography>
                  <CardSlider produtos={categoriaProdutos[2].produtos} />
                </Box>
              </GridItem>

              <GridItem xs={12}  >
                <Box sx={{ backgroundColor: '#fcfcfc', maxWidth: '1395px', pb:'4rem'}}>
                  <Typography level='h2'  sx={{ fontSize: {xs: '1.4rem', sm:'1.6rem', md:'2rem'} , py: '2rem', pl: '2.3rem'}}>Tênis casuais</Typography>
                  <CardSlider produtos={categoriaProdutos[1].produtos} />
                </Box>
              </GridItem>

            

              

              {/* GRADE DE BANNERS */}
              {/* <GridItem xs={8}>
                <Box>
                  <img 
                    src={Banner7}
                    srcSet={Banner7}
                    loading="lazy"
                    alt=""
                    style={{ width: "100%" }}        
                  />
                </Box>
              </GridItem>
              <GridItem xs={4}>
                <Box>
                  <img 
                    src={Banner9}
                    srcSet={Banner9}
                    loading="lazy"
                    alt=""
                    style={{ width: "100%" }}        
                  />
                </Box>
              </GridItem> */}
            </GridWrapper>
          </Box>
          {/* <Box sx={{ px: 0, margin: '0 auto', backgroundColor: '#F5F5F5'}}>
            <GridWrapper>
                <GridItem xs={12}  >
                  <Box sx={{ backgroundColor: '#fcfcfc', maxWidth: '1395px', pb:'4rem'}}>
                    <Typography level='h2'  sx={{ fontSize: {xs: '1.4rem', sm:'1.6rem', md:'2rem'} , py: '2rem', pl: '2.3rem'}}>Destaques em vendas</Typography>
                    <CardSlider produtos={produtos} />
                  </Box>
                </GridItem>
              </GridWrapper>
          </Box> */}
          <Box sx={{ py:'3rem', px:'2rem', color: 'WHITE', backgroundColor: '#182535', }}>
            <Box sx={{maxWidth:'1390px', margin:'0 auto'}}>
              <GridWrapper >
                <GridItem xs={12} sm={6} lg={3}>
                  <Box sx={{mr:5}}>
                    <br />
                    <Typography level='h4' sx={{color:'white'}}>SHOES IMPORTS</Typography>
                    <br />
                    <Typography level='body' sx={{color:'#CFCEC9', py:'5px'}}>Sua loja favorita de roupas e calçados. Produtos de qualidade.</Typography>
                    <br />
                    <Box sx={{ display:'grid', gridAutoFlow:'column', justifyContent:'start', gap:4 }}>
                      <InstagramIcon/>
                      <FacebookIcon/>
                      <TwitterIcon/>
                    </Box>
                  </Box>
                </GridItem>
                <GridItem xs={12} sm={6} lg={3}  >
                  <Box>
                    <br />
                    <Typography level='h4' sx={{color:'white'}}>LINKS ÚTEIS</Typography>
                    <br />
                    <Typography level='body' sx={{color:'#CFCEC9', py:'5px'}}>Sobre Nós</Typography>
                    <Typography level='body' sx={{color:'#CFCEC9', py:'5px'}}>Perguntas Frequentes</Typography>
                    <Typography level='body' sx={{color:'#CFCEC9', py:'5px'}}>Termos e Condições</Typography>
                    <Typography level='body' sx={{color:'#CFCEC9', py:'5px'}}>Política de Privacidade</Typography>
                    <Typography level='body' sx={{color:'#CFCEC9', py:'5px'}}>Trocas e Devoluções</Typography>
                  </Box>
                </GridItem>
                <GridItem xs={12} sm={6} lg={3}  >
                  <Box>
                    <br />
                    <Typography level='h4' sx={{color:'white'}}>CATEGORIAS</Typography>
                    <br />
                    <Typography level='body' sx={{color:'#CFCEC9', py:'5px'}}>Tênis Esportivos</Typography>
                    <Typography level='body' sx={{color:'#CFCEC9', py:'5px'}}>Tênis Casuais</Typography>
                  </Box>
                </GridItem>
                <GridItem xs={12} sm={6} lg={3}>
                  <Box>
                    <br />
                    <Typography level='h4' sx={{color:'white'}}>CONTATO</Typography>
                    <br />
                    <Typography level='body' sx={{color:'#CFCEC9', py:'5px'}}>endereco</Typography>
                    <Typography level='body' sx={{color:'#CFCEC9', py:'5px'}}>telefone</Typography>
                    <Typography level='body' sx={{color:'#CFCEC9', py:'5px'}}>email</Typography>
                    <br />
                    <Typography level='h4' sx={{color:'white'}}>FORMAS DE PAGAMENTO</Typography>
                    <Box sx={{ display:'grid', gridAutoFlow:'column', justifyContent:'start', gap:1 }}>
                      <PaymentIcon/>
                      <PixIcon/>
                    </Box>
                  </Box>
                </GridItem>
              </GridWrapper>
            </Box>
          </Box>
        </Box>
      </div>
  );
}