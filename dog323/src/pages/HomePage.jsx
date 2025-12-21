import HeroSection from "../components/pages/home/HeroSection";
import MbtiSection from "../components/pages/home/MbtiSection";
import WithMeSection from "../components/pages/home/WithMeSection";
import ChatDogSection from "../components/pages/home/ChatDogSection";  
import ReviewSection from "../components/pages/home/ReviewSection";
import JoinSection from "../components/pages/home/JoinSection";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <WithMeSection />
      <MbtiSection />
      <ChatDogSection />
      <ReviewSection />
      <JoinSection />
    </div>
  );
};

export default HomePage;
