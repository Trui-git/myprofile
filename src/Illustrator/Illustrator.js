import React, { Component } from 'react';
import Image from '../images/illustrator.png'

class Illustrator extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30, width: '1200px', height: '1000px' }}>
                <img src={Image} alt="illustrator" />
            </div>
        );
    }
}

export default Illustrator;