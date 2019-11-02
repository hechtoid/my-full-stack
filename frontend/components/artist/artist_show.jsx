import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


class ArtistShow extends React.Component{
    constructor(props) {
        super(props);
        this.state =  {
            playing: false,
            selectedSong: "Speak to Me",
            strikes: 0,
        }
        this.riaa = this.riaa.bind(this)
        this.songToggle = this.songToggle.bind(this)
        this.songSelect = this.songSelect.bind(this)
    }

componentDidMount(){
    this.props.fetchArtist(this.props.match.params.artistId);
    this.props.fetchSongs();
    document.title = `nurdCamp presents`;
}

riaa(){
    alert(`\tCopyright Violation!\n\nThis incident will be reported.`)
    let that = this
    setTimeout(function () 
    {that.setState({playing: false})}, 100)
    setTimeout(function () { that.props.history.push("/song") }, 500)  
}
songToggle() {
    if (!this.state.playing) {
        document.title = "▶ the Song - nurdCamp"
        this.setState({
            playing: true,
            strikes: this.state.strikes + 1,
        })
        if (this.state.strikes === 2) {
            this.riaa()
        }
    } else {
        document.title = "the Song - nurdCamp"
        this.setState({
            playing: false,
        })
    }
}
songSelect(title){
    return e => this.setState({
        selectedSong: title
    });
}

render(){
    if (!this.props.artist){
        return <div>Loading...</div>;
    }

    document.title = `${this.state.playing? "▶":""} nurdCamp presents: ${this.props.artist.artist_name}!`

    let songs = <div>loading</div>

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
                onClick={this.songSelect(song.title)}
            >
                <span className="clef">𝄞</span>
                <span className="track">{song.id}.</span>
                <span className="title">{song.title}</span>
            </li >)   
                 })
  

return(
<div className="artist-show">
        
    <div className="artist-show-container">
        
    <div className="artist-show-info">
        <div className="song-list-intro"> 
        <div className="artist-show-album">
            Dark Side of the Moon
        </div>
            
            <div className="artist-show-name">
by <Link to="/albums/1/artists/" className="artist-show-name-link">{this.props.artist.artist_name}</Link>
            </div>
            
            <div className="artist-show-playButton" onClick={this.songToggle} >
                <span id={this.state.playing ? 'displayNone' : 'displayAll'}>▶</span>
                <span id={this.state.playing ? 'displayAll' : 'displayNone'} className="pause">⏸</span>
            </div>
            <div className="artist-show-title">
                {this.state.selectedSong}
            </div>

            <div className="artist-show-recording">
                {this.props.artist.live ? "Live Performance" : "Studio Album"}
            </div>
            <div className="artist-show-about">
                {this.props.artist.artist_name}'s {this.props.artist.about} Dark Side of the Moon.
                <br></br>
                Released in {this.props.artist.date_released}
            </div>
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
</div>
)
}
}


export default withRouter(ArtistShow);