import React from 'react';
import { Box, Modal } from '@mui/material';
import JoinWaitlistMailChimp from './MailChimp';

interface WaitListModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const WaitListModal: React.FC<WaitListModalProps> = ({ show, setShow }) => {
  return (
    <Modal
      open={show}
      onClose={() => setShow(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ width: '50%', margin: 'auto' }}>
        <JoinWaitlistMailChimp setShow={setShow} />
      </Box>
    </Modal>
  );
};

export default WaitListModal;
