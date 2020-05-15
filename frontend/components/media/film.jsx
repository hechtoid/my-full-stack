import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';

class Film extends React.Component{
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
<div className="film-show">
            <div className="film-show-container">
            <div className="film-show-info">
             
            <iframe src="http://www.youtube.com/embed/NtExVJlgEC0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      
            </div >
            </div >
    </div>
)}
}
export default Film
