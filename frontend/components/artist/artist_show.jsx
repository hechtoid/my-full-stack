import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


class ArtistShow extends React.Component{
    constructor(props) {
        super(props);
    this.riaa = this.riaa.bind(this)
    }

componentDidMount(){
    document.title = 'an Artist - nurdCamp'
}

riaa(){
    alert("\tCopyright Violation!\nThis incident has been reported.")
}




render(){
return(
    <div className="artists-show">
        <ul className="songs-list">
            <li onClick={this.riaa}>Speak to Me</li>
            <li onClick={this.riaa}>Breathe</li>
            <li onClick={this.riaa}>On the Run</li>
            <li onClick={this.riaa}>Time</li>
        </ul>
    </div>
)
}
}


export default withRouter(ArtistShow);