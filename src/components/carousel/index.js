import React, { Component } from 'react';
import InnerList from './inner-container';
import './index.css';

export default class Carousel extends Component {
  render(){
    return (
      <div id="gallery" className="outer-container">
        {<InnerList {...this.props}/>}
     </div>
    )
  }
}