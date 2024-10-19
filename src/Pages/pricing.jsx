import React from "react";
import CallToAction from "../Components/pricing/callToAction";
import CardContainer from "../Components/pricing/cardContainer";
import FAQ from "../Components/pricing/faq";
import Footer from "../Components/footer";
import Hiring from "../Components/pricing/hiringNeeds";
import Pricing from "../Components/pricing/pricing";

function App() {
  return (
    <div className="">
      <Pricing />
      <CallToAction />
      <CardContainer />
      <Hiring />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
