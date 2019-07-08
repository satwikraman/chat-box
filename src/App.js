import React from 'react';
import {ChatBox} from './components/ChatBox'

class  App extends React.Component{
  openForm=(e)=> {
    e.preventDefault();
    document.getElementById("myForm").style.display = "block";
  }
  closeForm=(e)=> {
    e.preventDefault();
    document.getElementById("myForm").style.display = "none";
    document.getElementById('header1').style['background-color']='#4CAF50';
  }
  handleSumbit=(e)=>{
    e.preventDefault();
    document.getElementById('header1').style['background-color']='red';
  }
  render(){
  return (
    <div className="App">
     <ChatBox openForm={this.openForm} closeForm={this.closeForm} handleSubmit={this.handleSumbit}/>
    </div>
  );
  }
}

export default App;
