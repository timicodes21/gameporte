import { Box, IconButton } from '@mui/material';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from '@/styles/Component.module.css';
import Image from 'next/image';

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode | undefined;
  header?: string;
  width?: string;
}

const ModalBox: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  header,
  width,
}) => {
  const style = {
    boxShadow: 24,
    p: 2,
    borderRadius: '6px',
    overflow: 'auto',
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        disableEnforceFocus={true}
        //PaperProps={{tabIndex: -1}}
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={open}>
          <Box sx={style} className={styles.modalBack}>
            <div
              style={{
                height: '100%',
                overflowY: 'hidden',
              }}
            >
              {onClose && (
                <IconButton
                  onClick={onClose}
                  sx={{
                    background: '#02BAF1',
                    width: '48px',
                    height: '48px',
                    float: 'right',
                    borderRadius: '16PX',
                  }}
                >
                  <FaTimes />
                </IconButton>
              )}
              <Box sx={{ textAlign: 'center', width: '100%', height: '100%' }}>
                <Image
                  src="/assets/images/modal_logo.svg"
                  alt="logo"
                  width={200}
                  height={200}
                />
              </Box>
              <Box
                sx={{
                  overflowY: 'scroll',
                  padding: '10px',
                  textAlign: 'center',
                }}
              >
                {children}
              </Box>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalBox;
