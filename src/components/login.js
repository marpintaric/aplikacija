import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import registration from './registration';

import '../App.css';

class login extends Component{
    render() {
return (
   <div class="login-page">
  <div class="form">
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p class="message">Not registered? <Link to="/register">Create an account</Link></p>
    </form>
  </div>
</div>
   
    )
}
}

export default login;



