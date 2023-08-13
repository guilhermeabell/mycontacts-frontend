import Input from "../../components/Input";
import Select from "../../components/Select";
import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <Input placeholder="Nome" />
      <Select
        placeholder="Selecione uma opção"
        options={[
          { value: "123", label: "Instagram" },
          { value: "456", label: "Facebook" },
          { value: "789", label: "Twitter" },
        ]}
      />
      <Button type="button">
        Salvar alterações
      </Button>
    </>
  );
}
