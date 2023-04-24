import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/Home.module.css";
import PageContainer from "@/components/layout/PageContainer";
import JoinUsItemWrapper from "@/components/wrappers/JoinUsItemWrapper";
import Image from "next/image";

const JoinUs = () => {
  return (
    <Box className={styles.joinUsContainer}>
      <PageContainer paddingVertical>
        <Box className={styles.joinUsBackground} sx={{ py: { xs: 1, md: 2 } }}>
          <Box className="d-flex flex-column justify-center items-center">
            <Typography
              className="text-center font-40 font-700"
              sx={{ color: "info.main", maxWidth: "700px" }}
            >
              Join us as we create Africa’s largest reward system for gamers
            </Typography>
          </Box>
          <Grid container sx={{ mt: 3, px: { xs: 1, md: 3 } }} spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <JoinUsItemWrapper
                count="1000+"
                title="Discord Members"
                text="Community"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <JoinUsItemWrapper
                count="$1,500"
                title="Cash/Crypto"
                text="paid out"
              />
            </Grid>{" "}
            <Grid item xs={12} md={6} lg={3}>
              <JoinUsItemWrapper count="100" title="Matches" text="Played" />
            </Grid>{" "}
            <Grid item xs={12} md={6} lg={3}>
              <JoinUsItemWrapper
                count="10"
                title="Competitions"
                text="Hosted"
              />
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
      <PageContainer paddingVertical>
        <Box
          className={styles.comingSoonBackground}
          sx={{ py: { xs: 1, md: 2 } }}
        >
          <Box className="imageContainer">
            <Image
              alt="background_image"
              src="/assets/images/coming_soon_background.svg"
              fill
            />
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
};

export default JoinUs;
