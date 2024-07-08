import React from "react";

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import OurClients from "./components/OurClients.jsx";
import ManageCommunity from "./components/ManageCommunity.jsx";
import LearnMore from "./components/LearnMore.jsx";
import Achievements from "./components/Achievements.jsx";
import HowToDesign from "./components/HowToDesign.jsx";
import Customer from "./components/Customer.jsx";
import NewMarketing from "./components/NewMarketing.jsx";
import GetDemo from "./components/GetDemo.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <OurClients />
      <ManageCommunity />
      <LearnMore />
      <Achievements />
      <HowToDesign />
      <Customer />
      <NewMarketing />
      <GetDemo />
      <Footer />
    </div>
  );
};

export default App;
