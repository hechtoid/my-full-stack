import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };

    }
componentDidMount(){
    document.title = 'Home - nurdCamp'
}

render(){
return(
<div className="home-container">
        <div className="social-icons">
            <a href="https://github.com/hechtoid/" title="GitHub">
                <i className="fab fa-github">f</i>
            </a>
            <a href="https://www.linkedin.com/in/sam-h-6b1b4665/" title="Linkedin">
                <i className="fab fa-linkedin-in">f</i>
            </a>
        </div>
</div>
)
}
}


export default withRouter(Home);
