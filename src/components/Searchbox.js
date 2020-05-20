import React from 'react';
import './Searchbox.css'

const Searchbox = ({ searcheChange }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Enter robot name"
                onChange={searcheChange}
            />
        </div>
    );
}

export default Searchbox;