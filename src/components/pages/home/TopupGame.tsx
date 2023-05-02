import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from '@/styles/Home.module.css';
import styles2 from '@/styles/Component.module.css';
import Image from 'next/image';
import PageContainer from '@/components/layout/PageContainer';
import Carousel from 'react-material-ui-carousel';
import { CaroselImages } from '@/data';
import { BsApple } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';
import WaitListModal from '@/components/modals/WaitListModal';
import ComingSoon from '@/components/modals/comingSoon';

const TopupGame = () => {
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  return (
    <Box
      sx={{
        backgroundColor: '#030711',
        paddingBottom: '1rem',
        // backgroundColor: 'yellow',
      }}
    >
      <Carousel
        indicators
        animation="slide"
        className="banner"
        sx={{
          width: { xs: '100%', md: '100%', lg: '100%' },
          height: { lg: '80vh', xs: '100vh', md: '100vh' },
          position: 'relative',
        }}
        interval={60000}
        indicatorContainerProps={{
          className: 'indicators',
          style: {},
        }}
        indicatorIconButtonProps={{
          className: 'indicatorButton',
          style: {
            color: ' #1D5E82',
            border: '    1px solid #1D5E82',
            margin: '0 5px',
            bottom: '10px',
            zIndex: 1000,
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: '#02BAF1',
            border: '1px solid #02BAF1 ',
          },
        }}
      >
        {CaroselImages.map((item, index) => (
          <Box key={index}>
            <Image
              alt="design_systems"
              src={item.src}
              fill
              className="bannerImg"
            />
            <Box
              sx={{
                Width: '100%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '3.5rem',
                  fontWeight: '700',
                  color: '#fff',
                  margin: '1rem ',
                }}
                className="bannerTitle"
              >
                {item.title}
                <span
                  style={{
                    fontSize: '3.5rem',
                    fontWeight: '700',
                    color: '#fff',
                  }}
                >
                  {item.title2}
                </span>{' '}
                <span
                  style={{
                    fontSize: '1rem',
                    fontWeight: '400',
                    color: '#fff',
                    display: 'block',
                  }}
                >
                  {item.description}
                </span>
              </Typography>
            </Box>
            {item?.noButton ? (
              <Box
                sx={{
                  position: 'absolute',
                  width: 'fit-content',
                  top: '70%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  className={styles2.apple}
                  onClick={() => setShow2(true)}
                  style={{
                    padding: '1rem 2rem',
                  }}
                >
                  <div className="d-flex justify-content-center">
                    <div>
                      <span className="font-16 font-700">Shop Now</span>
                    </div>
                  </div>
                </div>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#fff',
                  }}
                >
                  Coming Soon..
                </Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  position: 'absolute',
                  width: 'fit-content',
                  top: '70%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div className={styles2.apple} onClick={() => setShow(true)}>
                  <div className="d-flex justify-content-center">
                    <BsApple style={{ fontSize: '42px' }} />
                    <div>
                      <span className="font-12 font-500">Download on the</span>{' '}
                      <br />
                      <span className="font-16 font-700">App Store</span>
                    </div>
                  </div>
                </div>
                <div className={styles2.play} onClick={() => setShow(true)}>
                  <div className="d-flex justify-content-center">
                    <FaGooglePlay style={{ fontSize: '42px' }} />
                    <div className="d-flex flex-column ms-2">
                      <span className="font-12 font-500">Get it on</span>
                      <span className="font-16 font-700">Google Play</span>
                    </div>
                  </div>
                </div>
              </Box>
            )}
          </Box>
        ))}
      </Carousel>
      <WaitListModal show={show} setShow={setShow} />
      <ComingSoon show={show2} setShow={setShow2} />
      <Box className="mobileBack" sx={{ backgroundColor: '#030711' }}>
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#fff',
            textAlign: 'left',
            padding: '2rem 2rem 0 2rem',
            margin: '3rem 0 0 0   ',
          }}
        >
          Get rewarded <br /> playing your <br /> favorite games
        </Typography>
        <Typography
          sx={{
            fontSize: '1rem',
            color: '#fff',
            textAlign: 'left',
            padding: '0 2rem',
          }}
        >
          Take your passion for gaming to another level by earning cash and
          crypto playing the games you love.
        </Typography>
        <Box
          sx={{
            width: 'fit-content',
            margin: '1rem auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div className={styles2.apple} onClick={() => setShow(true)}>
            <div className="d-flex justify-content-center">
              <BsApple style={{ fontSize: '42px' }} />
              <div>
                <span className="font-12 font-500">Download on the</span> <br />
                <span className="font-16 font-700">App Store</span>
              </div>
            </div>
          </div>
          <div className={styles2.play} onClick={() => setShow(true)}>
            <div className="d-flex justify-content-center">
              <FaGooglePlay style={{ fontSize: '42px' }} />
              <div className="d-flex flex-column ms-2">
                <span className="font-12 font-500">Get it on</span>
                <span className="font-16 font-700">Google Play</span>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default TopupGame;
