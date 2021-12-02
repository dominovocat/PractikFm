import React, { Component } from 'react';
import SignInForm from '../forms/SignIn';
import SignUpForm from '../forms/SignUp';
import styles from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <div>
        <button className='signButton'>SignUp</button>
        {/* <SignInForm/> */}
      </div>
    );
  }
}

export default Header;
