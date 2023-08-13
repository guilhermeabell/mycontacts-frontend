import styled from 'styled-components'

export const Select = styled.select`
  width: 100%;
  background: #FFF;
  box-shadow: 0px, 4px, 10px rgba(0, 0, 0, 0.04);
  height: 3.2rem;
  border: 2px solid #FFF;
  border-radius: 4px;

  outline: none;
  padding: 0 1rem;
  font-size: 1rem;
  transition: border-color 0.2s ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
`
