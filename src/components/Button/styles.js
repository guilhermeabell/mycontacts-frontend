import styled from 'styled-components'

export const Button = styled.button`
  height: 3.2rem;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px, 4px, 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  padding: 0 1rem;
  color: #FFF;

  border-radius: 4px;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background: #CCC;
    cursor: default;
  }
`
