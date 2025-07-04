import HomeCard from "./HomeCard";
import SimpleSlider from "./SimpleSlider";
import card1 from "../assets/card1.jpg"
import HeroSection from "../common/HeroSection";

const Home = () => {
  return (
    <>
      <SimpleSlider />
      <div className="flex flex-wrap gap-2 mx-2">
        <HomeCard title="Get your game on"  image={card1} link="Shop Games"/>
        <HomeCard title="Get your game on"  image={card1} link="Shop Games"/>
        <HomeCard title="Get your game on"  image={card1} link="Shop Games"/>
        <HomeCard title="Get your game on"  image={card1} link="Shop Games"/>
        <HomeCard title="Get your game on"  image={card1} link="Shop Games"/>
        <HomeCard title="Get your game on"  image={card1} link="Shop Games"/>
        <HomeCard title="Get your game on"  image={card1} link="Shop Games"/>
        <HomeCard title="Get your game on"  image={card1} link="Shop Games"/>
      </div>
      <div className="mt-4">
        <HeroSection/>
      </div>
    </>
  );
};

export default Home;
