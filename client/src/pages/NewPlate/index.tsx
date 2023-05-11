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
import { InputList } from "../../components/Form/InputList";

type PlateDataTypes = {
  name: string;
  category: string;
  price: string;
  description: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  event: React.ChangeEvent<HTMLInputElement>;
}

export function NewPlate() {
  const { menuActive } = useSystem();
  const navigate = useNavigate();
  const [price, setPrice] = useState(""); 
  const [ingredients, setIngredients] = useState<string[]>([]); 
  const [newIngredient, setNewIngredient] = useState("");
  // console.log({newIngredient, ingredients});
  
  const { register, handleSubmit, formState: { errors } } = useForm<PlateDataTypes>();

  function addIngredient() {
    if (newIngredient != "") {
      setIngredients(prevState => [...prevState, newIngredient]);
      setNewIngredient("");
    } else {
      alert("Adicionar nome do ingrediente")
    }
  }

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
    console.log({name, category, price, description, ingredients});
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

            <article className="containerIngredients">
              <label htmlFor="boxIngredients">Ingredientes</label>
              <div id="boxIngredients">
                {ingredients?.map((ingredient) => (
                  <InputList
                    key={ingredient}
                    value={ingredient}
                    onClick={() => {}}
                    register={register(`${ingredient}`, { 
                      required: "Campo obrigatório",
                      maxLength: {value: 255, message: "Número máximo de caracteres é 255"}
                    })}              
                  />
                ))}

                <InputList
                  isNew
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={(event) => setNewIngredient(event.target.value)}
                  onClick={addIngredient}
                  register={register("ingredients", { 
                    required: "Campo obrigatório",
                    maxLength: {value: 255, message: "Número máximo de caracteres é 255"}
                  })}              
                />
              </div>
            </article>

            <Input
              id="price"
              label="Preço"
              type="text"
              placeholder="R$ 0,00"
              value={price}
              onChange={(event) => formatCurrency(event.target.value)}
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
