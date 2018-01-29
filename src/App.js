import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Chats from './Chats/Chats';

class App extends Component {

  state = {
    chatSize: 10,
    chats : ['Hello','Hello2','Hello3'],
    // inputContent: null//This is bad and stupid. But it's ok for now...
  }


  changeHandler = (event) => {
    if(event.keyCode === 13) {
      let curChats = this.state.chats;
      curChats.push(event.target.value);
      event.target.value = null;
      if(curChats.length > this.state.chatSize) {
        curChats.splice(0,1);
      }
      this.setState({curChats});
    }
  }


  addChat = (event) => {
    // let curChats = this.state.chats;
    // curChats.push(this.state.inputContent);
    // if(curChats.length > this.state.chatSize) {
    //   curChats.splice(0,1);
    // }
    // this.setState({curChats});
    console.log(event);
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
