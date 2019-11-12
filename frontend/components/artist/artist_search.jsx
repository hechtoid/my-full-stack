import React from 'react';
import { withRouter, Redirect, Link} from 'react-router-dom';


class ArtistSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

componentDidMount(){
    this.props.fetchArtists();
    document.title = 'Artist Search - nurdCamp';
}
    
goToLink(link){
    return e => this.props.history.push(link)
}
render(){
       
return(
<div className="artist-search">
    <div className="artist-search-title">
        Search for an Artist
    </div>
            

</div>
)
}
}


export default withRouter(ArtistSearch);