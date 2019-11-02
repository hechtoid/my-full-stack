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
        this.songPlay=this.songPlay.bind(this)
    }

componentDidMount() {
    document.title = "the Song - nurdCamp"
    this.audio=document.getElementsByTagName('audio')[0]
    this.songPlay()
}
songPlay(){
    let that = this
    this.audio.onended = (event) => {
        Document.title = "the Song - nurdCamp"
        this.setState({
            playing: false
        })
    }
    setTimeout(function () {
        that.setState({
            playing: true
        })
        document.title = "▶ the Song - nurdCamp"
        that.audio.play()
    }, 2345)
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
    <audio src="cool music.mp3"/>
        
    <div className="elevator-pitch">
        Can't just Let You Listen to all these artists for free!
        <br></br>
        Please enjoy this free & free music instead.
    </div>
        
    <div className="playButton" onClick={this.songToggle} >
        <span id={this.state.playing? 'displayNone':'displayAll'}>▶</span>
        <span id={this.state.playing? 'displayAll':'displayNone'} className="pause">⏸</span>
    </div>

    <div className="song-info">

    </div>
    
    </div>
)}
}
export default Song
