import React from "react";
import instaWhite from "../images/instagram-white.png";

function Media () {
    return (
        <div className='media'>
            <a href='https://www.instagram.com/miguelbravovera/' target='_blank' rel="noreferrer" aria-label="Follow Miguel Bravo on Instagram">
                <img src={instaWhite} alt='' width="40" height="40"></img>
            </a>
        </div>
    );
}

export default Media;
