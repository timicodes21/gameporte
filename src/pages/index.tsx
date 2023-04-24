import FeaturedGames from "@/components/pages/home/FeaturedGames";
import HowItWorks from "@/components/pages/home/HowItWorks";
import JoinWaitlist from "@/components/pages/home/JoinWaitlist";
import TopupGame from "@/components/pages/home/TopupGame";

export default function Home() {
  return (
    <>
      <TopupGame />
      <JoinWaitlist />
      <FeaturedGames />
      <HowItWorks />
    </>
  );
}
