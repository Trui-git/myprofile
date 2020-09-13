import React, { Component } from 'react';
import Bubble from '../components/Bubble'
import './Aquarium.css'
import Fish from '../components/Fish'
import fish1 from './images/giphy3.gif'
import fish2 from './images/giphy2.gif'
import fish3 from './images/new.gif'
import fish4 from './images/new2.gif'
import fish5 from './images/new3.gif'

class Aquarium extends Component {

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());
      }
    
      handleResize() {
        this.setState({
            pageHeight: window.innerHeight,
            pageWidth: window.innerWidth
        })
      }
    
      componentWillUnmount() {
        window.removeEventListener('resize', () => this.handleResize());
      }


    render() {       

      // create bubbles
      let  MAX_BUBBLE = 20;
      const Bubbles = [];
      for (let i=0; i < MAX_BUBBLE; i++) {
        //Bubbles.push(<Bubble />);
        Bubbles.push(Bubble);
        // push only elment to push key by mapping
      }

      //const diplayBubble = Bubbles.map ((Bubble, index) =>  Bubble);
      const diplayBubble = Bubbles.map ((Bubble,index) => <Bubble key={index} />);

      return (            
          <div className="aquarium" style={{...this.state}}>
          {/*}
              <Fish image={fish1} />
              <Fish image={fish2} />
              <Fish image={fish3} />
              <Fish image={fish4} />
              <Fish image={fish5} />
          */}
              <div className='water'></div>
              {diplayBubble}          
          </div>
      );
    }
}

export default Aquarium;