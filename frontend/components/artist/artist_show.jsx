import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


class ArtistShow extends React.Component{
    constructor(props) {
        super(props);
        this.state =  {
            name: 'F'
        }
        this.riaa = this.riaa.bind(this)
    }

componentDidMount(){
    this.props.fetchArtist(this.props.match.params.artistId);
    document.title = `show artist - nurdCamp`;
    // document.title = `${this.props.artist.artist_name} - nurdCamp`;
}

riaa(){
    alert("\tCopyright Violation!\nThis incident will be reported.")
}

render(){

    if (!this.props.artist){
        return <div>Loading...</div>;
    }
    document.title = `${this.props.artist.artist_name} - nurdCamp`
return(
    <div className="artist-show">
        <div className="song-list-intro"> Here are some songs by {this.props.artist.artist_name}: </div>
        <ul className="songs-list">
            <li className="song-list-item" onClick={this.riaa}>Speak to Me</li>
            <li className="song-list-item" onClick={this.riaa}>Breathe</li>
            <li className="song-list-item" onClick={this.riaa}>On the Run</li>
            <li className="song-list-item" onClick={this.riaa}>Time</li>
            <li className="song-list-item" onClick={this.riaa}>Breathe (reprise)</li>
            <li className="song-list-item" onClick={this.riaa}>The Great Gig in the Sky</li>
            <li className="song-list-item" onClick={this.riaa}>Money</li>
            <li className="song-list-item" onClick={this.riaa}>Us and Them</li>
            <li className="song-list-item" onClick={this.riaa}>Any Colour You Like</li>
            <li className="song-list-item" onClick={this.riaa}>Brain Damage</li>
            <li className="song-list-item" onClick={this.riaa}>Eclipse</li>
        </ul>
    </div>
)
}
}


export default withRouter(ArtistShow);