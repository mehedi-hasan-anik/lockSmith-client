import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import ReviewHome from '../ReviewHome/ReviewHome';
import ServiceArea from '../ServiceArea/ServiceArea';
import Slider from '../Slider/Slider';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <HeaderBottom></HeaderBottom>
            <Slider></Slider>
            <ServiceArea></ServiceArea>
            <ReviewHome></ReviewHome>
            <Team></Team>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;