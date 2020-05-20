import React, { Component } from 'react';
import "./Card.css";

class Card extends Component {
    render() {
        const { name, email, id } = this.props;
        return (
            <div id="card-container">
                <img src={`https://robohash.org/${id}`} alt="" />
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        );
    }
}

export default Card;