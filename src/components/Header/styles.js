import { styled } from "styled-components";

export const Container = styled.header`
margin-top: 4.6rem;
display: flex;
flex-direction: column;
align-items: center;
`

export const InputSearchContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
`

export const Image = styled.img`
  width: 12.5rem;
`

export const Input = styled.input`
  width: 100%;
  background: #FFF;
  border: none;
  border-radius: 1.5rem;
  height: 3rem;
  outline: 0;
  padding: 0 1rem;
  filter: drop-shadow(0px, 4px, 10px rgba(0, 0, 0, 0.04));
  &::placeholder {
    color: #BCBCBC;
  }
`
