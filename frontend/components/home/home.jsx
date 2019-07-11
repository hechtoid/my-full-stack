import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            scrollamount: 11
        };
    this.speedup = this.speedup.bind(this)
    this.slowdown = this.slowdown.bind(this)
    }
componentDidMount(){
    document.title = 'Home - nurdCamp'
}

speedup(){
    this.setState({scrollamount: 42})
}
slowdown(){
    this.setState({scrollamount: 11})
}
render(){
return(
<div className="home-container">
    <div className="home-titles">
        Discover new Albums!
    </div>
    <marquee 
    onMouseOver={this.speedup} 
    onMouseOut={this.slowdown}
    className='home-marquee' 
    behavior='alternate' 
    scrollamount={this.state.scrollamount}>
        <div className='marquee-container'>
            <img className='marquee-image' src='dsotm.jpg'></img>
        </div>
        <div className='marquee-container'>
            <img className='marquee-image' src='dsotm.jpg'></img>
        </div>
        <div className='marquee-container'>
            <img className='marquee-image' src='dsotm.jpg'></img>
        </div>
        <div className='marquee-container'>
            <img className='marquee-image' src='dsotm.jpg'></img>
        </div>
        <div className='marquee-container'>
            <img className='marquee-image' src='dsotm.jpg'></img>
        </div>
        <div className='marquee-container'>
            <img className='marquee-image' src='dsotm.jpg'></img>
        </div>
        <div className='marquee-container'>
            <img className='marquee-image' src='dsotm.jpg'></img>
        </div>
        <div className='marquee-container'>
            <img className='marquee-image' src='dsotm.jpg'></img>
        </div>
        <div className='marquee-container'>
            <img className='marquee-image' src='dsotm.jpg'></img>
        </div>
        <div className='marquee-container'>
            <img className='marquee-image' src='dsotm.jpg'></img>
        </div>
        <div className='marquee-container'>
            <img className='marquee-image' src='dsotm.jpg'></img>
        </div>
        <div className='marquee-container'>
            <img className='marquee-image' src='dsotm.jpg'></img>
        </div>
        <div className='marquee-container'>
            <img className='marquee-image' src='dsotm.jpg'></img>
        </div>
    </marquee>
    <div className="home-divider"></div>
    <div className="home-titles">
        Upload your own Music!
    </div>
    <img className="garageband" src="garageband.png"></img>
    <div className="home-titles">
        Connect with Fellow Fans!
    </div>
    <img className="fans" src="osl.png"></img>
  
    

</div>
)
}
}


export default withRouter(Home);
