import PropTypes from 'prop-types'

import Button from "../Button";
import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import * as S from "./styles";

export default function ContactForm({ buttonLabel }) {
  return (
    <S.Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select
          placeholder="Categoria"
          options={[
            { value: "123", label: "Instagram" },
            { value: "456", label: "Facebook" },
            { value: "789", label: "Twitter" },
          ]}
        />
      </FormGroup>
      <S.ButtonContainer>
      <Button type="submit">
        {buttonLabel}
      </Button>
      </S.ButtonContainer>
    </S.Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}
