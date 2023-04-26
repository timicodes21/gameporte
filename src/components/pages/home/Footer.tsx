import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from '@/styles/Home.module.css';
import PageContainer from '@/components/layout/PageContainer';
import CustomButton from '@/components/buttons/CustomButton';
import Link from 'next/link';
import Image from 'next/image';
import { socialMediaLinks } from '@/data';

const Footer = () => {
  return (
    <Box>
      <Box className={styles.footerBackground}>
        <PageContainer paddingVertical>
          <Box
            className="d-flex flex-warp items-center justify-center"
            // sx={{
            //   mx: { xs: 1, md: 2, lg: 10 },
            //   pb: { xs: 2, md: 5 },
            //   borderBottom: '1px solid #132867',
            // }}
          >
            {/* Links */}
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Grid item xs={4} md={2}>
                <Link href="/about">
                  <CustomButton variant="main">About us</CustomButton>
                </Link>
              </Grid>
              <Grid item xs={4} md={2}>
                <Link href="/faq">
                  <CustomButton variant="main">FAQ</CustomButton>
                </Link>
              </Grid>
              <Grid item xs={4} md={2}>
                <Link href="/privacy">
                  <CustomButton variant="main">Privacy</CustomButton>
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="/terms">
                  <CustomButton variant="main">Terms & Conditions</CustomButton>
                </Link>
              </Grid>
              <Grid item xs={6} md={2}>
                <Link href="/about">
                  <CustomButton variant="main">Contact us</CustomButton>
                </Link>
              </Grid>
              <Grid item xs={6} md={2}>
                <Link href="/about">
                  <CustomButton variant="main">Sponsorship</CustomButton>
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Box className="d-flex flex-column justify-center items-center">
            <Box sx={{ mt: { xs: 3, md: 5 } }}>
              <Box className="d-flex items-center">
                <Box>
                  <Image
                    src="/assets/icons/logo_icon.svg"
                    alt="logo_icon"
                    width={41}
                    height={28}
                  />
                </Box>
                <Box>
                  <Image
                    src="/assets/icons/logo_text.svg"
                    alt="logo_text"
                    width={162}
                    height={32}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              className="d-flex flex-warp items-center justify-center"
              sx={{
                mx: { xs: 1, md: 2, lg: 10 },
                mt: { xs: 2, md: 5 },
              }}
            >
              {socialMediaLinks.map((item, index) => (
                <Box sx={{ mx: 2 }} key={index}>
                  <Link href={item?.link}>
                    <Image
                      src={item?.src}
                      alt="social_media_logo"
                      width={item?.width}
                      height={item?.height}
                    />
                  </Link>
                </Box>
              ))}
            </Box>
            <Box className="d-flex justify-center items-center" sx={{ mt: 2 }}>
              <Image
                src="/assets/icons/copyright_icon.svg"
                alt="copyright_logo"
                width={24}
                height={24}
              />
              <Typography
                className="font-20 font-600"
                sx={{ color: 'info.main', ml: 1 }}
              >
                Gameporte Interactive Inc.
              </Typography>
            </Box>
          </Box>
        </PageContainer>
      </Box>
      <Box className={styles.footer2Background}>
        <PageContainer paddingVertical>
          <Typography
            className="font-14 font-400 text-center"
            sx={{ color: 'info.dark' }}
          >
            Gameporte is not endorsed by, directly affiliated with, maintained
            or sponsored by Apple Inc, Electronic Arts, Activision Blizzard,
            Take-Two Interactive, Microsoft, Xbox, Sony, PlayStation or Epic
            Games. All content, games titles, trade names and/or trade dress,
            trademarks, artwork and associated imagery are trademarks and/or
            copyright material of their respective owners.
          </Typography>
        </PageContainer>
      </Box>
    </Box>
  );
};

export default Footer;
