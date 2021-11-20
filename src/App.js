import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BojeScreen from './BojeScreen'
import BojeScreenThree from './BojeScreenThree'
import HomePage from './HomePage';
import ResultsScreen from './ResultsScreen'
import Uputstvo1Screen from './Uputstvo1Screen';
import Uputstvo2Screen from './Uputstvo2Screen';
import ZahvalnicaScreen from './ZahvalnicaScreen';
import store from './store'


const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Header />
          <main className='py-3'>
            <Container>
                <Route exact path='/' component={HomePage} />  
                <Route path='/boje' component={BojeScreen} /> 
                <Route path='/bojethree' component={BojeScreenThree} /> 
                <Route path='/results' component={ResultsScreen} />
                <Route path='/uputstvo1' component={Uputstvo1Screen} />
                <Route path='/uputstvo2' component={Uputstvo2Screen} />
                <Route path='/zahvalnica' component={ZahvalnicaScreen} />  
            </Container>
          </main>
        {/* <Footer /> */}
    </Router>
    </Provider>
    
    
  );
}

export default App;
