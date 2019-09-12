import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';

class Song extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            artist: 'RadioHead',
            title: 'These are my Twisted Words',
            // lyricslink: ''
            playing: false
        }
        this.songToggle=this.songToggle.bind(this)
    }

    componentDidMount() {
        document.title = "the Song - nurdCamp"
        this.audio=document.getElementsByTagName('audio')[0]
        this.setState({
lyricsLink:
`http://www.google.com/search?q=${this.state.artist}
lyrics "${this.state.title}"`,
whosampledLink:
`https://www.whosampled.com/search/?q=${this.state.artist}
${this.state.title}`,
spotiLink:
`https://open.spotify.com/search/results/${this.state.artist}
${this.state.title}`
        })

    }

    songToggle(){
      if (!this.state.playing){
            document.title = "▶ the Song - nurdCamp"
            this.audio.play()
      } else{
        document.title = "the Song - nurdCamp"
        this.audio.pause()
      }
      this.setState({
        playing: !this.state.playing
      })
    }

    render(){

        return(

    <div className="song-show">
        <audio
        src='radiohead-these_are_my_twisted_words-(advance)-2009-woi/01-radiohead-these_are_my_twisted_words-(advance)-2009-woi.mp3'>
        </audio>

        <div className="playButton" onClick={this.songToggle} >
            <span id={this.state.playing? 'displayAll':'displayNone'}>▶</span>
            <span id={this.state.playing? 'displayNone':'displayAll'} className="pause">⏸</span>
        </div>



    <div className="song-info">
            <a
            className="song-links"
            href={this.state.lyricsLink}
            target="_blank">
        <div className="song-links-div" >
                search for Lyrics
        </div>
            </a>

            <a
            className="song-links"
            href={this.state.spotiLink}
            target="_blank">
        <div className="song-links-div" >
                check Spotify
        </div>
            </a>

            <a
            className="song-links"
            href={this.state.whosampledLink}
            target="_blank">
        <div className="song-links-div" >
                see whoSampled
        </div>
            </a>



    </div>


    </div>
)}
}
export default Song
