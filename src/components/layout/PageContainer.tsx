import { Container } from '@mui/material';
import { NextPage } from 'next';
import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  paddingVertical?: boolean;
}

const PageContainer: NextPage<IProps> = ({ children, paddingVertical }) => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ px: { xs: 1 }, py: paddingVertical ? 5 : 0 }}
      >
        {children}
      </Container>
    </>
  );
};

export default PageContainer;
