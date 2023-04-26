import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import PageContainer from '@/components/layout/PageContainer';
import JoinWaitlistInput from '@/components/forms/JoinWaitlistInput';
import WaitListModal from '@/components/modals/WaitListModal';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import ButtonLoader from '@/components/loader/ButtonLoader';

interface IProps {
  border?: boolean;
}

interface WaitlistFormProps {
  status: string;
  message: string;
  onValidated: (formData: any) => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface JoinWaitlistMailChimpProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const JoinWaitlist: React.FC<IProps> = ({ border }) => {
  const [show, setShow] = React.useState(false);
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

  const MAILCHIMP_URL =
    'https://gameporte.us21.list-manage.com/subscribe/post?u=19951691a0b120ec239a37664&amp;id=30db845065&amp;f_id=00dbc6e1f0';
  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};

        const handleFormSubmit = () => {
          setError('');
          if (formValidor()) {
            const isFormValidated = subscribe({ EMAIL: email });
            // On success return true
            return email && email.indexOf('@') > -1 && isFormValidated;
          }
        };
        return (
          <Box
            className={styles.joinWaitlistContainer}
            sx={{
              borderBottom: border ? '8px solid #000' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* <Box className={styles.joinWaitlistImageContainer}>
              <Image
                alt="image"
                src="/assets/images/join_waitlist_image.png"
                className={styles.joinWaitlistImage}
                width={0}
                height={0}
                sizes="100vw"
              />
            </Box> */}

            <PageContainer paddingVertical>
              <Box className="d-flex flex-column justify-center items-center">
                <Typography
                  className="font-40 font-700"
                  sx={{ color: 'info.A100' }}
                >
                  Join our Waitlist
                </Typography>
                <Typography
                  className="font-20 font-700"
                  sx={{ color: 'info.dark' }}
                >
                  Get early access
                </Typography>
                <Box className="joinInput">
                  <JoinWaitlistInput
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={() => handleFormSubmit()}
                  />
                  <Box sx={{ textAlign: 'center' }}>
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
                      style={{ color: 'red', textAlign: 'center' }}
                      dangerouslySetInnerHTML={{ __html: message }}
                    />
                  )}
                  {status === 'success' && (
                    <div
                      style={{
                        color: '#5DDAFF',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        textAlign: 'center',
                      }}
                    >
                      Subscribed !
                    </div>
                  )}
                </Box>
              </Box>
            </PageContainer>
            {/* <WaitListModal show={show} setShow={setShow} /> */}
          </Box>
        );
      }}
    />
  );
};

export default JoinWaitlist;
