import React, { Component } from 'react';
import logo from './logo.svg';
import { BookForm } from './App.styles';
import InputComponent from './InputComponent';


const fields = [{ label: 'Author', inputName: 'author' }, { label: 'Title', inputName: 'title' }];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      book:{
        author:'',
        title:'',
        ISBN:'',
        notes:'',
        rating:'',
        location:'',
        possession:'',
        genre:'',
      }
    }
  }

  
 onInputText = (text)=>{
   console.log(text)
this.setState({author: text})
 }
  componentDidMount() {
    console.log('Hell Avi I am online');
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">
Welcome to the Tibrary
        </h1>
        <p className="App-intro">
          Please add your books below
        </p>
        <BookForm>
            <InputComponent label = "author" name = "author" InputFunction = {text=>this.onInput(text)}/>
          {/*fields.map(input => (
            <InputComponent key={input.label} label={input.label} name={input.inputName} />))*/}
          <button />
        </BookForm>
      </div>
    );
  }
}

export default App;
