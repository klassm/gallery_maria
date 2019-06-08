import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';

import Home from './pages/Home';
import Aquarelle from './pages/Aquarelle';
import Acrylbilder from './pages/Acrylbilder';
import Glueckwunschkarten from './pages/Glueckwunschkarten';
import Kerzen from './pages/Kerzen';
import Header from './components/Header';
import store from './store/store';
import './App.css';
import Footer from './components/Footer';

class App extends Component {
  render() {
    const containerStyle = {
      padding: '10px',
      maxWidth: '1200px'
    };
    return (
      <Provider store={store}>
        <div className="App">
          <div>
            <Router>
              <div>
                <Header/>
                <Container style={containerStyle}>
                  <Route exact path="/" component={Home}/>
                  <Route path="/aquarelle" component={Aquarelle}/>
                  <Route path="/acryl" component={Acrylbilder}/>
                  <Route path="/glueckwunsch" component={Glueckwunschkarten}/>
                  <Route path="/kerzen" component={Kerzen}/>
                </Container>
              </div>
              <Footer/>
            </Router>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
