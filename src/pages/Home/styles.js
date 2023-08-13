import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
  margin-top: 2rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const ContactsCounter = styled.strong`
  font-size: 1.5rem;
`;

export const InputSearchContainer = styled.div`
  width: 100%;
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

export const NewContactButton = styled(Link)`
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
    color: #fff;
  }
`;

export const ListContainer = styled.div`
  margin-top: 1.5rem;
`;

export const ListHeader = styled.header`
  margin-bottom: 0.5rem;
`;

export const OrderButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
`;

export const OrderName = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const Image = styled.img``;

export const Card = styled.div`
  background: #fff;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1rem;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 1rem;
  }
`;

export const Info = styled.div``

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ContactName = styled.strong``

export const Contacts = styled.span`
  display: block;
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray[200]};
`
export const CategoryName = styled.small`
  background: ${({ theme }) => theme.colors.primary.lighter};
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: bold;
  padding: 4px;
  border-radius: 4px;
  text-transform: uppercase;

  margin-left: 0.5rem;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
`

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  margin-left: 0.5rem;
`

export const ActionLink = styled(Link)``
