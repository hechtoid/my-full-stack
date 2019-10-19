import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };

    }
componentDidMount(){
    document.title = 'Home - nurdCamp'
    
}

render(){
return(
<div className="home-container">
    <div className="home-main-pane">
        <span className="home-main-pane-title">
            So many Covers, So little Time
        </span>
        <br></br>
        <span className="home-main-pane-captions">
            More than any other, this album has been covered, both live in concert, and recorded in studio.
        </span>
    <a href="https://en.wikipedia.org/wiki/The_Dark_Side_of_the_Moon#Covers,_tributes_and_samples">
    <img className="home-main-img"src="skwerlhome.jpeg"></img>
    </a>
    </div>
    <div className="home-pane-one">
    <a href="https://en.wikipedia.org/wiki/Dark_Side_of_the_Rainbow">
        <img className="home-img-one" src="dorothy.jpg"></img>
    </a>
    </div>
    <div className="home-pane-two">
        <span className="home-pane-two-captions">The Classic - Now hear it Classical!</span>
        <Link to="/albums/1/artists/3">
        <img className="home-img-two" src="vsqhome.jpg"></img>
        </Link>
    </div>
    <div className="home-pane-three">
        <span className="home-pane-three-captions">What happened to Syd?
        <br></br>
        Wish You Were Here!
        </span>
        <a href="https://www.theguardian.com/music/2016/jan/06/nick-kent-pink-floyd-syd-barrett-classic-profile-creem-1973">
            <img className="syd" src="syd.jpg"></img>
        </a>
</div>

</div>
)
}
}


export default withRouter(Home);
