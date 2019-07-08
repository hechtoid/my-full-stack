import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';


class ArtistIndex extends React.Component{
    
componentDidMount(){
    document.title = 'the Artists - nurdCamp'
}

render(){
return(
    <div className="artists-index">
        
        <em>coming soon!</em>
        
    </div>
)
}
}


export default withRouter(ArtistIndex);