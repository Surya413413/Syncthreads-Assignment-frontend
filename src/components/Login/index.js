import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    console.log(this.props.history); 
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30,})
   
    history.replace("/")
     window.location.reload();
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'http://localhost:3000/users/login'
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      console.log("JWT Token Stored:", data.token);
      this.onSubmitSuccess(data.token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          required
        />
      </>
    )
  }
  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
        USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="username"
          required
        />
      </>
    )
  }
  register = (event) => {
    event.preventDefault();
    const {history} = this.props
    history.replace('/register');
    window.location.reload();

  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/"/>
    }

    return (
      <div className="login-form-container">
        <img
          src="/11102241.webp"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <img
          src="/mapprojectlogo.jpeg"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="/11102241.webp"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg} Email and password Incorrect If you are not register please register</p>}
          <button className="login-button"  type="button" onClick={this.register}>Register Now</button>
        </form>
      </div>
    )
  }
}

export default Login





// import { Component } from "react";
// import Cookies from "js-cookie";
// import { Redirect, withRouter } from "react-router-dom";

// class Login extends Component {
//   state = {
//     username: "",
//     password: "",
//     showSubmitError: false,
//     errorMsg: "",
//   };

//   onChangeUsername = (event) => {
//     this.setState({ username: event.target.value });
//   };

//   onChangePassword = (event) => {
//     this.setState({ password: event.target.value });
//   };

//   onSubmitSuccess = (jwtToken) => {
//     Cookies.set("jwt_token", jwtToken, { expires: 30 });
//     this.props.history.replace("/dashboard"); 
//   };

//   onSubmitFailure = (errorMsg) => {
//     this.setState({ showSubmitError: true, errorMsg });
//   };

//   submitForm = async (event) => {
//     event.preventDefault();
//     const { username, password } = this.state;
//     const userDetails = { username, password };
//     const url = "http://localhost:3000/users/login";
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userDetails),
//     };
//     const response = await fetch(url, options);
//     const data = await response.json();
//     if (response.ok === true) {
//       this.onSubmitSuccess(data.token);
//     } else {
//       this.onSubmitFailure(data.error_msg);
//     }
//   };

//   render() {
//     const { showSubmitError, errorMsg } = this.state;
//     const jwtToken = Cookies.get("jwt_token");
//     if (jwtToken !== undefined) {
//       return <Redirect to="/" />; 
//     }

//     return (
//       <div className="login-form-container">
//         <form className="form-container" onSubmit={this.submitForm}>
//           <input
//             type="text"
//             value={this.state.username}
//             onChange={this.onChangeUsername}
//             placeholder="Username"
//             required
//           />
//           <input
//             type="password"
//             value={this.state.password}
//             onChange={this.onChangePassword}
//             placeholder="Password"
//             required
//           />
//           <button type="submit">Login</button>
//           {showSubmitError && <p className="error-message">*{errorMsg}</p>}
//         </form>
//       </div>
//     );
//   }
// }

// export default withRouter(Login); //Wrap withRouter to access `history`

