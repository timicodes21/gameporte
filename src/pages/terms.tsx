import Footer from '@/components/pages/home/Footer';
import MainPage from '@/components/pages/termsAndCondition/MainPage';
import React from 'react';
import { useEffect } from 'react';

const TermsCondition = () => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <>
      {loading ? (
        <>{/* <img src={loadind} alt="loading" /> */}</>
      ) : (
        <>
          <MainPage />
          <Footer />
        </>
      )}
    </>
  );
};

export default TermsCondition;
