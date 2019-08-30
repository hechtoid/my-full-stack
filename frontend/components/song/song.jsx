import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';

class Song extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            artist: 'RadioHead',
            title: 'These are my Twisted Words',
            // lyricslink: ''
        }
    }

    componentDidMount() {
        document.title = "the Song - nurdCamp"
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
    
    songPlay(){
        document.title = "▶ the Song - nurdCamp"
    }

    render(){ 
    
        return(
 
    <div className="song-show">
        <audio controls
        src='radiohead-these_are_my_twisted_words-(advance)-2009-woi/01-radiohead-these_are_my_twisted_words-(advance)-2009-woi.mp3'>
        </audio>

        <div className="playButton" onClick={this.songPlay} >
            ▶
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