import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContactsCounter = styled.strong`
  font-size: 1.5rem;
  color: #222;
`

export const NewContactButton = styled.a`
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
  font-weight: bold;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    color: #FFF;
  }
`
