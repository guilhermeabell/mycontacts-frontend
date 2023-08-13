import * as S from './styles'
import logo from '../../assets/images/logo.svg'

export default function Header() {
  return (
    <S.Container>
      <S.Image src={logo} alt="Logo MyContacts" />
      <S.InputSearchContainer>
      <S.Input placeholder="Pesquise pelo nome..." />
      </S.InputSearchContainer>
    </S.Container>
  )
}
