import React from 'react';
import { withRouter, Redirect, Link} from 'react-router-dom';


class ArtistSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search_term: '',
            selectedArtist: 1
        };
        this.goToLink=this.goToLink.bind(this);
        this.selectArtist = this.selectArtist.bind(this);

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
    
selectArtist(id) {
    return e => this.setState({
        selectedArtist: id,
    });
}
goToLink(link){
    return e => this.props.history.push(link)
}
render(){
      let artistList = this.props.artists.map(artist => {
        const link = `/albums/1/artists/${artist.id}`
        const id = `artist-search-item-${artist.id}`
        const key = `artist-search-item-${artist.id}`
        
        return (
            <div 
                onClick={this.goToLink(link)}
                key = {key}
                >
            <option
            value={artist.artist_name}
            > 
                
            { artist.artist_name }
            </option>
            </div>
        )
    })
return(
<div className="artist-search">
        <input type="text"
            className="artist-search-input"
            list="artistSearch"
            value={this.state.search_term}
            onChange={this.update('search_term')}
            // onSubmit=
            placeholder="&#128269;"
            />
        <datalist id="artistSearch">
            {artistList}
        </datalist>

</div>
)
}
}


export default withRouter(ArtistSearch);