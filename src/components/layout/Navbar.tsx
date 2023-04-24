import { Box, Typography } from "@mui/material";
import React from "react";
import PageContainer from "./PageContainer";
import Image from "next/image";
import CustomButton from "../buttons/CustomButton";

const Navbar = () => {
  return (
    <Box
      sx={{ backgroundColor: "primary.main", py: { xs: "5px", md: "10px" } }}
      className="d-flex items-center justify-start"
    >
      <PageContainer>
        <Box className="d-flex justify-between items-center">
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
          <Box className="d-flex items-center">
            <CustomButton
              variant="secondary"
              leftIcon={
                <Image
                  src="/assets/icons/cart_icon.svg"
                  alt="logo_text"
                  width={24}
                  height={24}
                />
              }
            >
              Porte Shop
            </CustomButton>
            <Box sx={{ ml: 1 }}></Box>
            <CustomButton variant="primary">Join Waitlist</CustomButton>
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
};

export default Navbar;
