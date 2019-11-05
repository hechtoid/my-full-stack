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
        this.audioRef = React.createRef();
        this.songToggle=this.songToggle.bind(this)
        this.songStart=this.songStart.bind(this)
        this.songDuration=this.songDuration.bind(this)
        this.songCurrentTime = this.songCurrentTime.bind(this)
    }

componentDidMount() {
    document.title = "the Song - nurdCamp"
    this.audioRef.current.onended = (event) => {
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
        that.audioRef.current.play()
    }, 2345)
}
songToggle(){
    if (!this.state.playing){
        document.title = "▶ the Song - nurdCamp"
        this.audioRef.current.play()
    } else{
        document.title = "the Song - nurdCamp"
        this.audioRef.current.pause()
    }
    this.setState({
        playing: !this.state.playing
    })
}

songCurrentTime() {
    return this.audioRef.current 
    ? this.timeConverter(this.audioRef.current.currentTime || 0) 
    : '0:00';
}
songDuration() {
    return this.audioRef.current 
    ? this.timeConverter(this.audioRef.current.duration || 0)
    : <span className="song-duration">
        <span className='song-∞-a'>∞
        </span>
        <span className='song-∞-colon'>:
        </span>
        <span className='song-∞-b'>∞
        </span>
        <span className='song-∞-c'>∞
        </span>
        </span>
}
timeConverter(floatingString) {
    let chomp = Math.floor(parseFloat(floatingString));
    let minutes = Math.floor(chomp / 60);
    let seconds = chomp % 60;
    if (seconds < 10) { seconds = '0' + seconds; }
    return minutes + ':' + seconds;
}


render(){
    return(
<div className="song-show">
<audio id="audio" ref={this.audioRef} src="Relaxation Spa Treatment.mp3"/>
            <div className="song-show-container">
                <div className="song-show-info">
                    <div className="song-show-name">
                        {this.state.title}
                    </div>
                    <div className="song-show-byline">
                    from <a 
                        href="https://en.wikipedia.org/wiki/The_Wired_CD" 
                        className="song-show-byline-link">
                    {this.state.album}
                    </a> by <a 
                        href="https://en.wikipedia.org/wiki/Dan_the_Automator" 
                        className="song-show-byline-link">
                    {this.state.artist}
                        </a>
                    </div>
                    <div className="song-show-player">
                        <div className="song-show-playButton" onClick={this.songToggle} >
<span className={this.state.playing ? 'displayNone' : 'displayAll'}>▶</span>
<span className={this.state.playing ? 'displayAll' : 'displayNone'} id="pause">⏸</span>
                        </div>
                        <div className="song-show-title">
                            <span className="song-show-time">{this.songCurrentTime()} / {this.songDuration()}</span>
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
