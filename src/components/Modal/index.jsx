import Button from '../Button'
import PropTypes from 'prop-types'
import * as S from './styles'

export default function Modal({ danger }) {
  return (
    <S.Overlay>
      <S.Container danger={danger}>
      <S.Title>Título do modal</S.Title>
      <S.Content>
        Corpo do modal
      </S.Content>
      <S.Footer>
        <S.ButtonCancel type="button">Cancelar</S.ButtonCancel>
        <Button type="button" danger={danger}>Deletar</Button>
      </S.Footer>
      </S.Container>
    </S.Overlay>
  )
}

Modal.propTypes = {
  danger: PropTypes.bool,
}

Modal.defaultProps = {
  danger: false,
}
