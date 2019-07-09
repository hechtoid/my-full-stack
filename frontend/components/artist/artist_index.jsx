import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';


class ArtistIndex extends React.Component{
    
componentDidMount(){
    document.title = 'the Artists - nurdCamp';
    this.props.fetchArtists();
}

render(){
    const artists = this.props.artists.map(artist => {
        return (
            <h1> {artist.artist_name}</h1>
        )
    })
return(
    <div className="artists-index">
        
        <em>coming soon!</em>
        {artists}
    </div>
)
}
}


export default withRouter(ArtistIndex);