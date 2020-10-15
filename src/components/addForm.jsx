import React, { PureComponent } from 'react';

class AddForm extends PureComponent{
  inputRef = React.createRef();
  onSubmit = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" className="add-input" placeholder="입력해주세요" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default AddForm;