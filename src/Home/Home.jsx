
import CalmerMind from "../Elements/CalmerMind";
import CrisisDetection from "../Elements/CrisisDetection";
import PeerCommunity from "../Elements/PeerCommunity";
import PeerSupport from "../Elements/PeerSupport";
import Pressure from "../Elements/Pressure";
import Questions from "../Elements/Questions";
import SafetyAndPrivacy from "../Elements/SafetyAndPrivacy";
import SmartMoodTracker from "../Elements/SmartMoodTracker";
import WelnessChatbot from "../Elements/WelnessChatbot";
import HomeBanner from "./HomeBanner";
import MindMateCommunity from "./MindMindCommunity";
import MindMateFeatures from "../MindMateFeatures/MindMateFeatures";



const Home = () => {
  return (

<div>
  
    <HomeBanner></HomeBanner>
    <MindMateCommunity></MindMateCommunity>
    <Pressure></Pressure>
    {/* <WelnessChatbot></WelnessChatbot> */}
    {/* <SmartMoodTracker></SmartMoodTracker> */}
    {/* <PeerSupport></PeerSupport> */}
    {/* <PeerCommunity></PeerCommunity> */}
    {/* <CrisisDetection></CrisisDetection> */}

<MindMateFeatures></MindMateFeatures>

    <SafetyAndPrivacy></SafetyAndPrivacy>
    <CalmerMind></CalmerMind>
    <Questions></Questions>
  
   

</div>

  );
}

export default Home;
