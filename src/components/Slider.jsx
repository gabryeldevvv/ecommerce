import React, { useState, useEffect, useCallback } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Typography  } from '@mui/joy';
import { informativos } from '../data/data';

import './Slider.css';

function Slider() {
  const [slideAtual, setSlideAtual] = useState(0);

  // Função para avançar para o próximo slide (memoizada com useCallback)
  const proximoSlide = useCallback(() => {
    setSlideAtual((prev) => (prev + 1) % informativos.length);
  }, [informativos.length]);

  // Função para voltar ao slide anterior (memoizada com useCallback)
  const slideAnterior = useCallback(() => {
    setSlideAtual((prev) => (prev === 0 ? informativos.length - 1 : prev - 1));
  }, [informativos.length]);

  // Efeito para transição automática
  useEffect(() => {
    const intervalo = setInterval(() => {
      proximoSlide();
    }, 5000); // Muda de slide a cada 5 segundos

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
  }, [slideAtual, proximoSlide]);

  return (
    <div className="container">
      <div className="content">
        {/* Coluna esquerda: botão de slide anterior */}
        <div className="column left">
          <ArrowBackIosIcon
            className="seta esquerda"
            onClick={slideAnterior}
            aria-label="Slide anterior"
          >
          </ArrowBackIosIcon>
        </div>

        {/* Coluna central: slide atual */}
        <div className="column center">
          <div className="slide">
            <div className="texto-slide">
              <Typography sx={{ fontSize: {xs:'xs', sm:'sm', md:'md', lg:'lg'}, fontWeight: '600' }}>{informativos[slideAtual].texto}</Typography>
            </div>
          </div>
        </div>

        {/* Coluna direita: botão de próximo slide */}
        <div className="column right">
          <ArrowForwardIosIcon
            className="seta direita"
            onClick={proximoSlide}
            aria-label="Próximo slide"
          >
          </ArrowForwardIosIcon>
        </div>
      </div>
    </div>
  );
}

export default Slider;