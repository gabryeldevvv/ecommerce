import React, { useRef } from 'react';
import CardProduto from '../components/CardProduto';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './CardSlider.css';
import { Box } from '@mui/joy';

const CardSlider = ( { produtos } ) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const { current } = containerRef;
    const scrollAmount = 300; // ajustável conforme o tamanho do card

    if (current) {
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <div className="slider-container">
      <ArrowBackIosIcon className="nav-button left" onClick={() => scroll('left')}></ArrowBackIosIcon>
      <div className="cards-wrapper" ref={containerRef}>
        {produtos.map((produto, index) => (
          <Box key={index} sx={{ minWidth: {xs:'300px', sm:'300px', lg:'300px'}}}>
            <CardProduto produto={produto} />
          </Box>
        ))}
      </div>
      <ArrowForwardIosIcon className="nav-button right" onClick={() => scroll('right')}>&gt;</ArrowForwardIosIcon>
    </div>
  );
};

export default CardSlider;
