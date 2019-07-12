import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


const Song = () => {
   document.title = "the Song"
    return(
 
    <div className="song-player">

        <audio controls
        src='radiohead-these_are_my_twisted_words-(advance)-2009-woi/01-radiohead-these_are_my_twisted_words-(advance)-2009-woi.mp3'>

        </audio>


    </div>
)}

export default Song