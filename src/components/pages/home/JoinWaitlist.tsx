import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import JoinWaitlistInput from "@/components/forms/JoinWaitlistInput";

interface IProps {
  border?: boolean;
}

const JoinWaitlist: React.FC<IProps> = ({ border }) => {
  return (
    <Box
      className={styles.joinWaitlistContainer}
      sx={{ borderBottom: border ? "8px solid #000" : "none" }}
    >
      <Box className={styles.joinWaitlistImage}>
        <Image
          alt="image"
          src="/assets/images/join_waitlist_image.svg"
          width={415}
          height={377}
        />
      </Box>
      {/* <Box className={styles.joinWaitlistCircle1}>
        <Image
          alt="image"
          src="/assets/images/join_waitlist_circle_1.svg"
          width={236}
          height={236}
        />
      </Box>
      <Box className={styles.joinWaitlistCircle2}>
        <Image
          alt="image"
          src="/assets/images/join_waitlist_circle_2.svg"
          width={310}
          height={310}
        />
      </Box> */}
      <PageContainer paddingVertical>
        <Box className="d-flex flex-column justify-center items-center">
          <Typography className="font-40 font-700" sx={{ color: "info.A100" }}>
            Join our Waitlist
          </Typography>
          <Typography className="font-20 font-700" sx={{ color: "info.dark" }}>
            Get early access
          </Typography>
          <Box sx={{ mt: 2 }}>
            <JoinWaitlistInput type="email" />
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
};

export default JoinWaitlist;
