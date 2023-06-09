import Hero from "./components/home/Hero";
import Categories from "./components/home/Categories";
import BestDeals from "./components/home/BestDeals";
import Featured from "./components/home/Featured";
import Events from "./components/home/events/Events";
import Sponsored from "./components/home/Sponsored";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <Featured />
      <Sponsored />
    </div>
  );
}
