import { Container } from "./style"
import { useSystem } from "../../hooks/system"
import { useNavigate } from "react-router-dom";
import { InputFile } from "../../components/Form/InputFile";
import { Input } from "../../components/Form/Input";
import { useForm, useFieldArray } from "react-hook-form";
import { ButtonSave } from "../../components/ButtonSave";
import { ButtonDelete } from "../../components/ButtonDelete";
import { Select } from "../../components/Form/Select";
import { Textarea } from "../../components/Form/Textarea";
import { useState } from "react";
import { InputList } from "../../components/Form/InputList";
import { UploadIcon } from "../../assets/UploadIcon";

type PlateDataTypes = {
  name: string;
  category: string;
  price: string;
  description: string;
  image: file;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  event: React.ChangeEvent<HTMLInputElement>;
}

export function NewPlate() {
  const [ price, setPrice ] = useState(""); 
  const [ newIngredient, setNewIngredient ] = useState("");
  const [ inputFileName, setInputFileName ] = useState("");
  const [ inputFileError, setInputFileError ] = useState("");
  
  const { menuActive } = useSystem();
  const navigate = useNavigate();

  const { control, register, handleSubmit, formState: { errors }, watch } = useForm<PlateDataTypes>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });
  
  function handleInputFile(event) {
    if (event.target.files.length != 1) {
      return setInputFileError("Campo apenas para um arquivo");
    };

    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.test(event.target.files[0].name)) {
      return setInputFileError("Permitido somente imagem");
    };

    setInputFileName(event.target.files[0].name);
    setInputFileError("");
  };
  
  function handleAddIngredient() {    
    if (newIngredient.length == 0) {
      return setIngredientsError("Adicionar nome do ingrediente");
    } 
    
    if (newIngredient.length > 255) {
      return setIngredientsError("Ingrediente excediu número de caracteres");
    }

    if (newIngredient.length > 0 && newIngredient.length <= 255) {
      append({name: newIngredient});
      setNewIngredient("");
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

  const onSubmitCreatePlate = (data: PlateDataTypes) => {
    if (inputFileError) return;     
    console.log(data, data.ingredients);
  }

  return (
    <Container>
      {!menuActive &&
        <>
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>
          
          <h2>Novo prato</h2>
          
          <form onSubmit={handleSubmit(onSubmitCreatePlate)} id="formCreatePlate">
            <InputFile
              id="uploadImagePlate"
              label="Imagem do prato"
              placeholder={inputFileName ? inputFileName : "Selecione imagem"}
              icon={UploadIcon}
              onChange={handleInputFile}
              error={inputFileError.length > 0 ? inputFileError : null}
              register={register("image", { 
                pattern: {value: /(\.jpg|\.jpeg|\.png|\.gif)$/i, message: "Somente imagens são permitidas"},
                maxLength: {value: 2, message: "Número máximo de caracteres é 255"}
              })}
            />

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
                {fields?.map((ingredient, index) => (
                  <InputList
                    key={ingredient.id}
                    value={ingredient.name}
                    onClick={() => remove(ingredient.id)}              
                  />
                ))}

                <InputList
                  isNew
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={(event) => setNewIngredient(event.target.value)}
                  onClick={handleAddIngredient}
                  />
              </div>  
              {console.log(fields)}
              {console.log(errors)}
              {console.log(watch())}
              {errors.ingredients && <span className='inputError'>{errors.ingredients.message}</span>}
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
