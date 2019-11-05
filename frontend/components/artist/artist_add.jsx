import React from 'react';
import { withRouter } from 'react-router-dom';

class ArtistAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist_name: '',
            date_released: '1973',
            artist_image: '',
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
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }


render() {
    return (
        <div className="signup-form-container">
            <form onSubmit={this.handleSubmit} className="signup-form">
                Add an Artist that has covered Dark Side of the Moon
        <div className="top-divider"></div>
                {/* {this.renderErrors()} */}
                <div className="signup-form">
                    <label>Name of the Artist:
            <input type="text"
                            value={this.state.artist_name}
                            onChange={this.update('artist_name')}
                            className="signup-input"
                        />
                    </label>
                    <label>Year:
            <input type="number"
                    min="1973"
                    max="40000"
                    step="1"
                    value={this.state.date_released}
                    onChange={this.update('date_released')}
                    className="signup-input"
                        />
                    </label>
                    <label>Keyword:
            <input type="text"
                            value={this.state.about}
                            onChange={this.update('about')}
                            className="signup-input"
                        />
                    </label>
                    <label>
                        Art
            <input type="text"
                        value={this.state.artist_image}
                        onChange={this.update('artist_image')}
                        className="signup-input"
                        />
                    </label>
                    <label>
                        Was this a Live Performance?
                        <input type="checkbox"
                            className="signup-checkbox"
                            onChange={this.updateCheck()}
                            checked={this.state.live}
                        />
        </label>
                    <input
                        className="signin-submit"
                        type="submit"
                        value="Add Artist!"
                    />
                </div>
            </form>
        </div>
    );
}












}

export default withRouter(ArtistAdd)