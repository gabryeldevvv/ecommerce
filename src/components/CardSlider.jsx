import React, { useRef } from 'react';
import CardProduto from '../components/CardProduto';
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
      <button className="nav-button left" onClick={() => scroll('left')}>&lt;</button>
      <div className="cards-wrapper" ref={containerRef}>
        {produtos.map((produto, index) => (
          <Box key={index} sx={{ minWidth: '175px' }}>
            <CardProduto produto={produto} />
          </Box>
        ))}
      </div>
      <button className="nav-button right" onClick={() => scroll('right')}>&gt;</button>
    </div>
  );
};

export default CardSlider;
