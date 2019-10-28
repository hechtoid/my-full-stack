import React from 'react';
import { withRouter, Redirect, Link} from 'react-router-dom';


class ArtistIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            filterA: false,
            filterB: false,
            filterAon: "artist-index-filter-a-on",
            filterAoff: "artist-index-filter-a-off",
            filterBon: "artist-index-filter-b-on",
            filterBoff: "artist-index-filter-b-off",
        };
        this.switchFilterA = this.switchFilterA.bind(this);
        this.switchFilterB = this.switchFilterB.bind(this);
    }

componentDidMount(){
    this.props.fetchArtists();
    document.title = 'the Artists - nurdCamp';
}

    switchFilterA(){
        return e => this.setState({
            filterA: !this.state.filterA
        });
    }
    switchFilterB(){
        return e => this.setState({
            filterB: !this.state.filterB
        });
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
        <div 
            className={
                this.state.filterA
                ? this.state.filterAon
                : this.state.filterAoff
            }
            onClick={this.switchFilterA()}
        >
            filterbar-a
        </div>
        <div 
            className={
                this.state.filterB
                    ? this.state.filterBon
                    : this.state.filterBoff
            }
            onClick={this.switchFilterB()}
        >
            filterbar-b
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