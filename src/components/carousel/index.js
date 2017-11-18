import React, { Component } from 'react';
import MobileCarousel from './mobileCarousel';
import DesktopCarousel from './desktopCarousel';
import './index.css';

export default class Carousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      isMobileView : window.innerWidth < 768 ? true : false
    }
  }
  render(){
    const {isMobileView} = this.state
    return (
      <div id="gallery" className="outer-container">
        { isMobileView ? 
          <MobileCarousel {...this.props}/> : 
          <DesktopCarousel {...this.props}/> 
        }
     </div>
    )
  }
}