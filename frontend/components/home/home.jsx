import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };

    }
componentDidMount(){
    this.props.fetchArtists();
    document.title = 'Home - nurdCamp'
    
}

render(){
    const artists = this.props.artists.map(artist => {
        const link = `/albums/1/artists/${artist.id}`
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
    const shuffledArtists = artists.sort(() => 0.5 - Math.random());
    const pickedArtists = shuffledArtists.slice(0, 4);
return(
<div className="home">
<div className="home-container">
    <div className="home-main-pane">
        <span className="home-main-pane-title">
        Where's Syd?
        </span>
        <span className="home-main-pane-captions">
        Wish You Were Here!
        </span>
    <a href="https://www.theguardian.com/music/2016/jan/06/nick-kent-pink-floyd-syd-barrett-classic-profile-creem-1973">
    <img className="home-main-img"src="sydhome.jpg"></img>
    </a>
    </div>
    <div className="home-side-panes">
        <div className="home-pane-one">
        <a href="https://en.wikipedia.org/wiki/Dark_Side_of_the_Rainbow">
            <img className="home-img-one" src="dorothy.jpg"></img>
        </a>
        </div>
        <div className="home-pane-two">
            <Link to="/albums/1/artists/3">
            <img className="home-img-two" src="vsqhome.jpg"></img>
            </Link>
        <span className="home-pane-two-captions">
            The Classic - Now hear it Classical!
        </span>
        </div>
        <div className="home-pane-three">
        <a href="https://en.wikipedia.org/wiki/The_Dark_Side_of_the_Moon#Covers,_tributes_and_samples">
            <img className="covers" src="skwerlhome.jpg"></img>
        </a>
        </div>
        <span className="home-pane-three-captions">  
    Covered across genres and decades, <br></br>
    in concert and in studio.
        </span>
    </div>
</div>
<div className="home-now-playing">
    Now Playing:
    <div className="artist-index-container">
        {pickedArtists}
    </div>
</div>
</div>
)
}
}


export default withRouter(Home);
