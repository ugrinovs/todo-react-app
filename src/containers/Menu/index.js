import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestLogout } from 'redux/actions/userActions';

import Login from '../Login';
import DropdownButton from '../DropdownMenu';
import Button from '../../components/Button';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        {this.props.authenticated ? (
          <Button onClick={this.props.requestLogout}>Logout</Button>
        ) : (
          <DropdownButton>
            <Login />
          </DropdownButton>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.user.authenticated };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      requestLogout
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
