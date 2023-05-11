import { Container } from "./style"
import { useSystem } from "../../hooks/system"
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Form/Input";
import { useForm } from "react-hook-form";
import { ButtonSave } from "../../components/ButtonSave";
import { ButtonDelete } from "../../components/ButtonDelete";
import { Select } from "../../components/Form/Select";
import { Textarea } from "../../components/Form/Textarea";
import { useState } from "react";
import { InputItems } from "../../components/Form/InputItems";

type PlateDataTypes = {
  name: string;
  category: string;
  ingredients: string[];
  price: string;
  description: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function NewPlate() {
  const { menuActive } = useSystem();
  const navigate = useNavigate();
  const [price, setPrice] = useState("");  
  
  const { register, handleSubmit, formState: { errors } } = useForm<PlateDataTypes>();

  function formatCurrency(value: string) {
    if (value != "R$ 0,0") { 
      const currency = parseFloat(value.replace(/\D/g, "")) / 100;
      const formatted = currency.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return setPrice(formatted);
    } else {
      return setPrice("");
    }
  }

  const createPlate = ({ name, category, price, description }: PlateDataTypes) => {
    console.log({name, category, price, description});
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

            <Select 
              id="category" 
              label="Categoria"
              options={["Refeições", "Sobremesas", "Bebidas"]}
              error={errors.category?.message}
              register={register("category", { 
                required: "Campo obrigatório",
                pattern: {value: /^(Refeições|Sobremesas|Bebidas)$/, message: "Somente uma das opções é permitido"},
                maxLength: {value: 255, message: "Número máximo de caracteres é 255"}
              })}
            />

            <div className="containerIngredients">
              <label htmlFor="boxIngredients">Ingredientes</label>
                <div id="boxIngredients">
                  <InputItems
                    value="Pão Naan"
                    register={register("ingredients", { 
                      required: "Campo obrigatório",
                      maxLength: {value: 255, message: "Número máximo de caracteres é 255"}
                    })}              
                  />

                  <InputItems
                    value="Pão Naan"
                    register={register("ingredients", { 
                      required: "Campo obrigatório",
                      maxLength: {value: 255, message: "Número máximo de caracteres é 255"}
                    })}              
                  />

                  <InputItems
                    placeholder="adicionar"
                    isNew
                    register={register("ingredients", { 
                      required: "Campo obrigatório",
                      maxLength: {value: 255, message: "Número máximo de caracteres é 255"}
                    })}              
                  />
                </div>
            </div>

            <Input
              id="price"
              label="Preço"
              type="text"
              placeholder="R$ 0,00"
              value={price}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => formatCurrency(event.target.value)}
              error={errors.price?.message}
              register={register("price", { 
                required: "Campo obrigatório",
                pattern: {value: /^R\$\s[0-9]+([.][0-9]+)?([,][0-9]+)?$/, message: "Insira um valor válido. Ex: R$ 10,25"},
                maxLength: {value: 255, message: "Número máximo de caracteres é 255"}
              })}
            />

            <Textarea 
              id="description"
              label="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              error={errors.description?.message}
              register={register("description", { 
                required: "Campo obrigatório",
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
