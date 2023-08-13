import * as S from './styles'

export default function ContactsList() {
  return (
    <S.Container>
    <S.Header>
      <S.ContactsCounter>3 contatos</S.ContactsCounter>
      <S.NewContactButton>Novo contato</S.NewContactButton>
    </S.Header>
    </S.Container>
  )
}
