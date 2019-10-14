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
      This album has enduring fame. Why is that?
</div>
)
}
}


export default withRouter(Home);
