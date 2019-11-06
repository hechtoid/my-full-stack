import React from 'react';
import { withRouter } from 'react-router-dom';

class ArtistAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist_name: '',
            date_released: '1973',
            artist_image: 'default.jpg',
            about: '',
            live: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCheck = this.updateCheck.bind(this)
    }
    componentDidMount() {
        document.title = 'Add an Artist - nurdCamp'
    }
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    updateCheck() {
        return e => this.setState({
            live: e.currentTarget.checked
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const artist = Object.assign({}, this.state);
        this.props.addArtist(artist);
        this.props.history.push("/albums/1/artists")
    }

render() {
    return (
<div className="artist-add">
<div className="artist-form">   
    <form onSubmit={this.handleSubmit} className="artist-form">
            <label>Artist Name
    <input type="text"
                    value={this.state.artist_name}
                    onChange={this.update('artist_name')}
                    required/>
            </label>
            <label>Year
    <input type="number"
            min="1973"
            max="40000"
            step="1"
            value={this.state.date_released}
            onChange={this.update('date_released')}
            required/>
            </label>
            <label>Tag
    <input type="text"
                    value={this.state.about}
                    onChange={this.update('about')}
                    required/>
            </label>
            <label>
                Album Art URL
    <input type="text"
                value={this.state.artist_image}
                onChange={this.update('artist_image')}
                required/>
            </label>
            <label>
                Was this a Live Performance?
                <input type="checkbox"
                    onChange={this.updateCheck()}
                    checked={this.state.live}
                    className="artist-add-checkbox"
                />
            </label>
            <input
                className="submit"
                type="submit"
                value="Add Artist!"
            />
    </form>
    </div>
    <div className="artist-add-image">
            <img
                className="artist-add-image"
                src={this.state.artist_image}>
            </img>
    </div>
</div>

    );
}












}

export default withRouter(ArtistAdd)