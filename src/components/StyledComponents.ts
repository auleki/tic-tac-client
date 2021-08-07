import styled, { css } from 'styled-components'

interface ICellProps {
  borderTop?: boolean;
  borderRight?: boolean;
  borderLeft?: boolean;
  borderBottom?: boolean;
}

export const AppContainer = styled.div(
 () => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
 `
)

export const Container = styled.section(
  () => css`
    height: 100%;
    width: 100%;
    background: crimson;
    padding: 1em;
 `
)

export const FormStyle = styled.form(
  () => css`
  /* background: rebeccapurple; */
  margin-top: 2rem;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 1rem;
 `
)

export const InputStyle = styled.input(
  () => css`
  padding: 1rem;
  outline: none;
  border: none;
  background: black;
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: background 200ms ease-in;

  &:focus {
    color: #333;
    background: #ddd;
    /* border-color: crimson; */
  }
 `
)

export const Button = styled.button(
  () => css`
    background-color:crimson;
    padding: 1rem;
    color: #fff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
    font-size: 1rem;
    transition: 250ms ease-in;
    border: none;
    box-shadow: 0 4px 4px rgba(225, 0, 0, .5);
    outline: none;
    
    &:hover, &:focus {
      background: #ddd;
      color: crimson;
      border-color: whitesmoke;
      transform: translateY(.1em) scaleY(1.06);
      transform: translateY(.1em);
      box-shadow: 0 4px 4px rgba(0, 0, 0, .5);
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
    }
 `
)

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Zen Tokyo Zoo", cursive;
  position: relative;
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Cell = styled.div<ICellProps>`
  width: 13em;
  height: 9em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  border-top: ${({ borderTop }) => borderTop && "3px solid #8e44ad"};
  border-left: ${({ borderLeft }) => borderLeft && "3px solid #8e44ad"};
  border-bottom: ${({ borderBottom }) => borderBottom && "3px solid #8e44ad"};
  border-right: ${({ borderRight }) => borderRight && "3px solid #8e44ad"};
  transition: all 270ms ease-in-out;
  &:hover {
    background-color: #8d44ad28;
  }
`;

export const PlayStopper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
  cursor: default;
`;

export const X = styled.span`
  font-size: 100px;
  color: #8e44ad;
  &::after {
    content: "X";
  }
`;

export const O = styled.span`
  font-size: 100px;
  color: #8e44ad;
  &::after {
    content: "O";
  }
`;