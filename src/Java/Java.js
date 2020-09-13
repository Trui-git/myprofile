import React, { Component } from 'react';
import Video from '../components/Video'

class Java extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30, width: '1200px', height: '1000px' }}>
                <Video />
            </div>
        );
    }
}

export default Java;