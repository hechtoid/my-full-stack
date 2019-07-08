import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';


class Album extends React.Component{
    
componentDidMount(){
    document.title = 'the Album - nurdCamp'
}

render(){
return(
    <div className="album-show">
        <Redirect to="/albums/1" />
        <h3 className="album-title">the Dark Side of the Moon</h3>
        <em>there's only one album on the internet</em>
        <img className="album-art" src='dsotm.jpg'></img>
    </div>
)
}
}


export default withRouter(Album);