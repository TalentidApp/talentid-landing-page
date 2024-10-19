import {
  Customers,
  Form,
  Section,
  Testimonals,
} from "../Components/landing page";
import Footer from "../Components/footer";
import Header from "../Components/header";

const Home = () => {
  return (
    <div>
      <Header />
      <Customers />
      <Section />
      <Testimonals />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
