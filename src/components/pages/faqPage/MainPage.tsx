import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import { faqImage } from '@/data';
import FaqAccordion from './FaqAccordion';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const MainPage = () => {
  return (
    <div
      style={{
        backgroundColor: '#fafafa',
      }}
    >
      <PageContainer>
        <div className="text-center">
          <div>
            <Image alt="image" src={faqImage} width={150} height={150} />
          </div>
          <Typography
            className="font-40 font-700 text-blue"
            sx={{
              padding: '1rem',
            }}
          >
            Freqently Asked Questions (FAQ)
          </Typography>
        </div>
        <div className="mt-2 mt-md-4">
          <FaqAccordion
            header="What is Gameporte?"
            text="Gameporte is an esports platform that rewards gamers through Web 2 and Web 3 innovations"
          />
          <br /> <br />
          <FaqAccordion
            header="Does it cost anything to join Gameporte?"
            text="Nope! You don’t have to pay to become a member of Gameporte"
          />
          <br /> <br />
          <FaqAccordion
            header="What games are on Gameporte?"
            text="We currently offer FIFA 23, Call of Duty Mobile, PUBG Mobile and Free Fire on Gameporte. We plan to expand to other games soon. Stay tuned!"
          />
          <br /> <br />
          <FaqAccordion
            header="Is Gameporte a Gambling platform?"
            text="Gameporte.com is NOT a gambling platform, it's a platform that rewards gamers for their gaming skills based on video game competitions. Gameporters place wagers on THEIR OWN performance, NOT the outcome of other players."
          />
          <br /> <br />
          <FaqAccordion
            header="Is there a Gameporte App?"
            text="We plan to have the app released by the first quarter of 2023. Join our waitlist to get exclusive access  to our community and get notified once the Gameporte app launches."
          />
          <br /> <br />
          <FaqAccordion
            header="How do I join Gameporte and start getting rewarded before the App is released?"
            text={[
              'You can join our amazing community on discord with the link below ',
              <Link href="https://bit.ly/Gameporte" key={'discord-link'}>
                https://bit.ly/Gameporte{' '}
              </Link>,
              'Once you’re in, head to  the following channels in this order #rules >>  #how-it-works >> #setup to get started and start participating in tournaments to win cash prizes',
            ]}
          />
          <br /> <br />
          <FaqAccordion
            header="How can I sponsor an event/tournament?"
            text={[
              'We look forward to partnering with you. For more information, kindly visit our sponsorship page: You can also contact us via email at ',
              <Link href="mailto: hello@gameporte.com" key={1}>
                hello@gameporte.com{' '}
              </Link>,
            ]}
          />
          <br /> <br />
          <FaqAccordion
            header="How can I contact support?"
            text={[
              'You can also contact support via email at ',
              <Link href="mailto: hello@gameporte.com" key={2}>
                hello@gameporte.com{' '}
              </Link>,
            ]}
          />
        </div>
        <Box
          sx={{
            background: '#EDF1FF',
            borderRadius: '16px',
            margin: '1rem auto',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '.2rem',
          }}
        >
          <Typography
            sx={{
              color: '#36373a',
              fontSize: '1.5rem',
              fontWeight: '700',
            }}
          >
            Have more questions?{' '}
          </Typography>
          <a href="mailto: hello@gameporte.com">
            <Typography
              sx={{
                color: '#02baf1',
                fontSize: '1.5rem',
                fontWeight: '700',
              }}
            >
              Contact us
            </Typography>
          </a>
        </Box>
      </PageContainer>
    </div>
  );
};

export default MainPage;
