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
        this.props.addArtist(artist)
        .then(response => this.props.history.push(`/albums/1/artists/${response.artist.id}`))
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

render() {
    return (
<div className="artist-add">
<div className="artist-form"> 

    <form onSubmit={this.handleSubmit} className="artist-form">
                    <div className="errors">
                        {this.renderErrors()}
                    </div>
            <label>Artist Name
    <input type="text"
                    className="artist-form"
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
                    className="artist-form"
                    value={this.state.about}
                    onChange={this.update('about')}
                    required/>
            </label>
            <label>
                Album Art URL
    <input type="text"
                className="artist-form"
                list="albumArt"
                value={this.state.artist_image}
                onChange={this.update('artist_image')}
                required/>
        <datalist id="albumArt">
            <option value="default.jpg"></option>
            <option value="pinkfloyd.jpg"></option>
            <option value="syd.jpg"></option>
            <option value="vsq.jpg"></option>
            <option value="whiskey.jpg"></option>
            <option value="skwerl.jpg"></option>
            <option value="dorothy.jpg"></option>
            <option value="vocomotion.jpeg"></option>
        </datalist>
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