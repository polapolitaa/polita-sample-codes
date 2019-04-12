import React, { Component } from 'react';
import logo from './logo.svg';
import './css/main.css';
import Header from './components/header.jsx';
import Body from './components/body.jsx';
import Footer from './components/footer.jsx';


class App extends Component {

  render() {

    console.log('Hello I am change');

    console.log('update two');
    return (
      <div className="container">
        <div className="container2">
          <Header />
          <Body/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
