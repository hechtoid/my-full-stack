import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';

class Song extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            artist: 'Dan the Automator',
            album: 'The Wired CD',
            title: 'Relaxation Spa Treatment',
            playing: false
        }
        this.songToggle=this.songToggle.bind(this)
        this.songStart=this.songStart.bind(this)
    }

componentDidMount() {
    document.title = "the Song - nurdCamp"
    this.audio=document.getElementById('audio')
    this.audio.onended = (event) => {
        document.title = "the Song - nurdCamp"
        this.setState({
            playing: false
        })
    }
    this.songStart()
}

songStart(){
    let that = this
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
    <audio id="audio" src="Relaxation Spa Treatment.mp3"/>
            <div className="song-show-container">
                <div className="song-show-info">
                    <div className="song-show-album">
                        {this.state.title}
        </div>

                    <div className="song-show-name">
                    from <a 
                        href="https://en.wikipedia.org/wiki/The_Wired_CD" 
                        className="song-show-name-link">
                    {this.state.album}
                    </a> by <a 
                        href="https://en.wikipedia.org/wiki/Dan_the_Automator" 
                        className="song-show-name-link">
                    {this.state.artist}
                        </a>
                    </div>
                    <div className="song-show-player">
                        <div className="song-show-playButton" onClick={this.songToggle} >
                            <span className={this.state.playing ? 'displayNone' : 'displayAll'}>▶</span>
                            <span className={this.state.playing ? 'displayAll' : 'displayNone'} id="pause">⏸</span>
                        </div>
                        <div className="song-show-title">
                        <span className="song-show-time">00:00 / <span className="∞">∞</span>:<span className="∞">∞</span></span>
                        </div>
                    </div>
                    <div className="song-show-lower-div">
                        <div className="song-show-recording">
                        Sampling Plus License
                        <i className="fab fa-creative-commons"></i>
                        </div>
                        <div className="song-show-about">
                            The Wired CD is a collaborative effort between Wired magazine, 
                            <br></br>
                            Creative Commons, and sixteen musicians and groups.
                            <br></br>
                            The first major compilation of music free to sample and share 
                            <br></br>
                            under a "some rights reserved" copyright,
                            <br></br>
                            the songs were released under one of two Creative Commons Licenses, 
                            <br></br>
                            permitting sampling and file-sharing of the songs. 
                            <br></br>
                            Released in 2004
                        </div>
                      
                    </div>
                </div>
                <a href="wired.jpg">
                    <img
                        className="song-show-image"
                        src="wired.jpg">
                    </img>
                </a>
            </div >
    </div>
)}
}
export default Song
