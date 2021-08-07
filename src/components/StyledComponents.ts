import styled, { css } from 'styled-components'

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
  background: #ddd;
  margin-top: 2rem;
  border-radius: 5px;
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
  /* border-bottom: 3px solid transparent; */
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
    /* text-transform: uppercase; */
    font-size: 1rem;
    transition: 250ms ease-in;
    border: 3px solid transparent;
    outline: none;

    &:hover {
      border-color: whitesmoke;
    }

    &:hover, &:focus {
      background: #ddd;
      color: crimson;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:focus {
      border-color: crimson;
    }
 `
)