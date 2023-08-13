import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import * as S from './styles';

export default function ContactsList() {
  return (
    <S.Container>
      <S.Header>
        <S.ContactsCounter>3 contatos</S.ContactsCounter>
        <S.NewContactButton>Novo contato</S.NewContactButton>
      </S.Header>
      <S.ListContainer>
        <S.ListHeader>
          <S.OrderButton type="button">
            <S.OrderName>Nome</S.OrderName>
            <S.Image src={arrow} alt="Arrow" />
          </S.OrderButton>
        </S.ListHeader>
        <S.Card>
          <S.Info>
            <S.ContactContainer>
              <S.ContactName>Guilherme Abel</S.ContactName>
              <S.CategoryName>instagram</S.CategoryName>
            </S.ContactContainer>
            <S.Contacts>guilhermeabel@gmail.com</S.Contacts>
            <S.Contacts>(11)98822-94919</S.Contacts>
          </S.Info>
          <S.Actions>
            <S.ActionLink href="http://">
              <S.Image src={edit} alt="Editar" />
            </S.ActionLink>
            <S.ActionButton type="button">
              <S.Image src={trash} alt="Excluir" />
            </S.ActionButton>
          </S.Actions>
        </S.Card>
        <S.Card>
          <S.Info>
            <S.ContactContainer>
              <S.ContactName>Guilherme Abel</S.ContactName>
              <S.CategoryName>instagram</S.CategoryName>
            </S.ContactContainer>
            <S.Contacts>guilhermeabel@gmail.com</S.Contacts>
            <S.Contacts>(11)98822-94919</S.Contacts>
          </S.Info>
          <S.Actions>
            <S.ActionLink href="http://">
              <S.Image src={edit} alt="Editar" />
            </S.ActionLink>
            <S.ActionButton type="button">
              <S.Image src={trash} alt="Excluir" />
            </S.ActionButton>
          </S.Actions>
        </S.Card>
        <S.Card>
          <S.Info>
            <S.ContactContainer>
              <S.ContactName>Guilherme Abel</S.ContactName>
              <S.CategoryName>instagram</S.CategoryName>
            </S.ContactContainer>
            <S.Contacts>guilhermeabel@gmail.com</S.Contacts>
            <S.Contacts>(11)98822-94919</S.Contacts>
          </S.Info>
          <S.Actions>
            <S.ActionLink href="http://">
              <S.Image src={edit} alt="Editar" />
            </S.ActionLink>
            <S.ActionButton type="button">
              <S.Image src={trash} alt="Excluir" />
            </S.ActionButton>
          </S.Actions>
        </S.Card>
      </S.ListContainer>
    </S.Container>
  );
}
