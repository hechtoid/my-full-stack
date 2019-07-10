import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


class ArtistShow extends React.Component{
    constructor(props) {
        super(props);
    this.riaa = this.riaa.bind(this)
    }

componentDidMount(){
    this.props.fetchArtist(this.props.match.params.artistId);
    document.title = `${this.props.match.params.artistId} - nurdCamp`;
 
}

riaa(){
    alert("\tCopyright Violation!\nThis incident will be reported.")
}




render(){
return(
    <div className="artist-show">
        <div> here are some songs by {this.props.artist}</div>
        <ul className="songs-list">
            <li onClick={this.riaa}>Speak to Me</li>
            <li onClick={this.riaa}>Breathe</li>
            <li onClick={this.riaa}>On the Run</li>
            <li onClick={this.riaa}>Time</li>
        </ul>
    </div>
)
}
}


export default withRouter(ArtistShow);