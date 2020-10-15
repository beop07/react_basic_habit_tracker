import React, { Component } from 'react';
import AddForm from './addForm';
import Habit from './habit';

class Habits extends Component{
  handleIncrement = (habit) =>{
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) =>{
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) =>{
    this.props.onDelete(habit);
  };

  handleAdd = name =>{
    this.props.onAdd(name);
  };

  render(){
    return(
      <div>
        <AddForm onAdd={this.handleAdd}/>
        <ul>
          {this.props.data.map(habit=>( 
            <Habit 
              key={habit.id} 
              data={habit} 
              onIncrement={this.handleIncrement} 
              onDecrement={this.handleDecrement} 
              onDelete={this.handleDelete}
            /> 
          ))}
        </ul>
        <button type="button" className="habits-reset" onClick={this.props.onReset}>Reset all</button>
      </div>
    );
  }
}

export default Habits;