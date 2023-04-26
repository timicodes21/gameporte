import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from '@/styles/Home.module.css';
import PageContainer from '@/components/layout/PageContainer';
import HowItWorksCard from '@/components/cards/HowItWorksCard';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <Box className={styles.howItWorksContainer}>
      <PageContainer paddingVertical>
        <Box className="d-flex flex-column justify-center items-center">
          <Typography
            className="text-center font-56 font-700"
            sx={{ color: 'info.main' }}
          >
            How it Works
          </Typography>
          <Typography
            className="text-center font-20 font-500"
            sx={{ color: 'info.A200', maxWidth: '600px' }}
          >
            Earn cash/crypto in minutes playing the games you love. Learn how it
            works (5 Easy Steps).
          </Typography>
        </Box>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4} data-aos="slide-up">
            <HowItWorksCard
              step={1}
              header="Create an account"
              text="Provide your full name, username, valid email address and input a secure password for your account."
              image={
                <Box className="text-center">
                  <Image
                    alt="step_1_image"
                    src="/assets/images/step_1_icon.svg"
                    width={257}
                    height={200}
                  />
                </Box>
              }
            />
          </Grid>
          <Grid item xs={12} md={4} data-aos="slide-up">
            <HowItWorksCard
              step={2}
              header="Fund your Account"
              text="Fund your account using our digital wallet system to get in on the action."
              image={
                <Box className="text-center">
                  <Image
                    alt="step_2_image"
                    src="/assets/images/step_2_icon.svg"
                    width={285}
                    height={200}
                  />
                </Box>
              }
            />
          </Grid>
          <Grid item xs={12} md={4} data-aos="slide-up">
            <HowItWorksCard
              step={3}
              header="Create/Join a Team or go Solo"
              text="Gameporte gives you the power to create your own team or join an existing one."
              image={<Box className="text-center pad-image3"></Box>}
            />
          </Grid>
          <Grid item xs={12} md={6} data-aos="slide-up">
            <HowItWorksCard
              step={4}
              header="Create/Join a Match or Tournament"
              text="Create a challenge or subscribe to our free or paid tournaments."
              image={
                <Box className="imageContainer">
                  <Image
                    alt="step_4_image"
                    src="/assets/images/step_4_icon.svg"
                    fill
                  />
                </Box>
              }
            />
          </Grid>
          <Grid item xs={12} md={6} data-aos="slide-up">
            <HowItWorksCard
              step={5}
              header="Play and Earn"
              text="Link up with your opponent online. Play and report your results, the winner receives the reward."
              image={<Box className="text-center pad-image"></Box>}
            />
          </Grid>
        </Grid>
      </PageContainer>
    </Box>
  );
};

export default HowItWorks;
