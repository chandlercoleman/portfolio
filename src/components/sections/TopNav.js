import React from "react";
import {Link} from "react-router-dom";

const TopNav = () => {
    return (
        <>
            <div className= "top-nav">
                <Link to="/portfolio">Home</Link>
                <Link to="/portfolio/contact">Contact</Link>
                <Link to="/portfolio/background">Background</Link>
                <Link to="/portfolio/FAQs">FAQs</Link>
                <Link to="/portfolio/hobbies">Hobbies</Link>
            </div>
        </>
    );
};

export default TopNav;