import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import Landing from '../routes/Landing';
import Login from '../routes/Login';
import Contact from '../routes/Contact';
import Dashboard from '../routes/Dashboard';
import Faq from '../routes/Faq';
import ForgetPassword from '../routes/ForgetPassword';
import Signup from '../routes/Signup';
import Tos from '../routes/Tos';
import Footer from '../components/Footer';
import style from './App.css';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className={style.normal}>
          <Header />
          <Route exact path="/popup.html" component={Landing} />
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/faq" component={Faq} />
          <Route path="/forget" component={ForgetPassword} />
          <Route path="/signup" component={Signup} />
          <Route path="/terms_of_service" component={Tos} />
          <Footer />
        </div>
      </Router>
    );
  }
}
