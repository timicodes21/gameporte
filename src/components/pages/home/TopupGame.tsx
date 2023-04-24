import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";

const TopupGame = () => {
  return (
    <Box className={styles.topUpGameContainer}>
      <PageContainer>
        <Box>
          <Box className="imageContainer">
            <Image
              src="/assets/images/topup_background.svg"
              alt="Background"
              fill
            />
            {/* <Typography className="font-56 font-700">
              Top up Game vouchers on Porte shop
            </Typography> */}
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
};

export default TopupGame;
