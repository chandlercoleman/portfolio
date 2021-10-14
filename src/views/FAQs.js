import React from "react";
import Banner from '../components/sections/Banner.js';
import Footer from '../components/layout/Footer.js';
import TopNav from "../components/sections/TopNav";
// import Spikes from '../assets/images/spikes.JPG';


const FAQs = () => {
    return (
        <>
        <TopNav/>
        <Banner>
           FAQ's <br/> (Frequently Asked Questions)     
        </Banner>
        <div class= "questions">
            Q- What's your major?
            <br/>
            A- Liberal Arts. Basically the major combines my choice of 3 minors: Psychology, Communication and Art.
            <br/>
            <br/>
            Q- What are your plans after graduation?
            <br/>
            A- I actually hate this question, but I want to pursue Art Therapy, or another career that combines art and helping people. 
            <br/>
            <br/>
            Q- Who are your favorite artists?
            <br/>
            A- At the moment: Kid Cudi, Jack Harlow, Doja Cat, Kevin Gates
            <br/>
            <br/>
            Q- How tall are you?
            <br/>
            A- I like to say I'm model height but my driver's liscense says 5'8.
            <br/>
            <br/>
            
           
        </div>
        <Footer/>
        </>
    );
};

export default FAQs;