import ReactDOM from 'react-dom'
import * as S from "./styles";

export default function Loader() {
  return ReactDOM.createPortal(
    <S.Overlay>
      <div className="loader"></div>
    </S.Overlay>,
    document.getElementById('loader-root')
    )
}
