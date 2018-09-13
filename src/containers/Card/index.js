import React, { PureComponent } from 'react';

class Card extends PureComponent {
  render() {
    return (
      <div className="card">
        <div className="card-content">{this.props.children}</div>
        <footer className="card-footer">
          {this.props.actionButtons.map((btn, idx) => (
            <p className="card-footer-item" key={idx}>
              {btn}
            </p>
          ))}
        </footer>
      </div>
    );
  }
}

export default Card;
