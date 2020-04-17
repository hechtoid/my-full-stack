import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


class ArtistShow extends React.Component{
    constructor(props) {
        super(props);
        this.state =  {
            playing: false,
            selectedSong: "Speak to Me",
            strike: false,
        }
        this.riaa = this.riaa.bind(this)
        this.songToggle = this.songToggle.bind(this)
        this.songTimer = this.songTimer.bind(this)
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
    {that.setState({playing: false})}, 123)
    setTimeout(function () { that.props.history.push("/song") }, 500)  
}
songToggle() {
    if (!this.state.playing) {
        document.title = "▶ the Song - nurdCamp"
        this.setState({
            playing: true,
            strike: true,
        })
        this.songTimer()
        if (this.state.strike) {
            this.riaa()
        }
    } else {
        document.title = "the Song - nurdCamp"
        this.setState({
            playing: false,
        })
    }
}
songTimer(){
    let that = this
    setTimeout(function () { 
        document.title = "the Song - nurdCamp"
        that.setState({
            playing: false,
        })
    }, 1234)
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
                <span className="song-list-item-clef">𝄞</span>
                <span className="song-list-item-track">{song.id}.</span>
                <span className="song-list-item-title">{song.title}</span>
            </li >)   
                 })
  

return(
<div className="artist-show">
        
    <div className="artist-show-container">
        
    <div className="artist-show-info">
        <div className="artist-show-album">
            Dark Side of the Moon
        </div>
            
            <div className="artist-show-name">
by <Link to="/albums/1/artists/" className="artist-show-name-link">{this.props.artist.artist_name}</Link>
            </div>
            <div className="artist-show-player">
            <div className="artist-show-playButton" onClick={this.songToggle} >
<span className={this.state.playing ? 'displayNone' : 'displayAll'}>▶</span>
<span className={this.state.playing ? 'displayAll' : 'displayNone'} id="pause">&#9612;&#9612;</span>
            </div>
            <div className="artist-show-title">
                {this.state.selectedSong}<span className="artist-show-time">00:00 / <span className="∞">∞</span>:<span className="∞">∞</span></span>
            </div>
            <div className="artist-show-loader">
<div className={this.state.playing ? 'displayAll' : 'displayNone'} id="loader"></div>
            </div>
            </div>
            <div className="artist-show-lower-div">
            <div className="artist-show-recording">
                {this.props.artist.live ? "Live Performance" : "Studio Album"}
            </div>
            <div className="artist-show-about">
                {this.props.artist.artist_name}'s {this.props.artist.about} Dark Side of the Moon.
                <br></br>
                Released in {this.props.artist.date_released}
            </div>
        <ul className="songs-list">
          {songs}
            
        </ul>
        </div>
        </div>
        <a href={this.props.artist.artist_image}>
           <img
            className="artist-show-image"
            src={this.props.artist.artist_image}>
            </img>
        </a>
    </div >
</div>
)
}
}


export default withRouter(ArtistShow);