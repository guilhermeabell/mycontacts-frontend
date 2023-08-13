import styled from 'styled-components'

export const Container = styled.header`
  margin-bottom: 1.5rem;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`

export const Image = styled.img`
  margin-right: 0.5rem;
  transform: rotate(-90deg);
`

export const NavigationButton = styled.span`
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
`

export const Title = styled.h1`
  font-size: 1.5rem;
`
