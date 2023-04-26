import React from 'react';
import { useEffect, useState } from 'react';
import MainPage from '@/components/pages/privacyPage/MainPage';
import Footer from '@/components/pages/home/Footer';

const Privacy = () => {
  const [loading, setLoading] = useState(true);

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

export default Privacy;
