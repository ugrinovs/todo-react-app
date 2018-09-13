import React, { Component } from 'react';
import classNames from 'classnames';

import DropdownButton from '../../components/DropdownButton';

class DropdownMenu extends Component {
  state = {
    isOpen: false
  };

  constructor(props) {
    super(props);

    this.dropdownButton = React.createRef();
  }

  triggerDropdown = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  closeDropdown = ({ target }) => {
    if (!this.dropdownButton.current.contains(target)) {
      this.setState({
        isOpen: false
      });
    }
  };

  componentDidMount = () => {
    document.addEventListener('click', this.closeDropdown, false);
  };

  componentWillUnmount = () => {
    document.removeEventListener('click', this.closeDropdown, false);
  };

  render() {
    return (
      <div
        className={classNames('dropdown is-right', {
          'is-active': this.state.isOpen
        })}
        ref={this.dropdownButton}
      >
        <DropdownButton triggerDropdown={this.triggerDropdown} text="Login" />
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DropdownMenu;
