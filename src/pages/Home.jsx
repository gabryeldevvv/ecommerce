import React from 'react';
import { produtos } from '../data/data';
import { Box, Typography } from '@mui/joy';
import { GridItem, GridWrapper } from "../styles/GridWrapper";
import CardSlider from '../components/CardSlider';

const Home = () => {
  return (
    <Box sx={{ px: 0, margin: '0 auto', backgroundColor: '#F5F5F5'}}>
      <GridWrapper>
          <GridItem xs={12}  >
            <Box sx={{ backgroundColor: '#fcfcfc', maxWidth: '1395px', pb:'4rem'}}>
              <Typography level='h2'  sx={{ fontSize: {xs: '1.4rem', sm:'1.6rem', md:'2rem'} , py: '2rem', pl: '2.3rem'}}>Destaques em vendas</Typography>
              <CardSlider produtos={produtos} />
            </Box>
          </GridItem>
        </GridWrapper>
    </Box>
  );
};

export default Home;