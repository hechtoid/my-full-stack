import React from 'react';
import { withRouter, Redirect, Link} from 'react-router-dom';


class ArtistIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            filterA: true,
            filterB: false,
            filterC: false,
            filterD: false,
        };
        this.switchFilterA = this.switchFilterA.bind(this);
        this.switchFilterB = this.switchFilterB.bind(this);
        this.switchFilterC = this.switchFilterC.bind(this);
        this.switchFilterD = this.switchFilterD.bind(this);
    }

componentDidMount(){
    this.props.fetchArtists();
    document.title = 'the Artists - nurdCamp';
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
 
render(){
    let artistsfilter = []

    if(this.state.filterB) {
        artistsfilter = this.props.artists.filter((ele) =>
           ele.artist_name === "Pink Floyd")
    }
    else if (this.state.filterC) {
        artistsfilter = this.props.artists.filter((ele) =>
            ele.date_released < 2000)
    }
    else if (this.state.filterD) {
        artistsfilter = this.props.artists.filter((ele) =>
            ele.artist_name === "Nguyên Lê" || ele.artist_name ==="Mary Fahl")
    }

    else {
        artistsfilter = this.props.artists
    }
    let artists = artistsfilter.map(artist => {
        const link =`/albums/1/artists/${artist.id}`
        const id = `artist-index-item-${artist.id}`
        return (
            <div className="artist-index-item" 
            key={artist.id}
            id={id}
            > 
            <Link to={link}>
                <div className="artist-index-image-div">
                <img 
                className="artist-index-image-thumb" 
                src={artist.artist_image}>
                </img>
                </div>
                    <div className="artist-index-captions-album">
                        Dark Side of the Moon
                    </div>
                <div className="artist-index-captions-artist">
                    {artist.artist_name}
                </div>
                <div className="artist-index-about">
                    {artist.date_released}
                </div>  
                 
            </Link>
            </div>
        )
    })
return(
    <div className="artist-index">
        <div className="artist-index-title">
            A few of the Many Artists who have covered this Album:
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
            Everything
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
            Pre-2000s
        </span>
            <span id="filterD"
            className={
                this.state.filterD
                ? "filteron"
                : "filteroff"
            }
            onClick={this.switchFilterD()}
        >
            filterD
        </span>
        </div>
        {/* <div 
            className={
                this.state.filterB
                    ? this.state.filterBon
                    : this.state.filterBoff
            }
            onClick={this.switchFilterB()}
        >
            filterbar-b
        </div> */}
    <div className="artist-index-flex">
        
     
    <div className="artist-index-box">
        
        <br></br>
        <div className="artist-index-container">
        {artists}
        </div>
    </div>
    <div className="artist-info-box">
        artist info box will go here
    </div>
    </div>
    </div>
)
}
}


export default withRouter(ArtistIndex);