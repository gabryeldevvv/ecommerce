import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, useTheme } from '@mui/material';
import { lazy } from 'react';

const LogoIcone = lazy(() => import('../assets/LogoIcone'));

const HeaderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(1),
  },
}));

const HeaderColumn = styled(Box)(({ theme }) => ({
  minWidth: 100,
  [theme.breakpoints.down('md')]: {
    minWidth: 'auto',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  paddingLeft: theme.spacing(2),
  paddingTop: theme.spacing(0.5),
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    paddingLeft: 0,
  },
}));

const StepperContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0.5),
  },
}));

const Step = styled(Box)(({ theme, active }) => ({
  textAlign: 'center',
  flexShrink: 0,
  position: 'relative',
  minWidth: 100,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: active ? theme.palette.common.black : theme.palette.grey[400],
    borderRadius: 2,
  },
  [theme.breakpoints.down('md')]: {
    minWidth: 80,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 60,
  },
}));

const StepLabel = styled(Box)(({ theme, active }) => ({
  fontSize: '0.8rem',
  color: active ? theme.palette.common.black : theme.palette.text.secondary,
  margin: `${theme.spacing(0.5)} 0`,
  fontWeight: active ? 'bold' : 'normal',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.6rem',
  },
}));

function HeaderCheckout({ steps, stepSelecionado }) {
  const theme = useTheme();
  
  return (
    <HeaderContainer component="header"  sx={{ 
      maxWidth: '98.6%', // Nunca ultrapassa a largura da tela
    }}>
      <HeaderColumn>
        <LogoContainer  sx={{ml: 6}}>
          <LogoIcone w={100} h="auto" />
        </LogoContainer>
      </HeaderColumn>
      
      <HeaderColumn>
        <StepperContainer>
          {steps.map((step) => (
            <Step 
              key={step.id} 
              active={stepSelecionado === step.id}
            >
              <StepLabel active={stepSelecionado === step.id}>
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </StepperContainer>
      </HeaderColumn>
      
      <HeaderColumn /> {/* Espaçador para alinhamento */}
    </HeaderContainer>
  );
}

export default HeaderCheckout;