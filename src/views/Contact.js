import React from "react";
import Footer from '../components/layout/Footer.js';
import Banner from '../components/sections/Banner.js';
import TopNav from "../components/sections/TopNav";
import Email from '../assets/images/email.png';
import Message from '../assets/images/message.png'

const Contact = () => {
    return (
        <><>
        <TopNav/>
        <Banner>
            CONTACT ME! 
        </Banner>
        
            
        </>
        <div class="main">
        <img className="Email" src={Email} />
             Email: chandlercoleman47@gmail.com
            <br/>
             Phone: 817-907-2023
             <br/>
            Texing is usually the quickest way to get a hold of me.
        <img className= "Message" src={Message} />
        </div>

        <Footer/>
        </>
    );
};

export default Contact;