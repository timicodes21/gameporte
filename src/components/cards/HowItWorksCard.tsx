import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import styles from "@/styles/Component.module.css";

interface IProps {
  step: number;
  header: string;
  text: string;
  image: ReactNode;
}

const HowItWorksCard: React.FC<IProps> = ({ step, header, text, image }) => {
  return (
    <Box
      className={styles.howItWorksCardContainer}
      sx={{ pt: { xs: 1, md: 3 }, height: "500px" }}
    >
      <Box sx={{ px: { xs: 1, md: 3 }, mb: 2 }}>
        <Box className={styles.stepTextContainer} sx={{ py: 1 }}>
          <Typography sx={{ color: "info.main" }} className="font-20 font-700">
            STEP {step}
          </Typography>
        </Box>
        <Typography className="font-32 font-700" sx={{ color: "info.main" }}>
          {header}
        </Typography>
        <Typography
          className="font-18 font-500"
          sx={{ color: "info.A200", mt: 1 }}
        >
          {text}
        </Typography>
      </Box>
      {image}
    </Box>
  );
};

export default HowItWorksCard;
