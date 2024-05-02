import React, { Component } from 'react';
import Products from './Products';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My First React App!</h1>
                <Products />
                <Button variant="danger">Danger</Button>{' '}
            </div>
        );
    }
}
class Rating extends Component {
    render() {
        return (
            <div>
                <h1>Rating: {this.props.rating}</h1>
            </div>
        );
    }
}
export default App;
