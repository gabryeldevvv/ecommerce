import React from 'react';
import { GridWrapper, GridItem } from '../styles/GridWrapper';

const Home = () => {
  return (
    <div style={{
      fontFamily: 'sans-serif',
      background: '#f8f6ef',
      color: '#163d8c',
      padding: '20px'
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        border: '2px solid #163d8c',
        padding: '10px 20px',
        marginBottom: '20px'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>SNEAKERS</div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{
            textDecoration: 'none',
            color: '#163d8c',
            fontWeight: 'bold',
            border: '1px solid #163d8c',
            padding: '5px 10px'
          }}>Home</a>
          <a href="#" style={{
            textDecoration: 'none',
            color: '#163d8c',
            fontWeight: 'bold',
            border: '1px solid #163d8c',
            padding: '5px 10px'
          }}>Shop</a>
          <a href="#" style={{
            textDecoration: 'none',
            color: '#163d8c',
            fontWeight: 'bold',
            border: '1px solid #163d8c',
            padding: '5px 10px'
          }}>About</a>
          <a href="#" style={{
            textDecoration: 'none',
            color: '#163d8c',
            fontWeight: 'bold',
            border: '1px solid #163d8c',
            padding: '5px 10px'
          }}>Contact</a>
        </nav>
      </header>

      {/* New Arrivals Section */}
      <GridWrapper gap={20} style={{
        border: '2px solid #163d8c',
        padding: '30px',
        marginBottom: '20px'
      }}>
        <GridItem xs={12} md={6}>
          <div>
            <h1 style={{
              fontSize: '3rem',
              lineHeight: '1.1',
              fontWeight: '800'
            }}>NEW<br />ARRIVALS</h1>
            <button style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontWeight: 'bold',
              border: '2px solid #163d8c',
              background: 'transparent',
              cursor: 'pointer'
            }}>SHOP NOW</button>
          </div>
        </GridItem>
        <GridItem xs={12} md={6}>
          <div style={{
            border: '2px solid #163d8c',
            minHeight: '150px'
          }}></div>
        </GridItem>
      </GridWrapper>

      {/* Best Sellers + Sale Section */}
      <GridWrapper gap={20} style={{
        border: '2px solid #163d8c',
        padding: '20px',
        marginBottom: '20px'
      }}>
        <GridItem xs={12} lg={8}>
          <div>
            <h2 style={{ fontWeight: '800', marginBottom: '10px' }}>BEST SELLERS</h2>
            <GridWrapper gap={20}>
              <GridItem xs={12} sm={6}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{
                    width: '120px',
                    height: '80px',
                    border: '2px solid #163d8c'
                  }}></div>
                  <p>Best Sellers<br /><strong>$5.30</strong></p>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{
                    width: '120px',
                    height: '80px',
                    border: '2px solid #163d8c'
                  }}></div>
                  <p>Shom Sellers<br /><strong>$5.30</strong></p>
                </div>
              </GridItem>
            </GridWrapper>
          </div>
        </GridItem>
        <GridItem xs={12} lg={4} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderLeft: '2px solid #163d8c',
          textAlign: 'center'
        }}>
          <h2 style={{ fontWeight: '800', fontSize: '1.5rem' }}>
            SALE<br /><span>UP TO</span><br /><strong style={{ fontSize: '2.5rem' }}>50%</strong><br />OFF
          </h2>
        </GridItem>
      </GridWrapper>

      {/* Latest Trends Section */}
      <div style={{
        border: '2px solid #163d8c',
        padding: '20px'
      }}>
        <h2 style={{ fontWeight: '800', marginBottom: '20px' }}>LATEST TRENDS</h2>
        <GridWrapper gap={20}>
          <GridItem xs={6} sm={4} md={3} lg={2}>
            <div style={{
              border: '2px solid #163d8c',
              height: '100px'
            }}></div>
          </GridItem>
          <GridItem xs={6} sm={4} md={3} lg={2}>
            <div style={{
              border: '2px solid #163d8c',
              height: '100px'
            }}></div>
          </GridItem>
          <GridItem xs={6} sm={4} md={3} lg={2}>
            <div style={{
              border: '2px solid #163d8c',
              height: '100px'
            }}></div>
          </GridItem>
          <GridItem xs={6} sm={4} md={3} lg={2}>
            <div style={{
              border: '2px solid #163d8c',
              height: '100px'
            }}></div>
          </GridItem>
          <GridItem xs={6} sm={4} md={3} lg={2}>
            <div style={{
              border: '2px solid #163d8c',
              height: '100px'
            }}></div>
          </GridItem>
          <GridItem xs={6} sm={4} md={3} lg={2}>
            <div style={{
              border: '2px solid #163d8c',
              height: '100px'
            }}></div>
          </GridItem>
        </GridWrapper>
      </div>
    </div>
  );
};

export default Home;