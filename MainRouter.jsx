import {
  createBrowserRouter,
} from "react-router-dom";
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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<h1> ERROR </h1>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/aichat",
            element:<AiChat></AiChat>
        },
        {
            path:"/mood",
            element: <Mood></Mood>
        },
        {
            path:"/community",
            element:<Community></Community>
        },
        {
            path:"/messages",
            element:<Messages></Messages>
        },
        {
            path:"/moodanalytics",
            element:<MoodAnalytics></MoodAnalytics>
        },
        {
            path:"/aiinsights",
            element:<AiInshights></AiInshights>
        },
        {
            path:"/goals",
            element:<Goals></Goals>
        },
        {
            path:"/rewards",
            element:<Rewards></Rewards>
        },
        {
            path:"/library",
            element:<Library></Library>
        },
        {
            path:"/meditation",
            element:<Meditation></Meditation>
        },
        {
            path:"/breathing",
            element:<Breathing></Breathing>
        },
        {
            path:"/cbttools",
            element:<CBTTools></CBTTools>
        },
        {
            path:"/journal",
            element:<Journal></Journal>
        },
        
    
    ]

  },
]);

export default router ;