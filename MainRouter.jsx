import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/MainLayout/Layout";
import Home from "./src/Home/Home";
import SignUp from "./src/Authentications/SignUp";
import Login from "./src/Authentications/Login";
import AiChat from "./src/DashBoradElements/PrimaryElements/AiChat";
import Mood from "./src/DashBoradElements/PrimaryElements/Mood";
import Community from "./src/DashBoradElements/PrimaryElements/Community";
import Messages from "./src/DashBoradElements/PrimaryElements/Messages";
import MoodAnalytics from "./src/DashBoradElements/DataAndInsightsElemets/MoodAnalytics";
import AiInshights from "./src/DashBoradElements/DataAndInsightsElemets/AiInshights";
import Goals from "./src/DashBoradElements/DataAndInsightsElemets/Goals";
import Rewards from "./src/DashBoradElements/DataAndInsightsElemets/Rewards";
import Library from "./src/DashBoradElements/WellnessToolsElements/Library";
import Meditation from "./src/DashBoradElements/WellnessToolsElements/Meditation";
import Breathing from "./src/DashBoradElements/WellnessToolsElements/Breathing";
import CBTTools from "./src/DashBoradElements/WellnessToolsElements/CBTTools";
import Journal from "./src/DashBoradElements/WellnessToolsElements/Journal";
import Progress from "./src/DashBoradElements/DataAndInsightsElemets/Progress";
import SafetyPlan from "./src/DashBoradElements/WellnessToolsElements/SafetyPlan";
import SocialHub from "./src/DashBoradElements/SocialElements/SocialHub";
import Challenges from "./src/DashBoradElements/SocialElements/Challenges";
import FindMatches from "./src/DashBoradElements/SocialElements/FindMatches";
import SavedPosts from "./src/DashBoradElements/SocialElements/SavedPosts";
import Appointments from "./src/DashBoradElements/SupportAndHelpElements/Appointments";
import Assessments from "./src/DashBoradElements/SupportAndHelpElements/Assessments";
import CrisisResources from "./src/DashBoradElements/SupportAndHelpElements/CrisisResources";
import FindTherapist from "./src/DashBoradElements/SupportAndHelpElements/FindTherapist";
import Account from "./src/DashBoradElements/SettingsElements/Account";
import Notifications from "./src/DashBoradElements/SettingsElements/Notifications";
import Photos from "./src/DashBoradElements/SettingsElements/Photos";
import Profile from "./src/DashBoradElements/SettingsElements/Profile";
import Integrations from "./src/DashBoradElements/IntegrationsElements.jsx/Integrations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1 className="p-10 text-center text-2xl font-bold"> 404 - Page Not Found </h1>,
    children: [
      // Main Section Routes
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/aichat",
        element: <AiChat />
      },
      {
        path: "/mood",
        element: <Mood />
      },
      {
        path: "/community",
        element: <Community />
      },
      {
        path: "/messages",
        element: <Messages />
      },

      // Insights Section Routes (Sidebar Section 1)
      {
        path: "/moodanalytics",
        element: <MoodAnalytics />
      },
      {
        path: "/aiinsights",
        element: <AiInshights />
      },
      {
        path: "/progress",
        element: <Progress />
      },
      {
        path: "/goals",
        element: <Goals />
      },
      {
        path: "/rewards",
        element: <Rewards />
      },

      // Wellness Section Routes (Sidebar Section 2)
      {
        path: "/library",
        element: <Library />
      },
      {
        path: "/meditation",
        element: <Meditation />
      },
      {
        path: "/breathing",
        element: <Breathing />
      },
      {
        path: "/cbttools",
        element: <CBTTools />
      },
      {
        path: "/journal",
        element: <Journal /> // Journal route added to match Sidebar
      },
      {
        path: "/safetyplan",
        element: <SafetyPlan /> // Safety Plan route added to match Sidebar
      },
         {
        path: "/socialhub",
        element: <SocialHub></SocialHub>
      },
         {
        path: "/challenges",
        element:<Challenges></Challenges>
      },
         {
        path: "/findmatches",
        element: <FindMatches />
      },
         {
        path: "/saveposts",
        element: <SavedPosts />
      },
      {
        path:"/appointments",
        element:<Appointments></Appointments>
      },
      {
        path:"/assessments",
        element:<Assessments></Assessments>
      },
      {
        path:"/crisisresources",
        element:<CrisisResources></CrisisResources>
      },
      {
        path:"findtherapist",
        element:<FindTherapist></FindTherapist>
      },
      {
        path:"/account",
        element:<Account></Account>
      },
      {
        path:"/notifications",
        element:<Notifications></Notifications>
      },
      {
        path:"/photos",
        element:<Photos></Photos>
      },
      {
        path:"/profile",
        element:<Profile></Profile>
      },
      {
        path:"/integrations",
        element:<Integrations></Integrations>
      }
      
 
    ]
  },
]);

export default router;