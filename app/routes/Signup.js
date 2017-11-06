/**
 * Created by Lookis on 18/07/2017.
 */

import React, { Component } from 'react';
import classNames from 'classnames/bind';
import {
  Link,
} from 'react-router-dom';
import globalStyle from '../containers/App.css';

const cx = classNames.bind(globalStyle);

export default class Signup extends Component {

  render() {
    return (
      <div className={globalStyle.container}>
        <Link className={globalStyle.topleft} to="/" >Back</Link>
        <div className={globalStyle.logo} />
        <div className={globalStyle.box}>
          <span className={globalStyle.notice}>Password not match.</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className={globalStyle.description}>By clicking the button you are agreeing to the <Link to="/terms_of_service">Terms of Service</Link>.</div>
          <Link className={cx({ btnPrimary: true, button: true })} to="/login">Sign up</Link>
        </div>
      </div>
    );
  }
}
