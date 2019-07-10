import React from 'react';
import { withRouter, Redirect, Link} from 'react-router-dom';


class ArtistIndex extends React.Component{
    
componentDidMount(){
    document.title = 'the Artists - nurdCamp';
    this.props.fetchArtists();
}

render(){
    const artists = this.props.artists.map(artist => {
        const link =`/albums/1/artists/${artist.id}`
        return (
            <div className="artist-index-item" key={artist.id}> 
            <Link to={link}>
                <img className="artist-index-image-thumb" src={artist.artist_image}></img>
                <div className="artist-index-title">
                    {artist.artist_name} 
                </div>
            </Link>
            </div>
        )
    })
return(
    <div className="artists-index">
        <div className="artist-index-title">
            Here are some artists who have performed this album:
        </div>
        {artists}
    </div>
)
}
}


export default withRouter(ArtistIndex);