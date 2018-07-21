import React from 'react';
import { BookFormInput } from './App.styles';

const InputComponent = props => (
  <BookFormInput>
    <p>
      {props.label}
    </p>
    <input name={props.InputName} type="text" onChange={e => props.InputFunction(e)} />
  </BookFormInput>
);

export default InputComponent;
