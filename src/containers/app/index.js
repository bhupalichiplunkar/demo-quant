import React, { Component } from 'react';
import './App.css';
import Carousel from '../../components/carousel';

const tempCarouselData = [
  {
  heading : "Hello 1",
  subHeading : "For better you",
  year : "2017",
  url : "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png"
  }, {
    heading : "Hello 2",
    subHeading : "For better you",
    year : "2017",
    url : "http://www.wallpaperbackgrounds.org/wp-content/uploads/Images.jpg"
  }, {
    heading : "Hello 3",
    subHeading : "For better you",
    year : "2017",
    url : "https://www.planwallpaper.com/static/images/9-credit-1.jpg"
  }, {
      heading : "Hello 5",
      subHeading : "For better you",
      year : "2017",
    url : "http://www.gettyimages.in/gi-resources/images/Embed/new/embed2.jpg"
  }, {
      heading : "Hello 8",
      subHeading : "For better you",
      year : "2017",
    url : "http://www.gettyimages.in/gi-resources/images/Embed/new/embed3.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel arrayOfData={tempCarouselData}/>
      </div>
    );
  }
}

export default App;
