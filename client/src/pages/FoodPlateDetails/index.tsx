import { Container } from "./style"
import { useSystem } from "../../hooks/system"
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useFetchFoodPlates } from "../../hooks/fetchFoodPlates";
import { ImSpinner2 } from "react-icons/im";
import { API } from "../../services/api";
import { Button } from "../../components/Button";
import { CountPlateDetails } from "../../components/CountPlateDetails";
import orderIcon from "../../assets/order.svg";

export function FoodPlateDetails() {
  const { menuActive } = useSystem();
  const { data, isLoading, error } = useFetchFoodPlates();
  const params = useParams();
  const navigate = useNavigate();

  const plateData = data?.data.find(plate => plate.id == params.id);
  const imageURL = `${API.defaults.baseURL}/images/${plateData?.image}`;

  return (
    <Container>
      {!menuActive && plateData &&
        <>
          {isLoading && <p><ImSpinner2 className="spinner"/></p>}
          {error && <p>Algo deu errado!</p>}
          
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>      
          
          <section className="plateContainer">
            <img src={imageURL} alt="image-plate" className="imagePlate"/>
            <h3 className="name">{plateData.name}</h3>
            <p className="description">{plateData.description}</p>
            
            <div className="ingredients">
              {plateData.ingredients.map(ingredient => {
                return <span className="ingredient" key={ingredient.id}>{ingredient.name}</span>
              })}
            </div>
          </section>

          <section className="box">
            <CountPlateDetails/> 
            <Button icon={orderIcon} name={`pedir - R$ ${plateData.price}`}/>
          </section>
        </>
      }
    </Container>
  )
}