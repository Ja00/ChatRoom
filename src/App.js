import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Chats from './Chats/Chats';

class App extends Component {

  state = {
    chats : ['Hello','Hello2','Hello3'],
    inputContent: null
  }


  changeHandler = (event) => {
    this.setState({inputContent: event.target.value});
  }


  addChat = () => {

    let curChats = this.state.chats;
    curChats.push(this.state.inputContent);
    this.setState({curChats});
  };

  render() {
    console.log('render');
    return (
      <div className="App">
        <h1>Hi, let's start it!</h1>
        <Chats chats={this.state.chats} />
        <Input text="type sth." click={this.addChat} change={this.changeHandler}/>
      </div>
    );
  }
}

export default App;
