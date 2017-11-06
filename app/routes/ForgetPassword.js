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

export default class Login extends Component {

  render() {
    return (
      <div className={globalStyle.container}>
        <Link className={globalStyle.topleft} to="/" >Back</Link>
        <div className={globalStyle.logo} />
        <div className={globalStyle.box}>
          <span className={globalStyle.notice}>Your email were incorrect.</span>
          <input type="email" placeholder="Email" />
          <Link className={cx({ btnPrimary: true, button: true })} to="/">Reset Password</Link>
        </div>
      </div>
    );
  }
}
