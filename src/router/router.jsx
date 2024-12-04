import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import AllCampaign from "../components/AllCampaign/AllCampaign";
import AddNewCampaign from "../components/AddNewCampaign/AddNewCampaign";
import MyCampaign from "../components/MyCampaign/MyCampaign";
import MyDonation from "../components/MyDonation/MyDonation";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    },
    {
      path: "/allCampaign",
      element: <AllCampaign></AllCampaign>
    },
    {
      path: "/addNewCampaign",
      element: <AddNewCampaign></AddNewCampaign>
    },
    {
      path: "/myCampaign",
      element: <MyCampaign></MyCampaign>
    },
    {
      path: "/myDonation",
      element: <MyDonation></MyDonation>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    }
  ]);
  

export default router;