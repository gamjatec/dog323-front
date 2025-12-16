import HeroSection from "./HeroSection";
import MbtiSection from "./MbtiSection";
import WithMeSection from "./WithMeSection";
import ChatDogSection from "./ChatDogSection";  
import ReviewSection from "./ReviewSection";
import JoinSection from "./JoinSection";

const HomePage = () => {
  return (
    <div id="homepage">
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
