import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from '@/styles/Home.module.css';
import PageContainer from '@/components/layout/PageContainer';
import JoinUsItemWrapper from '@/components/wrappers/JoinUsItemWrapper';
import Image from 'next/image';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { BsApple } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';
import styles2 from '@/styles/Component.module.css';
import WaitListModal from '@/components/modals/WaitListModal';

const JoinUs = () => {
  const [counterOn, setCounterOn] = React.useState(false);
  const [show, setShow] = React.useState(false);
  return (
    // @ts-ignore
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <Box className={styles.joinUsContainer}>
        <PageContainer paddingVertical>
          <Box
            className={styles.joinUsBackground}
            sx={{ py: { xs: 1, md: 2 } }}
          >
            <Box className="d-flex flex-column justify-center items-center">
              <Typography
                className="text-center font-40 font-700"
                sx={{ color: 'info.main', maxWidth: '700px', padding: '1rem' }}
              >
                Join us as we create Africa’s largest reward system for gamers
              </Typography>
            </Box>
            <Grid
              container
              sx={{ mt: 3, px: { xs: 1, md: 3 } }}
              spacing={3}
              style={{
                color: '#5DDAFF',
              }}
            >
              <Grid item xs={12} md={6} lg={3}>
                <div className="text-center border-right">
                  <div>
                    <CountUp
                      className="font-56 font-700 "
                      start={0}
                      end={counterOn ? 5000 : 0}
                      duration={2}
                      delay={0}
                    />
                    <span className="font-56 font-700 ">+</span>
                  </div>
                  <div>
                    <span className="font-32 font-700 ">Gamers</span>
                  </div>
                  <div>
                    <span className="font-20 font-600 ">Community</span>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <div className="text-center border-right">
                  <div>
                    <span className="font-56 font-700 text-altblue">$</span>
                    <CountUp
                      className="font-56 font-700 text-altblue"
                      start={0}
                      end={counterOn ? 7000 : 0}
                      duration={2}
                      delay={0}
                    />
                    <span className="font-56 font-700 text-altblue">+</span>
                  </div>
                  <div>
                    <span className="font-32 font-700 text-white">
                      Cash/Crypto
                    </span>
                  </div>
                  <div>
                    <span className="font-20 font-600 text-white">Rewards</span>
                  </div>
                </div>
              </Grid>{' '}
              <Grid item xs={12} md={6} lg={3}>
                <div className="text-center border-right">
                  <div>
                    <CountUp
                      className="font-56 font-700 text-altblue"
                      start={0}
                      end={counterOn ? 100 : 0}
                      duration={2}
                      delay={0}
                    />
                    <span className="font-56 font-700 text-altblue">+</span>
                  </div>
                  <div>
                    <span className="font-32 font-700 text-white">Matches</span>
                  </div>
                  <div>
                    <span className="font-20 font-600 text-white">Played</span>
                  </div>
                </div>
              </Grid>{' '}
              <Grid item xs={12} md={6} lg={3}>
                <div className="text-center ">
                  <div>
                    <CountUp
                      className="font-56 font-700 text-altblue"
                      start={0}
                      end={counterOn ? 10 : 0}
                      duration={2}
                      delay={0}
                    />
                    <span className="font-56 font-700 text-altblue">+</span>
                  </div>
                  <div>
                    <span className="font-32 font-700 text-white">
                      Competitions
                    </span>
                  </div>
                  <div>
                    <span className="font-20 font-600 text-white">Hosted</span>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </PageContainer>
        <PageContainer paddingVertical>
          <Box
            className={styles.comingSoonBackground}
            sx={{ py: { xs: 1, md: 2 } }}
          >
            <Box className="imageContainer2">
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '3rem',
                  fontWeight: '700',
                }}
              >
                Download the App
              </Typography>
              <Box className={styles2.btnContainer}>
                <div className={styles2.apple2} onClick={() => setShow(true)}>
                  <BsApple style={{ fontSize: '42px' }} />
                  <div>
                    <span className="font-12 font-500">Download on the</span>{' '}
                    <br />
                    <span className="font-16 font-700">App Store</span>
                  </div>
                </div>
                <div className={styles2.play2} onClick={() => setShow(true)}>
                  <FaGooglePlay style={{ fontSize: '42px' }} />
                  <div className="d-flex flex-column ms-2">
                    <span className="font-12 font-500">Get it on</span>
                    <span className="font-16 font-700">Google Play</span>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </PageContainer>
        <WaitListModal show={show} setShow={setShow} />
      </Box>
    </ScrollTrigger>
  );
};

export default JoinUs;
