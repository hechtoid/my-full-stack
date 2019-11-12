import React from 'react';
import { withRouter, Redirect, Link} from 'react-router-dom';


class ArtistSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search_term: ''
        };
        this.goToLink=this.goToLink.bind(this);
    }

componentDidMount(){
    this.props.fetchArtists();
    document.title = 'Artist Search - nurdCamp';
}

update(field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    });
}


goToLink(link){
    let that=this
    return function(e) {
        that.props.history.push(link);
        that.setState({
                search_term: ''
            });
        }
}

render(){
    let artistList = ''
    let artistSearch = []
if (this.state.search_term.length > 2){
    artistSearch = this.props.artists.filter(artist => 
        artist.artist_name.toLowerCase().includes(this.state.search_term.toLowerCase()))
    artistList = artistSearch.map(artist => {
        const link = `/albums/1/artists/${artist.id}`
        const id = `artist-search-item-${artist.id}`
        const key = `artist-search-item-${artist.id}`
        
        return (
            <div 
                className = 'artist-search-item'
                key = {key}
                onClick = {this.goToLink(link)}
                >                
            { artist.artist_name }
            </div>
            )
        })
    } else if(this.state.search_term.length > 0) {artistList =
    <div className="artist-search-filler">Loading Results...</div>
}

return(
<div className="artist-search">
        <input type="text"
            className="artist-search-input"
            value={this.state.search_term}
            onChange={this.update('search_term')}
            placeholder="&#128269;  Artist Search"
            />
        <div className='artist-search-results'>
            {artistList}
        </div>

</div>
)
}
}


export default withRouter(ArtistSearch);