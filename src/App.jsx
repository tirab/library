import React, { Component } from 'react';
import { BookForm } from './App.styles';
import InputComponent from './InputComponent';
import { findBooksOnTitle } from './calls';


const fields = [{ label: 'Author', inputName: 'author' }, { label: 'Title', inputName: 'title' }];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }


 onInputText = (text)=>{
  this.setState({title : text})
 }

 receiveResults = async ()=>{
  const foundBooks = await findBooksOnTitle(this.state.title);
  this.setState({foundBooks: foundBooks})
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
            <InputComponent label = "title" name = "title" InputFunction = {e=>this.onInputText(e.target.value)}/>
          {/*fields.map(input => (
            <InputComponent key={input.label} label={input.label} name={input.inputName} />))*/}
          <button onClick={()=>this.receiveResults()}>Look for book on Title</button>
        </BookForm>
        { this.state.foundBooks &&
        this.state.foundBooks.map(bookObject=>(
          <div>
          <p>{bookObject.volumeInfo.title}</p>
          <img src={bookObject.volumeInfo.imageLinks.smallThumbnail} >
          </img>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
