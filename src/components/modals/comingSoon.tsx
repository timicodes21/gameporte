import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdEmail, MdSend } from 'react-icons/md';
import ButtonLoader from '../loader/ButtonLoader';
import { Box, Typography } from '@mui/material';
import ModalBox from './modal';
import styles from '@/styles/Component.module.css';
import JoinWaitlistInput from '../forms/JoinWaitlistInput';

interface ComingSoonProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ show, setShow }) => {
  return (
    <>
      <ModalBox open={show} onClose={() => setShow(false)}>
        <Typography
          sx={{
            fontSize: '1.5rem',
            color: '#fff',
          }}
        >
          Coming Soon...
        </Typography>
      </ModalBox>
    </>
  );
};

export default ComingSoon;
