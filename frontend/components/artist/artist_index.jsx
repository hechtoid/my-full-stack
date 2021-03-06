import React from 'react';
import { withRouter, Redirect, Link} from 'react-router-dom';


class ArtistIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedArtist: 1,
            filterA: true,
            filterB: false,
            filterC: false,
            filterD: false,
            filter2A: true,
            filter2B: false,
            filter2C: false,
        };
        this.selectArtist = this.selectArtist.bind(this);
        this.switchFilterA = this.switchFilterA.bind(this);
        this.switchFilterB = this.switchFilterB.bind(this);
        this.switchFilterC = this.switchFilterC.bind(this);
        this.switchFilterD = this.switchFilterD.bind(this);
        this.switchFilter2A = this.switchFilter2A.bind(this);
        this.switchFilter2B = this.switchFilter2B.bind(this);
        this.switchFilter2C = this.switchFilter2C.bind(this);
    }

componentDidMount(){
    this.props.fetchArtists();
    document.title = 'the Artists - nurdCamp';
}
    selectArtist(id){
        return e => this.setState({
            selectedArtist: id,
        });
    }
    switchFilterA(){
        return e => this.setState({
            filterA: true,
            filterB: false,
            filterC: false,
            filterD: false,
        });
    }
    switchFilterB(){
        if (this.state.filterB && !this.state.filterC && !this.state.filterD) {
            return e => this.setState({ filterA: true, filterB: false })
        }
        else{
        return e => this.setState({
            filterB: true,
            filterA: false,
            filterC: false,
            filterD: false,
        });
        }
    }
    switchFilterC(){
        if (!this.state.filterB && this.state.filterC && !this.state.filterD) {
            return e => this.setState({ filterA: true, filterC: false })
        }
        else{
        return e => this.setState({
            filterB: false,
            filterA: false,
            filterC: true,
            filterD: false,
        });
        }
    }
    switchFilterD(){
        if (!this.state.filterB && !this.state.filterC && this.state.filterD) {
            return e => this.setState({ filterA: true, filterD: false })
        }
        else{
        return e => this.setState({
            filterB: false,
            filterA: false,
            filterC: false,
            filterD: true,
        });
        }
    }
    switchFilter2A() {
        return e => this.setState({
            filter2A: true,
            filter2B: false,
            filter2C: false,
        });
    }
    switchFilter2B() {
        if (this.state.filter2B && !this.state.filter2C) {
            return e => this.setState({ filter2A: true, filter2B: false })
        }
        else {
            return e => this.setState({
                filter2B: true,
                filter2A: false,
                filter2C: false,
            });
        }
    }
    switchFilter2C() {
        if (!this.state.filter2B && this.state.filter2C) {
            return e => this.setState({ filter2A: true, filter2C: false })
        }
        else {
            return e => this.setState({
                filter2B: false,
                filter2A: false,
                filter2C: true,
            });
        }
    }
    goToLink(link){
        return e => this.props.history.push(link)
    }
render(){
    let artistsFilter = []
    if(this.state.filterB) {
        artistsFilter = this.props.artists.filter((ele) =>
           ele.artist_name === "Pink Floyd")
    }
    else if (this.state.filterC) {
        artistsFilter = this.props.artists.filter((ele) =>
            ele.date_released >= 2000)
    }
    else if (this.state.filterD) {
        artistsFilter = this.props.artists.filter((ele) =>
            ele.artist_name === "Nguyên Lê" || ele.artist_name ==="Mary Fahl")
    }
    else {
        artistsFilter = this.props.artists
    }
    let artistsFilterr = artistsFilter
    if (this.state.filter2B) {
        artistsFilterr = artistsFilter.filter((ele) =>
            ele.live )
    }
    else if (this.state.filter2C) {
        artistsFilterr = artistsFilter.filter((ele) =>
            !ele.live )
    }
    let artists = artistsFilterr.map(artist => {
        const link =`/albums/1/artists/${artist.id}`
        const id = `artist-index-item-${artist.id}`
        const key = `artist-index-item-${artist.id}`

        
        return (
            <div className="artist-index-item" 
            key={key}
            id={id}
            onClick={this.selectArtist(artist.id)}
            onDoubleClick={this.goToLink(link)}
            > 
                <div className="artist-index-image-div"
                    
                >
                <img 
                className="artist-index-image-thumb" 
                src={artist.artist_image}>
                </img>
                </div>
                {/* <Link to={link}> */}
                <div className="artist-index-captions-album">
                    Dark Side of the Moon
                </div>
                <div className="artist-index-captions-artist">
                    {artist.artist_name}
                </div>
                <div className="artist-index-about">
                    {artist.date_released}
                </div>  
                {/* </Link>    */}
            </div>
        )
    })
    let sideartistsFilter = this.props.artists.filter((ele) =>
        ele.id === this.state.selectedArtist)
    let sideArtist = sideartistsFilter.map(artist => {
        const link = `/albums/1/artists/${artist.id}`
        const id = `artist-index-item-${artist.id}`
        const key = `side-artist-${artist.id}`
        return (
            <Link to={link}>
            <div className="artist-side-info"
                key={key}
                id="side-artist"
            >
                <img
                    className="side-artist-image-thumb"
                    src={artist.artist_image}>
                </img>
                <div className="side-artist-image-caption">
                    The {artist.about} Dark Side of the Moon
                </div>
                <div className="side-artist-image-name">
                    {artist.artist_name}
                </div>
                <div className="side-artist-image-recording">
                    {artist.live ? "Live" : "Studio"} Recording
                </div>
            </div>
            </Link>
        )
    })
                
    
return(
    <div className="artist-index">
        <div className="artist-index-title">
            Some of the many Artists who have covered this Album. 
            <br></br>
            Know another? Add them <span className="artist-index-upload-link"><Link className="artist-index-upload-link" to="/new/">here</Link></span>!
        </div>
        <div className="filterbar">
        <span id="filterA"
            className={
                this.state.filterA
                ? "filteron"
                : "filteroff"
            }
            onClick={this.switchFilterA()}
        >
            All Releases
        </span>
            <span id="filterB"
            className={
                this.state.filterB
                ? "filteron"
                : "filteroff"
            }
            onClick={this.switchFilterB()}
        >
            Original
        </span>
            <span id="filterC"
            className={
                this.state.filterC
                ? "filteron"
                : "filteroff"
            }
            onClick={this.switchFilterC()}
        >
            2000s
        </span>
            <span id="filterD"
            className={
                this.state.filterD
                ? "filteron"
                : "filteroff"
            }
            onClick={this.switchFilterD()}
        >
            No Rainbow
        </span>
        </div>
        <div className="filterbar2">
        <span id="filter2A"
            className={
                this.state.filter2A
                ? "filteron"
                : "filteroff"
            }
            onClick={this.switchFilter2A()}
        >
            All Releases
        </span>
            <span id="filter2B"
            className={
                this.state.filter2B
                ? "filteron"
                : "filteroff"
            }
            onClick={this.switchFilter2B()}
        >
            Live
        </span>
            <span id="filter2C"
            className={
                this.state.filter2C
                ? "filteron"
                : "filteroff"
            }
            onClick={this.switchFilter2C()}
        >
            Studio
        </span>
        </div>
      
    <div className="artist-index-flex">
        
     
    <div className="artist-index-box">
        <div className="artist-index-container">
        {artists}
        </div>
    </div>
    <div className="artist-info-box">
        
        {sideArtist}
    </div>
    </div>
    </div>
)
}
}


export default withRouter(ArtistIndex);