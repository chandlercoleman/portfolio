import React from 'react';
import { Link } from 'react-router-dom';

const EasterEgg = () => {
    return (
        <div class= "chandler-is-awesome">
            <u class= "nav">
                Welcome to my hidden page... its CONFESSION time!
                <Link to= "/portfolio">
                    Home 
                </Link>
            </u>
        
            <div class= "cool-c">
                I dont know what im doing 70% of the time in here.
                <div class= "last-minute">
                    When I was 10, I twisted my ankle rollerskating.
                    <div class= "zendaya">
                         I used to tell people Zendaya was my sister because both our last names are Coleman.
                         <div class= "ticket">
                             I've gotten three speeding tickets in my life.
                             <div class= "play">
                                 In elementary school, I played one of the three little pigs in our school play.
                             </div>
                             <div class= "play" id="penguin">
                                 Taking a picture with Shaquille O'Neal is on my bucket list.
                             </div>
                             <div class= "img-star"></div>
                             <div class= "fear">
                                 Im afraid of alligators.
                             </div>
                             <div class="sing">
                                 I think I could be famous right now if I was good at singing.
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EasterEgg;