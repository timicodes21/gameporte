import { Box, Typography } from "@mui/material";
import React from "react";

interface IProps {
  count: string;
  title: string;
  text: string;
}

const JoinUsItemWrapper: React.FC<IProps> = ({ count, title, text }) => {
  return (
    <Box className="d-flex flex-column justify-center items-center">
      <Typography
        className="font-56 font-700 text-center"
        sx={{ color: "primary.light" }}
      >
        {count}
      </Typography>
      <Typography
        className="font-32 font-700 text-center"
        sx={{ color: "info.main" }}
      >
        {title}
      </Typography>
      <Typography
        className="font-20 font-600 text-center"
        sx={{ color: "info.A200" }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default JoinUsItemWrapper;
