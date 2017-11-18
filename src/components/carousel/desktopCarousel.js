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
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  componentDidMount(){
  }

  next(){
    let {activeIndex} = this.state;
    const {arrayOfData} = this.props;
    if(arrayOfData.length -1 > activeIndex){
      activeIndex += 1;
      this.setState({
        activeIndex 
      })
    }
  }

  prev(){
    let {activeIndex} = this.state;
    const {arrayOfData} = this.props;
    if(activeIndex>0){
      activeIndex -= 1;
      this.setState({
        activeIndex 
      })
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
          <div className={`prev ${this.props.arrayOfData.length>0 && this.state.activeIndex === 0 ? 'hidden' : ''}`}  onClick={this.prev}><div> &lt; </div></div>
          <div className="wrapper">
            {this.getImageArray()}
          </div>
          <div className={`next ${this.props.arrayOfData.length>0 && this.state.activeIndex === (this.props.arrayOfData.length-1) ? 'hidden' : ''}`} onClick={this.next}><div> &gt; </div></div>
        </div>
        <div className="d-container">
          {this.renderDots()}
        </div>
      </div>
    )
  }
}