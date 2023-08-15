import Button from '../Button'
import * as S from './styles'

export default function Modal() {
  return (
    <S.Overlay>
      <S.Container>
      <S.Title>Título do modal</S.Title>
      <S.Content>
        Corpo do modal
      </S.Content>
      <S.Footer>
        <S.ButtonCancel type="button">Cancelar</S.ButtonCancel>
        <Button type="button">Deletar</Button>
      </S.Footer>
      </S.Container>
    </S.Overlay>
  )
}
