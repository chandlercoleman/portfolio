import React from "react";
import Banner from '../components/sections/Banner.js';
import Footer from '../components/layout/Footer.js';
import TopNav from "../components/sections/TopNav";
import Art from '../assets/images/art.jpg'
import FW from '../assets/images/FW.jpg'

const Background = () => {
    return (
        <>
        <TopNav/>
        <Banner>
              Background Information 
        </Banner>
        <div className= "childhood">
        I've lived in Texas for 20 years of my life. I grew up in Fort Worth, also known as The Cowtown. Do not let the name fool you, Fort Worth definitely provides a big-city, fast pace environment. I think that growing up in Fort Worth shaped my personality in a lot of ways. For example, I like being in a place where there's a lot going on (not exactly sure why I chose to live in Winfield then), and I enjoy interacting with many different kinds of people. 
        <br/>
        <br/>
        I have always loved making art and sharing it with those around me. Being creative in gerneral is something very near and dear to my heart. Luckily my family are my biggest supporters for my art, and I hope I'll end up in a career that allows creative thinking and vision. If you have any ideas about how I can make money off of my art, I'm always open to suggestion.
        </div>
        
        <img className= "art-pic" src={Art} />
        <img className= "fort-worth" src={FW} />
        <Footer/>
        </>
    );
};

export default Background;