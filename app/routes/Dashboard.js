/**
 * Created by Lookis on 18/07/2017.
 */
import React, { Component } from 'react';
import SwitchButton from 'react-switch-button';
import {
  Link,
} from 'react-router-dom';
import 'style-loader!css-loader!react-switch-button/dist/react-switch-button.css';
import globalStyle from '../containers/App.css';

export default class Dashboard extends Component {

  render() {
    return (
      <div className={globalStyle.main}>
        <h2><span className={globalStyle.location} />Beijing</h2>
        <p className={globalStyle.section}>
          We select best server based on you location automatically
          <br /><br />
          You are now connecting to the server based in: Beijing
        </p>
        <p className={globalStyle.section}>Connect:<div
          style={{
            float: 'right'
          }}
        ><SwitchButton name="switch" /></div></p>
        <p className={globalStyle.section}>30</p>
        <Link className={globalStyle.bottomleft} to="/" >Back</Link>
      </div>
    );
  }
}
