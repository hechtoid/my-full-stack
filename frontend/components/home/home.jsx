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
</div>
)
}
}


export default withRouter(Home);
