import React from 'react';
import styled from 'styled-components';

type InputProps = {
  elementConfig: {
    options: { value: string; displayValue: string }[];
  };
  elementType: {};
  value: string;
  changed: (value: string) => {};
  label: string;
};

const StyledInputWrapper = styled.div`
  display: inline-block;
  margin: 10px;
  input {
    width: 100%;
    border: transparent;
    border-bottom: 1px solid #ccc;
    padding: 4px 10px;
  }
  select {
    display: block;
    width: 100%;
    border: transparent;
    border-bottom: 1px solid #ccc;
    padding: 4px 10px;
  }
  label {
    display: block;
    padding-left: 10px;
    font-weight: bold;
  }
`;

export const Input = (props: InputProps) => {
  let inputElement = null;

  switch (props.elementType) {
    case 'select':
      inputElement = (
        <select
          value={props.value}
          onChange={e => {
            const chosenValue = e.target.value;
            return props.changed(chosenValue);
          }}
        >
          {' '}
          <option key='all' value='show all'>
            Show all
          </option>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {' '}
              {option.displayValue}{' '}
            </option>
          ))}{' '}
        </select>
      );
      break;
    default:
      inputElement = <input value={props.value} {...props.elementConfig} />;
  }

  return (
    <StyledInputWrapper>
      <label> {props.label} </label> {inputElement}{' '}
    </StyledInputWrapper>
  );
};
