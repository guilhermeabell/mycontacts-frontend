import ReactDOM from 'react-dom'
import Button from '../Button'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
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
    </S.Overlay>,
    document.getElementById('modal-root'),
  )
}

Modal.propTypes = {
  danger: PropTypes.bool,
}

Modal.defaultProps = {
  danger: false,
}
