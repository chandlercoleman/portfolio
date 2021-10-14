import React from "react";
import AboutUs from "../../views/Background";
// import Spikes from '../../assets/images/spikes.JPG';

const Banner = ({ children }) => {
    return(
        <>
            <div className="banner">
                {/* <img className= "spike" src={Spikes} /> */}
        
                {children}
            </div>
        </>
    );
}

export default Banner;