import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestLogin } from 'redux/actions/userActions';
import Card from '../Card';
import Button from '../../components/Button';
import InputField from '../../components/InputField';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  constructor(props) {
    super(props);

    this.loginForm = React.createRef();
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.loginForm.current).addEventListener(
      'keypress',
      this.handleKeyPress,
      true
    );
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this.loginForm.current).removeEventListener(
      'keypress',
      this.handleKeyPress,
      true
    );
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleLogin();
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  handleLogin = () => {
    this.props.requestLogin(this.state);
  };

  render() {
    const actionButtons = [
      <Button className="is-primary" onClick={this.handleLogin}>
        Login
      </Button>,
      <span>
        No account? <a>Register</a>
      </span>
    ];

    return (
      <Card actionButtons={actionButtons} ref={this.loginForm}>
        <InputField
          label="Name"
          type="text"
          name="username"
          placeholder="Your username or email"
          handleChange={this.handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="Your password"
          handleChange={this.handleChange}
        />
      </Card>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      requestLogin
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
