import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const About = [
        {name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" , link: "/emergency"},
        // {name: "Check Up" , link: "/checkup"},
        // {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        // {name: "Tooth Extraction" , link: "/tooth-extract"},
        // {name: "Check Up" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "H#000(0th Floor),Road #00,new DOHS, Mohakhali,Dhaka,Bangladesh" , link: "//google.com/map"},
        {name: "" , link: "//google.com/map"},
       
    ]
    const Company = [
        {name: "About" , link: "/about"},
        {name: "Project" , link: "/project"},
        {name: "Our Team" , link: "/our-team"},
        {name: "Terms Condition" , link: "/terms-condition"},
        {name: "Submit Listing" , link: "/submit-listing"},
        
    ]
    const QuickLinks = [
        {name: "Quick links" , link: "/Quick-links"},
        {name: "Rentals" , link: "/Rentals"},
        {name: "Sales" , link: "/Sales"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Contact" , link: "/Contact"},
        {name: "Our blog" , link: "/OurBlog"},
    ]
    return (
        <footer className="footer-area clear-both">
        <div className="container pt-5">
            <div className="row py-5">
                <FooterCol key={1} menuTitle={"About"} menuItems={About}/>
                <FooterCol key={2} menuTitle=" Quick Links" menuItems={ QuickLinks}/>
                <FooterCol key={3} menuTitle="Company" menuItems={Company}/>
                <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    </ul>
                    <div className="mt-5">
                        <h6>Call now</h6>
                        <button className="btn" style={{background:'#FFC800'}}>01959109322</button>
                    </div>
                </FooterCol>
            </div>
            <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;