import * as S from './styles';

export default function Button({ children, type, onClick, disabled}) {
  return (
    <S.Button
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
}
