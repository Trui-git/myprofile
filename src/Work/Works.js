import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class Works extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Products Page</h2>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup>
                            <ListGroup.Item>Work 1</ListGroup.Item>
                            <ListGroup.Item>Work 2</ListGroup.Item>
                            <ListGroup.Item>Work 3</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Works;