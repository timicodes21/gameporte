import FeaturedGames from '@/components/pages/home/FeaturedGames';
import Footer from '@/components/pages/home/Footer';
import HowItWorks from '@/components/pages/home/HowItWorks';
import JoinUs from '@/components/pages/home/JoinUs';
import JoinWaitlist from '@/components/pages/home/JoinWaitlist';
import TopupGame from '@/components/pages/home/TopupGame';

export default function Home() {
  return (
    <>
      <TopupGame />
      <JoinWaitlist />
      <FeaturedGames />
      <HowItWorks />
      <JoinUs />
      <Footer />
    </>
  );
}
