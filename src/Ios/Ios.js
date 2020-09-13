import React, { Component } from 'react';
import Video from '../components/VideoIos'

class Ios extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30, width: '1200px', height: '1000px' }}>
                <Video />
            </div>
        );
    }
}

export default Ios;