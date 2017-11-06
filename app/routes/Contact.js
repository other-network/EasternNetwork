/**
 * Created by Lookis on 18/07/2017.
 */
import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import globalStyle from '../containers/App.css';

export default class Contact extends Component {

  render() {
    return (
      <div className={globalStyle.main}>
        <h2>Contact us</h2>
        <p>You can contact us by clicking:
          <br /><a href="mailto:service@eastern.network">service@eastern.network</a></p>
        <p>Any suggestion will be welcome, we will give you an extra free month time for
          your helps if any bugs or feature request was comfirmed!</p>
        <Link className={globalStyle.bottomleft} to="/" >Back</Link>
      </div>
    );
  }
}
