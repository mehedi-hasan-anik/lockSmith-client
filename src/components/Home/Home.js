import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import HeaderBottom from "../HeaderBottom/HeaderBottom";
import ReviewHome from "../ReviewHome/ReviewHome";
import ServiceArea from "../ServiceArea/ServiceArea";
import Team from "../Team/Team";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-area">
      <HeaderBottom></HeaderBottom>
      {/* <Slider></Slider> */}
      <ServiceArea></ServiceArea>
      <ReviewHome></ReviewHome>
      <Team></Team>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
