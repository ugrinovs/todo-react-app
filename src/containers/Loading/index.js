import React from 'react';
import { connect } from 'react-redux';

class Loading extends React.Component {
  createLoader = () => (
    <div className="loader-overlay">
      <div className="loader" />
    </div>
  );

  render() {
    return this.props.loaders > 0 ? this.createLoader() : this.props.children;
  }
}

function mapStateToProps(state) {
  return {
    loaders: state.loaders
  };
}

export default connect(mapStateToProps)(Loading);
