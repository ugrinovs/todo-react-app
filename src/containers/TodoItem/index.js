import React from 'react';
import classNames from 'classnames';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

class Todo extends React.PureComponent {
  state = {
    todo: {
      text: '',
      completed: false
    },
    isEditMode: false
  };

  handleDelete = () => this.props.openModal(this.props.todo);

  handleSave = () => {
    this.props.onSave(this.state.todo);
    this.setState(prevState => ({
      ...prevState,
      isEditMode: false
    }));
  };

  handleInputChange = e => {
    const text = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      todo: {
        ...this.state.todo,
        text
      }
    }));
  };

  handleCheckboxChange = e => {
    const completed = e.target.checked;
    this.setState(prevState => ({
      ...prevState,
      todo: {
        ...this.state.todo,
        completed
      }
    }));
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSave();
    }
  };

  handleEdit = () => {
    this.setState(prevState => ({
      ...prevState,
      todo: this.props.todo,
      isEditMode: true
    }));
  };

  cancelEdit = () =>
    this.setState({
      isEditMode: false
    });

  createEditLayout = () => (
    <div className="item">
      <div>
        <input
          onChange={this.handleInputChange}
          value={this.state.todo.text}
          type="text"
          className="todo-input"
          onKeyPress={this.handleKeyPress}
          autoFocus
        />
        <label className="checkbox">
          <input
            onChange={this.handleCheckboxChange}
            checked={this.state.todo.completed}
            type="checkbox"
            onKeyPress={this.handleKeyPress}
            className="todo-input checkbox"
          />
          Completed
        </label>
      </div>
      <div className="todo-actions buttons has-addons">
        <Button className="is-medium" onClick={this.handleSave}>
          <Icon type="check" className="has-text-success" />
        </Button>
        {!this.props.isCreateMode && (
          <Button className="is-medium" onClick={this.cancelEdit}>
            <Icon type="close" className="has-text-danger" />
          </Button>
        )}
      </div>
    </div>
  );

  createViewLayout = todo => (
    <div key={todo ? todo.id : null} className="item">
      <div className={classNames('todo-text', { completed: todo.completed })}>
        {todo.text}
      </div>
      <div className="todo-action buttons has-addons">
        <Button className="is-medium" onClick={this.handleEdit}>
          <Icon type="pencil" className="has-text-info" />
        </Button>
        <Button className="is-medium" onClick={this.handleDelete}>
          <Icon type="trash-can" className="has-text-danger" />
        </Button>
      </div>
    </div>
  );

  render() {
    const { todo, isCreateMode } = this.props;
    const { isEditMode } = this.state;
    return isCreateMode || isEditMode
      ? this.createEditLayout()
      : this.createViewLayout(todo);
  }
}

export default Todo;
