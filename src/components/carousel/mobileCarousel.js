import React, { Component } from 'react';
import Swipe from './swipe';
import './index.css';

export default class MobileCarousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex : props.arrayOfData.length>0 ? 0 : -1,
    }
    this.getImageArray = this.getImageArray.bind(this);
    this.swipeDetector = this.swipeDetector.bind(this);
  }

  componentDidMount(){
    const swiper = new Swipe(document.getElementById("inner-gallery"), this.swipeDetector);
    this.setState({swiper})
  }

  swipeDetector(event, direction){
      event.preventDefault();
      let {activeIndex} = this.state;
      const {arrayOfData} = this.props;
      switch (direction) {
        case "up":
          // Handle Swipe Up
          console.log(direction);
          break;
        case "down":
          console.log(direction)
          // Handle Swipe Down
          break;
        case "left":
          if(arrayOfData.length -1 > activeIndex){
            activeIndex += 1;
            this.setState({
              activeIndex 
            })
            console.log(direction)
          }
          // Handle Swipe Left
          break;
        case "right":
        if(activeIndex>0){
          activeIndex -= 1;
          this.setState({
            activeIndex 
          })
          console.log(direction)
        }
          // Handle Swipe Right
          break;
        default : 
          console.log(direction);
      }
  }

  renderHeadings(){
    return this.props.arrayOfData.map((image,index) => <div key={index} className={`heading ${this.state.activeIndex === index ? 'active' : ''}${this.state.activeIndex > index ? 'prev' : ''}`}>
      <div className="heading">{image.heading}</div>
      <div className="sub-heading">{image.subHeading} | {image.year}</div>
    </div>)
  }

  getImageArray(){
    return this.props.arrayOfData.map((image,index) => <img key={index} className={`${this.state.activeIndex + 2 === index ? 'next2-index' : ''}${this.state.activeIndex === index ? 'active' : ''}${this.state.activeIndex + 1 === index ? 'next-index' : ''}`} src={image.url} alt={image.heading} />)
  }

  renderDots(){
    return this.props.arrayOfData.map((image,index) => <div key={index} className={`dot ${this.state.activeIndex === index ? 'active' : ''}`}> </div>)
  }

  render(){
    return (
      <div id="inner-gallery">
        <div className="h-container">
          {this.renderHeadings()}
        </div>
        <div  className="inner-container">
          {this.getImageArray()}
        </div>
        <div className="d-container">
          {this.renderDots()}
        </div>
      </div>
    )
  }

  componentWillUnmount(){
    this.state.swiper.removeListeners()
  }
}