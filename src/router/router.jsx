import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import AllCampaign from "../components/AllCampaign/AllCampaign";
import AddNewCampaign from "../components/AddNewCampaign/AddNewCampaign";
import MyCampaign from "../components/MyCampaign/MyCampaign";
import MyDonation from "../components/MyDonation/MyDonation";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../components/Home/Home";
import PrivateRoute from "./PrivateRoute";
import CampaignDetails from "../components/CampaignDetails/CampaignDetails";
import CampaignUpdate from "../components/CampaignUpdate/CampaignUpdate";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allCampaign",
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch("https://assignment-server-10-cyan.vercel.app/allCampaign"),
      },
      {
        path: "/addNewCampaign",
        element: (
          <PrivateRoute>
            <AddNewCampaign></AddNewCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCampaign",
        element: (
          <PrivateRoute>
            <MyCampaign></MyCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/myDonation",
        element: (
          <PrivateRoute>
            <MyDonation></MyDonation>
          </PrivateRoute>
        ),
      },
      {
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails></CampaignDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-server-10-cyan.vercel.app/campaign/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <CampaignUpdate></CampaignUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-server-10-cyan.vercel.app/campaign/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
