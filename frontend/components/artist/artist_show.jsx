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
    document.title = `show Artist - nurdCamp`;
    // document.title = `${this.props.artist.artist_name} - nurdCamp`;
}

riaa(){
    alert("\tCopyright Violation!\nThis incident will be reported.")
}
mouseover(){
    document.body.style.cursor = "pointer"; void 0;
}
mouseout(){
document.body.style.cursor = "default"; void 0;
}

render(){
    if (!this.props.artist){
        return <div>Loading...</div>;
    }
    document.title = `${this.props.artist.artist_name} - nurdCamp`
return(
    <div className="artist-show">
        <div className="song-list-intro"> 
            The songs of {this.props.artist.artist_name}: 
        </div>
        <ul className="songs-list">
            <li 
            className="song-list-item" 
            onClick={this.riaa} 
            onMouseOver={this.mouseover}
            onMouseOut={this.mouseout}
            >
            Speak to Me
            </li>
            
        </ul>
    </div>
)
}
}


export default withRouter(ArtistShow);