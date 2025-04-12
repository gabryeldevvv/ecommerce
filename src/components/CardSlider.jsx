import React, { useRef } from 'react';
import CardProduto from '../components/CardProduto';
import './CardSlider.css';
import { Box } from '@mui/joy';

const cards = [
  { id: 1, title: 'Card 1', description: 'Descrição do Card 1' },
  { id: 2, title: 'Card 2', description: 'Descrição do Card 2' },
  { id: 3, title: 'Card 3', description: 'Descrição do Card 3' },
  { id: 4, title: 'Card 4', description: 'Descrição do Card 4' },
  { id: 5, title: 'Card 5', description: 'Descrição do Card 5' },
];

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
          <Box key={index} sx={{ minWidth: '250px' }}>
            <CardProduto produto={produto} />
          </Box>
        ))}
      </div>
      <button className="nav-button right" onClick={() => scroll('right')}>&gt;</button>
    </div>
  );
};

export default CardSlider;
