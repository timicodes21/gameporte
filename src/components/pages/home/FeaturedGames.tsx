import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/Home.module.css";
import PageContainer from "@/components/layout/PageContainer";
import Image from "next/image";

const FeaturedGames = () => {
  return (
    <Box className={styles.featuredGamesContainer}>
      <PageContainer paddingVertical>
        <Box
          className={styles.featuredGamesBackgroundImage}
          sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, md: 4 } }}
        >
          <Typography
            className="font-40 font-700 text-center"
            sx={{ color: "info.main" }}
          >
            Featured Games
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6} lg={3}>
              <Box className="imageContainer">
                <Image
                  alt="featured_games"
                  src="/assets/images/feature_games_1.svg"
                  fill
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box className="imageContainer">
                <Image
                  alt="featured_games"
                  src="/assets/images/feature_games_2.svg"
                  fill
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box className="imageContainer">
                <Image
                  alt="featured_games"
                  src="/assets/images/feature_games_3.svg"
                  fill
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box className="imageContainer">
                <Image
                  alt="featured_games"
                  src="/assets/images/feature_games_4.svg"
                  fill
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </Box>
  );
};

export default FeaturedGames;
