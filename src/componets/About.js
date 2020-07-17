import React from "react";
import Rainbow from '../componets/hoc/rainbow'

const About = () => {
    return(
        <div className="container">
        <h4 className="center ">About</h4>
            <p>lorem ipsum some randome word, Also apex is a pretty fun game. Whoever has not gotten a chance to play this game you really should.</p>
        </div>   
)
}

export default Rainbow(About)