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
        const id = `artist-index-item-${artist.id}`
        return (
            <div className="artist-index-item" 
            key={artist.id}
            id={id}
            > 
            <Link to={link}>
                <div className="artist-index-image-div">
                <img 
                className="artist-index-image-thumb" 
                src={artist.artist_image}>
                </img>
                </div>
                    <div className="artist-index-captions-album">
                        Dark Side of the Moon
                    </div>
                <div className="artist-index-captions-artist">
                    {artist.artist_name}
                </div>
                <div className="artist-index-about">
                    {artist.about}
                </div>  
                 
            </Link>
            </div>
        )
    })
return(
    <div className="artist-index">
        <div className="artist-index-title">
            A few of the Many Artists who have covered this Album:
        </div>
        <div className="artist-index-filterbar">
            
        </div>
    <div className="artist-index-flex">
        
     
    <div className="artist-index-box">
        
        <br></br>
        <div className="artist-index-container">
        {artists}
        </div>
    </div>
    <div className="artist-info-box">
        artist info here
    </div>
    </div>
    </div>
)
}
}


export default withRouter(ArtistIndex);