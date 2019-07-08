import React from 'react';
import { withRouter } from 'react-router-dom';


const Album = (props) =>{
return(

    <div className="album-show">
        <h3>Dark Side of the Moon</h3>
        <img className="album-art" src='dsotm.jpg'></img>
    </div>


)
}



export default withRouter(Album);