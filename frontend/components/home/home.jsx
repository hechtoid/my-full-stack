import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };

    }
componentDidMount(){
    this.props.teaseArtists();
    document.title = 'Home - nurdCamp'
    
}

render(){
    const pickedArtists = this.props.artists.map(artist => {
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
                    {/* <div className="artist-index-captions-album">
                        Dark Side of the Moon
                    </div> */}
                    <div className="artist-index-captions-artist">
                        {artist.artist_name}
                    </div>
                    {/* <div className="artist-index-about">
                        {artist.about}
                    </div> */}

                </Link>
            </div>
        )
    })
return(
<div className="home">
<div className="home-container">
    <div className="home-main-pane">
                <a href="https://www.theguardian.com/music/2016/jan/06/nick-kent-pink-floyd-syd-barrett-classic-profile-creem-1973" target="_blank">
        <span className="home-main-pane-title">
        Where's Syd?
        </span>
        <span className="home-main-pane-captions">
        Wish You Were Here!
        <br></br>
        ARTICLE
        </span>
    <img className="home-main-img"src="sydHome.jpg"></img>
    </a>
    </div>
    <div className="home-side-panes">
        <div className="home-pane-one">
        <Link to="/albums/1/artists/3">
            <img className="pane-img" src="vsqhome.jpg"></img>
            <span className="home-pane-one-captions">
                The Classic - Now hear it Classical!<br></br>
                FEATURED ARTIST
            </span>
        </Link>
        </div>
        <div className="home-pane-two">
        <a href="https://en.wikipedia.org/wiki/The_Dark_Side_of_the_Moon#Covers,_tributes_and_samples" target="_blank">
            <img className="pane-img" src="skwerlhome.jpg"></img>
            <span className="home-pane-two-captions">  
                Live and in studio, across genres and decades.<br></br>
                ARTICLE
        </span>
        </a>
        </div>
        <div className="home-pane-three">
            <a href="https://www.youtube.com/watch?v=NtExVJlgEC0" target="_blank">
            <img className="pane-img" src="dorothy.jpg"></img>
            <span className="home-pane-three-captions">
                FILM
            </span>
        </a>
        </div>
    </div>
</div>
<div className="home-now-playing">
    Now Playing
    <div className="artist-index-container">
        {pickedArtists}
    </div>
</div>
</div>
)
}
}


export default withRouter(Home);
