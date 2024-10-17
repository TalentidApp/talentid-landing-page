import React from "react";
import Action from "../Components/partnership/Action";
import FAQ from "../Components/partnership/faq";
import Footer from "../Components/partnership/footer";
import Navbar from "../Components/partnership/navbar";
import Partner from "../Components/partnership/PartnerSection";
import Services from "../Components/partnership/ServicesSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Partner />
      <Services />
      <Action />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
