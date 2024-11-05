import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/aboutus";
import Contact from "./Pages/contactus";
import Partnership from "./Pages/partnership";
import Pricing from "./Pages/pricing";
import Landing from "./pages/landingPage";
import Events from "./Pages/events";
import PrivacyPolicy from "./Pages/privacy";
import OptOutForm from "./Pages/optForm";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/aboutus",
      element: <About />,
    },
    ,{

      path:"optform",
      element:<OptOutForm></OptOutForm>
    },
    {
      path: "/contactus",
      element: <Contact />,
    },
    {
      path: "/partnership",
      element: <Partnership />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
