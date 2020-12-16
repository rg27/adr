import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Events from './components/events';
// import About from './components/about';
// import Services from './components/services';
// import Gallery from './components/gallery';
// import Testimonials from './components/testimonials';
// import Team from './components/Team';
// import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Events data={this.state.landingPageData.Events} />
        {/* <Services data={this.state.landingPageData.Services} />
        <About data={this.state.landingPageData.About} />
        <Contact data={this.state.landingPageData.Contact} /> */}
     
        {/* <Gallery />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Team data={this.state.landingPageData.Team} /> */}
      
      </div>
    )
  }
}

export default App;
