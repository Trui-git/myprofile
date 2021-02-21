import React, { Component } from 'react';
import Image from '../images/photoshop.png'

class Photoshop extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30, width: '1200px', height: '1000px' }}>
                <img src={Image} alt="adobe" />
            </div>
        );
    }
}

export default Photoshop;