import { React, lazy } from 'react';
import { Box, Typography } from '@mui/joy';
import { GridItem, GridWrapper } from "../styles/GridWrapper";
import Banner1 from "../assets/banner1.jpg";
import Banner1Mobile from "../assets/banner1mobile.jpg";
import Banner1Desktop from "../assets/banner1desktop.jpg";
import Banner2Desktop from "../assets/banner2desktop.jpg";
import Banner2 from "../assets/banner2.png";
import Banner3 from "../assets/banner3.png";
import Banner4 from "../assets/banner4.png";
import Banner5 from "../assets/banner5.jpg";
import Banner7 from "../assets/banner7.jpg";
import Banner9 from "../assets/banner9.jpg";
import "../styles/grid-system.css";
import CardSlider from '../components/CardSlider';
import { produtos } from '../data/data';
import { display, height, maxHeight } from '@mui/system';

const Header = lazy(() => import('../components/Header'));
const Slider = lazy(() => import('../components/Slider'));

export default function App() {
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
                      srcSet={Banner1Mobile}  // Substitua por sua imagem mobile
                    />
                    {/* Para telas 600px e maiores */}
                    <source 
                      media="(min-width: 600px)" 
                      srcSet={Banner1Desktop}
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
              <GridItem xs={12} >
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
                    Descubra os melhores tênis para{' '}
                    <Box component="span" sx={{ whiteSpace: { xs: 'normal', sm: 'nowrap' } }}>
                      estilo
                    </Box>
                    , conforto e performance.
                    <Box component="br" sx={{ display: { xs: 'none', sm: 'inline' } }} />
                    {' '}
                    Com promoções exclusivas e lançamentos das marcas que você ama.
                  </Typography>
                </Box>
              </GridItem>

              {/* GRADE DE BANNERS */}
              <GridItem xs={6} sm={4}>
                <Box sx={{maxHeight: '690px' }}>
                  <img 
                    src={Banner2Desktop}
                    srcSet={Banner2Desktop}
                    loading="lazy"
                    alt=""
                    style={{ width: "100%", maxHeight: '690px' }}                
                  />
                </Box>
              </GridItem>
              <GridItem xs={6} sm={4}>
                <Box sx={{ maxWidth: '460px'}}>
                  <img 
                    src={Banner3}
                    srcSet={Banner3}
                    loading="lazy"
                    alt=""
                    style={{ width: "100%" }}                
                  />
                </Box>
              </GridItem>
              <GridItem xs={4} hideXs>
                <Box sx={{ maxWidth: '460px' }}>
                  <img 
                    src={Banner4}
                    srcSet={Banner4}
                    loading="lazy"
                    alt=""
                    style={{ width: "100%"}}                
                  />
                </Box>
              </GridItem>

              {/* SLIDER DE PRODUTOS */}
              <GridItem xs={12}  >
                <Box sx={{ backgroundColor: '#fcfcfc', maxWidth: '1365px', pb:'4rem'}}>
                  <Typography level='h2'  sx={{ fontSize: {xs: '1.4rem', sm:'1.6rem', md:'2rem'} , py: '2rem', pl: '2.3rem'}}>Novidades em destaque</Typography>
                  <CardSlider produtos={produtos} />
                </Box>
              </GridItem>

              {/* BANNER */}
              <GridItem xs={12}>
                <Box>
                  <img 
                    src={Banner5}
                    srcSet={Banner5}
                    loading="lazy"
                    alt=""
                    style={{ width: "100%", maxWidth: '1365px' }}        
                  />
                </Box>
              </GridItem>

              {/* GRADE DE BANNERS */}
              <GridItem xs={8}>
                <Box>
                  <img 
                    src={Banner7}
                    srcSet={Banner7}
                    loading="lazy"
                    alt=""
                    style={{ width: "100%", maxWidth: '900px' }}        
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
                    style={{ width: "100%", maxWidth: '435px' }}        
                  />
                </Box>
              </GridItem>
            </GridWrapper>
          </Box>
      </Box>
    </div>
  );
}