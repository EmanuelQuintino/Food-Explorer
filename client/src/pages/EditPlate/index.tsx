import { Container } from "./style"
import { useSystem } from "../../hooks/useSystem"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { InputFile } from "../../components/InputFile";
import { Input } from "../../components/Input";
import { ButtonSave } from "../../components/ButtonSave";
import { ButtonDelete } from "../../components/ButtonDelete";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";
import { InputList } from "../../components/InputList";
import { UploadIcon } from "../../assets/UploadIcon";
import { ImSpinner2 } from "react-icons/im";
import { useParams } from "react-router-dom";
import { usePlateQuery } from "../../hooks/usePlateQuery";

type PlateDataTypes = {
  name: string;
  category: string;
  ingredients: string[];
  price: string;
  description: string;
  image: file;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  event: React.ChangeEvent<HTMLInputElement>;
}

export function EditPlate() {
  const [inputFileName, setInputFileName] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState("");

  const { menuActive } = useSystem();
  const navigate = useNavigate();
  const params = useParams();

  const { data, isLoading, error } = usePlateQuery();
  const plateData = data?.data.find(plate => plate.id == params.id);
  console.log(plateData);

  const { control, register, handleSubmit, formState: { errors }, watch, setError } = useForm<PlateDataTypes>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
    rules: {
      required: "Campo obrigatório",
      maxLength: { value: 20, message: "Número máximo de ingredientes é 20" },
    }
  });

  function handleAddIngredient() {
    if (newIngredient.length == 0) {
      return setError('ingredients', { message: 'Adicionar nome do ingrediente' });
    };

    if (newIngredient.length > 255) {
      return setError('ingredients', { message: 'Ingrediente excediu número de 255 caracteres' });
    }

    if (newIngredient.length > 0 && newIngredient.length <= 255) {
      append({ name: newIngredient });
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
    console.log(data, data.ingredients);
  }

  return (
    <Container>
      {!menuActive &&
        <>
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>

          <h2>Editar prato</h2>

          {isLoading && <p><ImSpinner2 className="spinner" /></p>}
          {error && <p className="queryError">Algo deu errado!</p>}

          <form onSubmit={handleSubmit(onSubmitCreatePlate)} id="formCreatePlate">
            <InputFile
              id="uploadImagePlate"
              label="Imagem do prato"
              placeholder={inputFileName ? inputFileName : "Selecione imagem para alterá-la"}
              icon={UploadIcon}
              onChange={(event) => setInputFileName(event.target.files[0].name)}
              error={errors.image?.message}
              register={register("image", {
                maxLength: { value: 255, message: "Número máximo de caracteres é 255" },
                validate: {
                  fileFormat: (file) => /\.(jpg|jpeg|png|gif)$/i.test(file[0].name) || "Permitido somente tipo imagem",
                  fileCount: (file) => file.length === 1 || "Por favor adicionar apenas uma imagem",
                  fileSize: (file) => file[0].size <= 2 * 2 ** 20 || "O tamanho máximo permitido é de 2MB",
                }
              })}
            />

            <Input
              id="name"
              label="Nome"
              type="text"
              value={plateData.name}
              placeholder="Ex.: Salada Ceasar"
              error={errors.name?.message}
              register={register("name", {
                required: "Campo obrigatório",
                pattern: { value: /^[^0-9]+$/, message: "Somente texto é permitido" },
                maxLength: { value: 255, message: "Número máximo de caracteres é 255" }
              })}
            />

            <Select
              id="category"
              label="Categoria"
              value={plateData.category}
              options={["Refeições", "Sobremesas", "Bebidas"]}
              error={errors.category?.message}
              register={register("category", {
                required: "Campo obrigatório",
                pattern: { value: /^(Refeições|Sobremesas|Bebidas)$/, message: "Somente uma das opções é permitido" },
                maxLength: { value: 255, message: "Número máximo de caracteres é 255" }
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
              {errors.ingredients &&
                (errors.ingredients.root ?
                  <span className='inputError'>{errors.ingredients.root.message}</span> :
                  <span className='inputError'>{errors.ingredients.message}</span>
                )
              }
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
                pattern: { value: /^R\$\s[0-9]+([.][0-9]+)?([,][0-9]+)?$/, message: "Insira um valor válido. Ex: R$ 10,25" },
                maxLength: { value: 255, message: "Número máximo de caracteres é 255" }
              })}
            />

            <Textarea
              id="description"
              label="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              error={errors.description?.message}
              register={register("description", {
                required: "Campo obrigatório",
                maxLength: { value: 255, message: "Número máximo de caracteres é 255" }
              })}
            />
          </form>

          <div className="formButtons">
            <ButtonDelete name="Excluir prato" />
            <ButtonSave name="Salvar alterações" form="formCreatePlate" />
          </div>
        </>
      }
    </Container>
  )
}
