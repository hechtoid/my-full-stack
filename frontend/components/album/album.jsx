import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


class Album extends React.Component{
    
componentDidMount(){
    document.title = 'the Album - nurdCamp'
}

render(){
return(
    <div className="album">
    <div className="album-show">
    <Redirect to="/albums/1" />
        <div className="album-title">the Dark Side of the Moon</div>
        <em>the only album on the internet</em>
    <Link to="/albums/1/artists/">
        <div className="album-art-div">
        <img className="album-art" src='dsotm.jpg' title='the only album on the internet'></img>
        </div>
    </Link>
    </div>
    </div>
)
}
}


export default withRouter(Album);