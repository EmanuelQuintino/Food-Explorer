import { Container } from "./style"
import { useSystem } from "../../hooks/system"
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { ButtonSave } from "../../components/ButtonSave";
import { ButtonDelete } from "../../components/ButtonDelete";

type PlateDataTypes = {
  name: string;
}

export function NewPlate() {
  const { menuActive } = useSystem();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm<PlateDataTypes>();

  const createPlate = ({ name }: PlateDataTypes) => {
    console.log({name});
  }

  return (
    <Container>
      {!menuActive &&
        <>
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>
          <h2>Novo prato</h2>
          <form onSubmit={handleSubmit(createPlate)} id="formCreatePlate">
            <Input
              id="name"
              label="Nome"
              type="text"
              placeholder="Ex.: Salada Ceasar"
              error={errors.name?.message}
              register={register("name", { 
                required: "Campo obrigatório",
                pattern: {value: /^[^0-9]+$/, message: "Somente texto é permitido"},
                maxLength: {value: 255, message: "Número máximo de caracteres é 255"}
              })}
            />
          </form>
          <div className="formButtons">
            <ButtonDelete name="Excluir prato"/>
            <ButtonSave name="Salvar alterações" form="formCreatePlate"/>
          </div>
        </>
      }
    </Container>
  )
}