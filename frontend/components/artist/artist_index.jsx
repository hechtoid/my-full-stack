import React from 'react';
import { withRouter, Redirect, Link} from 'react-router-dom';


class ArtistIndex extends React.Component{
    
componentDidMount(){
    this.props.fetchArtists();
    document.title = 'the Artists - nurdCamp';
}

render(){
    const artists = this.props.artists.map(artist => {
        const link =`/albums/1/artists/${artist.id}`
        return (
            <div className="artist-index-item" key={artist.id}> 
            <Link to={link}>
                <img 
                className="artist-index-image-thumb" 
                src={artist.artist_image}>
                </img>
                <div className="artist-index-captions">
                    {artist.artist_name} 
                </div>
            </Link>
            </div>
        )
    })
return(
    <div className="artist-index">
        <div className="artist-index-title">
            {/* Here are a few of the many different Artists who have covered this Album */}
        </div>
        <div className="artist-index-container">
        {artists}
        </div>
    </div>
)
}
}


export default withRouter(ArtistIndex);