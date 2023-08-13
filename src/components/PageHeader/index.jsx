import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import arrow from '../../assets/images/icons/arrow.svg'
import * as S from './styles'

export default function PageHeader({ title }) {
  return (
    <S.Container>
      <Link to="/">
        <S.Image src={arrow} alt="Arrow" />
        <S.NavigationButton>Voltar</S.NavigationButton>
      </Link>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

PageHeader.propTypes = {
  title: propTypes.string.isRequired,
}
