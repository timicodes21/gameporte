import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdEmail, MdSend } from 'react-icons/md';
import ButtonLoader from '../loader/ButtonLoader';
import { Box, Typography } from '@mui/material';
import ModalBox from './modal';
import styles from '@/styles/Component.module.css';
import JoinWaitlistInput from '../forms/JoinWaitlistInput';

interface WaitlistFormProps {
  status: string;
  message: string;
  onValidated: (data: { EMAIL: string }) => boolean;
  setShow: (show: boolean) => void;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({
  status,
  message,
  onValidated,
  setShow,
}) => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const formValidor = () => {
    let isValid = true;
    let error = '';
    if (!email) {
      isValid = false;
      error = 'Please enter a valid email';
    }
    setError(error);
    return isValid;
  };

  const handleFormSubmit = () => {
    setError('');
    if (formValidor()) {
      const isFormValidated = onValidated({ EMAIL: email });
      // On success return true
      return email && email.indexOf('@') > -1 && isFormValidated;
    }
  };

  return (
    <>
      <ModalBox open onClose={() => setShow(false)}>
        <Typography
          sx={{
            fontSize: '1.5rem',
            color: '#fff',
          }}
        >
          Coming Soon...
        </Typography>
        <Typography
          sx={{
            fontSize: '2.2rem',
            color: '#5DDAFF',
            margin: '.5rem 0',
            fontWeight: '700',
          }}
        >
          Join our waitlist
        </Typography>
        <Typography
          sx={{
            fontSize: '1.5rem',
            color: '#fff',
          }}
        >
          Get early access
        </Typography>
        {/* <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1D5E82',
            border: '1px solid #02BAF1',
            width: '90%',
            margin: '1rem auto',
            borderRadius: '8px',
            padding: '.3rem',
          }}
        >
          <MdEmail
            style={{ fontSize: '30px', color: '#fff', height: 'auto' }}
          />
          <input
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              backgroundColor: '#1D5E82',
              color: '#fff',
              fontSize: '1rem',
              padding: '.5rem',
            }}
            className={styles.modalInput}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className={styles.modalButton}
            style={{
              backgroundColor: '#02BAF1',
              height: '100%',
              width: '80px',
              padding: '.5rem',
            }}
            onClick={handleFormSubmit}
          >
            <MdSend
              style={{
                fontSize: '30px',
                color: '#FAFAFA',
              }}
            />
          </button>
        </Box> */}
        <JoinWaitlistInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClick={() => handleFormSubmit()}
        />
        <Box>
          <span style={{ color: 'crimson' }}>{error}</span>
        </Box>
        {status === 'sending' && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#5DDAFF',
              fontSize: '1.5rem',
              fontWeight: '700',
            }}
          >
            <span>Sending</span>
            <ButtonLoader />
          </div>
        )}

        {status === 'error' && (
          <div
            style={{ color: 'red' }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === 'success' && (
          <div
            style={{
              color: '#5DDAFF',
              fontSize: '1.5rem',
              fontWeight: '700',
            }}
          >
            Subscribed !
          </div>
        )}
      </ModalBox>
    </>
  );
};

export default WaitlistForm;
