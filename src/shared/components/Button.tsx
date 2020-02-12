import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  disabled: boolean;
  clicked: () => {};
  btnType: string;
  children: any;
};

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 3px;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  width: 140px;
  height: auto;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.6);
    transition: all 0.1s;
  }
  &:active {
    box-shadow: 0px 0px 10px rgba(50, 50, 50, 0.4);
  }
  &.success {
    background-color: rgb(89, 150, 5);
    &[disabled] {
      background-color: rgba(89, 150, 5, 0.4);
    }
  }
`;

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      disabled={props.disabled}
      onClick={() => props.clicked()}
      className={props.btnType}
    >
      {props.children}
    </StyledButton>
  );
};
