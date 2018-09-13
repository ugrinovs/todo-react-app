import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoItem from '../TodoItem';
import Modal from '../../components/Modal';
import Pagination from '../Pagination';

import {
  requestDeleteTodo,
  requestSaveTodo,
  requestUpdateTodo,
  requestFetchTodos
} from '../../redux/actions/todosActions';
import Button from '../../components/Button';
import ModalCard from '../../components/ModalCard';

class TodoList extends React.Component {
  onDelete = () => {
    const {
      deleteTodo: { id }
    } = this.state;
    const { requestDeleteTodo } = this.props;

    requestDeleteTodo(id);
    this.closeModal();
  };

  state = {
    isCreateMode: false,
    isModalOpen: false
  };

  saveTodo = todo => {
    const { requestSaveTodo } = this.props;
    requestSaveTodo(todo);
    this.toggleCreateMode();
  };

  onSave = todo => {
    const { requestUpdateTodo } = this.props;
    const action = todo.id ? requestUpdateTodo : this.saveTodo;
    action(todo);
  };

  openModal = todo =>
    this.setState(prevState => ({
      ...prevState,
      isModalOpen: true,
      deleteTodo: todo
    }));

  closeModal = () =>
    this.setState(prevState => ({
      ...prevState,
      isModalOpen: false
    }));

  renderCreateLayout = () => {
    if (this.state.isCreateMode) {
      return (
        <TodoItem isCreateMode={this.state.isCreateMode} onSave={this.onSave} />
      );
    }
  };

  toggleCreateMode = () =>
    this.setState(prevState => ({
      ...prevState,
      isCreateMode: !this.state.isCreateMode
    }));

  fetchTodos = options => {
    const { requestFetchTodos } = this.props;
    requestFetchTodos(options);
  };

  render() {
    const { todos } = this.props;
    return todos.error ? (
      todos.error
    ) : (
      <Pagination
        page={todos.page}
        totalPages={todos.totalPages}
        perPage={todos.perPage}
        url="/todo"
        changePage={this.fetchTodos}
        results={todos.data.length}
      >
        {todos.data.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={this.onDelete}
            onEdit={this.onEdit}
            onSave={this.onSave}
            openModal={this.openModal}
          />
        ))}

        {this.renderCreateLayout()}
        <Button
          className="is-success align-right"
          onClick={this.toggleCreateMode}
        >
          {this.state.isCreateMode ? 'Cancel' : 'Create new'}
        </Button>

        <Modal
          isOpen={this.state.isModalOpen}
          handleCloseModal={this.closeModal}
          onConfirm={this.onDelete}
        >
          <ModalCard
            onConfirm={this.onDelete}
            handleCloseModal={this.closeModal}
          >
            Are you sure?
          </ModalCard>
        </Modal>
      </Pagination>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      requestDeleteTodo,
      requestSaveTodo,
      requestUpdateTodo,
      requestFetchTodos
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
