import * as S from './styles'

export default function Select({ placeholder, options, ...props }) {
  return (
    <S.Select {...props}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </S.Select>
  )
}
