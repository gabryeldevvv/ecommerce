import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles';
import { ReactLocation, Router } from '@tanstack/react-location';
import { CircularProgress } from '@mui/joy';
import './index.css'

const App = lazy(() => import('./pages/App'));
const Home = lazy(() => import('./pages/Home'));
const Busca = lazy(() => import('./pages/Busca'));
const Produto = lazy(() => import('./pages/Produto'));
const Checkout = lazy(() => import('./pages/Checkout'));

const location = new ReactLocation();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <Suspense fallback={
        <div role="alert" 
            aria-live="polite"
            style={{
              display: 'grid',
              placeItems: 'center',
              height: '100vh'
            }}
        >
          <CircularProgress />
        </div>
        }>
        <Router
          location={location}
          routes={[
            // { path: '/', element: <App /> },
            { path: '/', element: <Home /> },
            { path: '/busca', element: <Busca /> },
            { path: '/produto', element: <Produto /> },
            { path: '/checkout', element: <Checkout /> },
          ]}
        />
      </Suspense>
    </StyledEngineProvider>
  </StrictMode>
)
