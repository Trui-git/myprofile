import React, { Component } from 'react';
import Video from '../components/VideoSql'

class Sql extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30, width: '1200px', height: '1000px' }}>
                <Video />
            </div>
        );
    }
}

export default Sql;