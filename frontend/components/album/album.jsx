import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


class Album extends React.Component{
    
componentDidMount(){
    document.title = 'the Album - nurdCamp'
}

render(){
return(
    <div className="album">
    <Link to="/albums/1/artists/">
    <div className="album-show">
    <Redirect to="/albums/1" />
        {/* <div className="album-title">the Dark Side of the Moon</div> */}
        <div className="album-art-div">
            <div className="album-title">
                the only album on the internet
            </div>
        <img className="album-art" src='dsotm.jpg'></img>
        </div>
    </div>
    </Link>
    </div>
)
}
}


export default withRouter(Album);