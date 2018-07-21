import React from 'react';
import { BookFormInput } from './App.styles';

const InputComponent = props => (
  <BookFormInput>
    <p style={{ margin: 0 }}>
      {props.label}
    </p>
    <input name={props.InputName} type="text" onChange={e => props.InputFunction(e)} />
  </BookFormInput>
);

export default InputComponent;
