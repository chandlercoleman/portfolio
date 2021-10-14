import React from "react";
import Footer from '../components/layout/Footer.js';
import Banner from '../components/sections/Banner.js';
import TopNav from "../components/sections/TopNav";
import Photography from "../assets/images/photography.jpg";
import Nature from "../assets/images/nature.jpg";
import Painting from "../assets/images/painting.jpg";

const Hobbies = () => {
    return (
        <>
            <TopNav />

            <Banner>
                Hobbies
            </Banner>
            <div ClassName= "content"> 
                <div className="youtuber"> I went through a phase where I wanted to be a Youtuber. </div>
                <iframe width="800" height="500" src="https://www.youtube.com/embed/63CjNO6bV4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br/>
                <div className="caption">
                    I like to take pictures sometimes.
                </div>
                <img className= "photography" src={Photography} />
                <br/>
                <br/>
                <div className="caption-two">
                    As I've already mentioned 1000x, I enjoy drawing and painting.
                </div>
                <img className= "painting" src={Painting} />
                <br/>
                <br/>
                <div className="caption-three">
                    I like to spend time outside, going on walks and hikes.
                </div>
                <img className= "nature" src={Nature} />
                              
            
            </div>
            <Footer />
        </>
    );
};

export default Hobbies;