import React, { Component } from 'react';
import _ from 'lodash';
import Button from '../../components/Button';

class Pagination extends Component {
  state = {
    page: this.props.page,
    totalPages: this.props.totalPages,
    perPage: this.props.perPage,
    hasPrev: this.props.page - 1 >= 0,
    hasNext: this.props.page + 1 < this.props.totalPages
  };

  componentDidMount() {
    this.debounce = _.debounce(this.changePage, 500);
  }

  changePage() {
    const { page, totalPages, perPage } = this.state;
    this.props.changePage({ page, totalPages, perPage });
  }

  changeLimit = e => {
    const { value } = e.target;
    this.setState({ perPage: value });
    this.debounce(value);
  };

  nextPage = () => {
    const { page, totalPages } = this.state;

    if (page + 1 < totalPages) {
      this.setState(
        prevState => ({
          ...prevState,
          page: page + 1
        }),
        this.changePage
      );
    }
  };

  prevPage = () => {
    const { page } = this.state;

    if (page - 1 >= 0) {
      this.setState(
        prevState => ({
          ...prevState,
          page: page - 1
        }),
        this.changePage
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="pagination-container">
          <div className="my-pagination">
            <div className="pagination-controls buttons has-addons">
              <Button onClick={this.prevPage} disabled={!this.state.hasPrev}>
                <i className="mdi mdi-chevron-left" />
              </Button>
              <Button className="is-static">
                {this.state.page + 1}/{this.state.totalPages}
              </Button>
              <Button onClick={this.nextPage} disabled={!this.state.hasNext}>
                <i className="mdi mdi-chevron-right" />
              </Button>
            </div>
            <div>
              <input
                type="text"
                className="input"
                placeholder="Number of items"
                onChange={this.changeLimit}
                value={this.state.perPage}
              />
              Showing {this.props.results} out of {this.props.perPage} results.
            </div>
          </div>
        </div>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Pagination;
