import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


class ArtistShow extends React.Component{
    constructor(props) {
        super(props);
        // this.state =  {
        //     name: 'F'
        // }
        this.riaa = this.riaa.bind(this)
      
    }

componentDidMount(){
    this.props.fetchArtist(this.props.match.params.artistId);
    this.props.fetchSongs();
    document.title = `show Artist - nurdCamp`;
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


    let songs = <div>lol</div>

    // if (!this.props.songs){
    //     return <div>Loading...</div>;
    // }
    // if (this.props.songs.length<1) {console.log('MT')}
    // else{ console.log(this.props.songs)}
    
   songs = this.props.songs.map(song => {
        return(
            < li
                key={song.id}
                className="song-list-item"
                onClick={this.riaa}
                onMouseOver={this.mouseover}
                onMouseOut={this.mouseout}
            >
                {song.title}
            </li >)
                    
                 })
  

return(
    <div className="artist-show-container">
    <div className="artist-show">
        <div className="song-list-intro"> 
            {this.props.artist.artist_name}:
            <br></br>
            some {this.props.artist.about} musicians
        </div>
        <ul className="songs-list">
          {songs}
            
        </ul>
    </div>
        <img
            className="artist-show-image"
            src={this.props.artist.artist_image}>
        </img>
    </div >
)
}
}


export default withRouter(ArtistShow);