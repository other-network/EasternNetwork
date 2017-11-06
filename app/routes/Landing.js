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

export default class Landing extends Component {

  render() {
    return (
      <div className={globalStyle.container}>
        <div className={globalStyle.logo} />
        <div className={globalStyle.box}>
          <div className={globalStyle.empty} />
          <Link className={cx({ btnPrimary: true, button: true })} to="/login">Log in</Link>
          <Link className={cx({ btnDefault: true, button: true })} to="/signup">Sign up</Link>
          <div className={globalStyle.empty} />
          <div className={globalStyle.empty} />
        </div>
      </div>
    );
  }
}
