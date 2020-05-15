import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';

class Song extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

componentDidMount() {
    document.title = "the Film - nurdCamp"
}

render(){
    return(
<div className="song-show">
<audio id="audio" ref={this.audioRef} src="Relaxation Spa Treatment.mp3"/>
            <div className="song-show-container">
            <div className="song-show-info">
             
    
                      
            </div >
            </div >
    </div>
)}
}
export default Song
