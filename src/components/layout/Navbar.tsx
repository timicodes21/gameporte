import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import PageContainer from './PageContainer';
import Image from 'next/image';
import CustomButton from '../buttons/CustomButton';
import WaitListModal from '../modals/WaitListModal';
import ComingSoon from '../modals/comingSoon';

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  return (
    <Box
      sx={{ backgroundColor: 'primary.main', py: { xs: '5px', md: '10px' } }}
      className="d-flex items-center justify-start"
    >
      <PageContainer>
        <Box className="d-flex justify-between items-center">
          <Link href="/">
            <Box className="d-flex items-center">
              <Box>
                <Image
                  src="/assets/icons/logo_icon.svg"
                  alt="logo_icon"
                  width={41}
                  height={28}
                />
              </Box>
              <Box
                sx={{
                  display: { xs: 'none', md: 'block' },
                }}
              >
                <Image
                  src="/assets/icons/logo_text.svg"
                  alt="logo_text"
                  width={162}
                  height={32}
                />
              </Box>
            </Box>
          </Link>
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
              onClick={() => setShow2(true)}
            >
              Porte Shop
            </CustomButton>
            <Box sx={{ ml: 1 }}></Box>
            <CustomButton variant="primary" onClick={() => setShow(true)}>
              Join Waitlist
            </CustomButton>
          </Box>
        </Box>
      </PageContainer>
      <WaitListModal show={show} setShow={setShow} />
      <ComingSoon show={show2} setShow={setShow2} />
    </Box>
  );
};

export default Navbar;
