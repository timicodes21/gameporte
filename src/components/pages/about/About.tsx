import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/About.module.css";
import PageContainer from "@/components/layout/PageContainer";
import Image from "next/image";

const About = () => {
  return (
    <Box className={styles.aboutContainer}>
      <Box className={styles.phoneBackground}>
        <Image
          alt="phone_background"
          src="/assets/images/phone_background.png"
          fill
        />
      </Box>
      <PageContainer paddingVertical>
        <Box>
          <Grid container>
            <Grid item xs={12} md={8} lg={6}>
              <Typography
                className="font-24 font-700"
                sx={{ color: "primary.dark" }}
              >
                About us
              </Typography>
              <Box className="d-flex items-end" sx={{ mt: 2 }}>
                <Typography
                  className="font-72 font-700"
                  sx={{ color: "info.main", lineHeight: "72px" }}
                >
                  Hey, we are Gameporte.
                </Typography>
                <Box sx={{ marginLeft: "-150px" }}>
                  <Image
                    alt="phone_background"
                    src="/assets/images/gamepad.svg"
                    width={62}
                    height={60}
                  />
                </Box>
              </Box>
              <Typography
                className="font-36 font-600"
                sx={{ color: "info.dark", lineHeight: "50px", mt: 5 }}
              >
                Gameporte is a community-based platform for gamers to compete
                and get rewarded.
              </Typography>
              <Typography
                className="font-20 font-500"
                sx={{
                  color: "info.dark",
                  lineHeight: "28px",
                  mt: 5,
                }}
              >
                We are on a mission to build, connect and deliver the best
                solutions to African communities through creative thinking and
                innovation, with the use of technology, and provide Premium and
                pleasurable experience that harnesses their potentials
                <br />
                <br />
                As a company we know that our business is only as great as our
                service to our customers. We strive for daily improvements in
                our lives so that we can provide satisfying and memorable
                experiences to our customers.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </Box>
  );
};

export default About;
