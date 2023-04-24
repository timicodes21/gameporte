import FeaturedGames from "@/components/pages/home/FeaturedGames";
import JoinWaitlist from "@/components/pages/home/JoinWaitlist";
import TopupGame from "@/components/pages/home/TopupGame";

export default function Home() {
  return (
    <>
      <TopupGame />
      <JoinWaitlist />
      <FeaturedGames />
    </>
  );
}
