import './app.css';
import React, { Component } from 'react';
import Nav from './components/nav';
import Habits from './components/habits';

class App extends Component{
  state = {
    totalCount : 0,
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0},
    ]
  };

  handleIncrement = (habit) =>{
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    habits[idx].count++;
    this.setState({habits});

    let totalCount = this.state.totalCount;
    totalCount++;
    this.setState({totalCount});
  };

  handleDecrement = (habit) =>{
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    if(habits[idx].count === 0) return;
    habits[idx].count--;
    this.setState({habits});

    let totalCount = this.state.totalCount;
    if(totalCount === 0) return;
    totalCount--;
    this.setState({totalCount});
  };

  handleDelete = (habit) =>{
    const idx = this.state.habits.indexOf(habit);
    const delCount = this.state.habits[idx].count;
    let totalCount = this.state.totalCount;
    totalCount -= delCount;
    this.setState({totalCount});

    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  };

  handleAdd = name =>{
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({habits});
  };

  handleReset = () => {
    const habits = this.state.habits.map(v=>{
      v.count = 0;
      return v;
    });
    this.setState({habits});
    let totalCount = 0;
    this.setState({totalCount});
  };

  render(){
    return (
      <>
        <Nav total={this.state.totalCount} />
        <Habits 
          data={this.state.habits}
          onIncrement={this.handleIncrement} 
          onDecrement={this.handleDecrement} 
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
