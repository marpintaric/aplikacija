import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import login from './login';
import PropTypes from 'prop-types';

import '../App.css';

class registration extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = {
      name :'',
      password :'',
      email : '',
    }
  }

  componentDidMount() {
    
  }

  registracija() {
    
  }

  onChange(event) {
    // this.setState({
    //    name: event.target.value,
    // })
    console.log(event)
  }
  

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="register-form"  >
            <input type="text" placeholder="name" value={this.state.name} onChange={this.onChange} />
            <input type="password" placeholder="password" value={this.state.password} />
            <input type="text" placeholder="email address" value={this.state.email}/>
            <button value="submit" onClick={this.registracija}>create</button>
            <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
          </form>
        </div>
      </div>


    )
  }
}

export default registration;