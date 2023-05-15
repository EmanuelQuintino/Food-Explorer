import { Container } from "./style"
import { useSystem } from "../../hooks/system"
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useFetchFoodPlates } from "../../hooks/fetchFoodPlates";
import { ImSpinner2 } from "react-icons/im";
import { API } from "../../services/api";
import { Button } from "../../components/Button";
import { CountPlate } from "../../components/CountPlate";
import { OrderIcon } from "../../assets/OrderIcon";
import { useAuth } from "../../hooks/auth";

export function FoodPlateDetails() {
  const { menuActive } = useSystem();
  const { data, isLoading, error } = useFetchFoodPlates();
  const { userAuth } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  const pageUpdatePlate = () => navigate(`/updateplate/${params.id}`);

  const plateData = data?.data.find(plate => plate.id == params.id);
  const imageURL = `${API.defaults.baseURL}/images/${plateData?.image}`;

  return (
    <Container>
      {!menuActive && plateData &&
        <>
          {isLoading && <p><ImSpinner2 className="spinner"/></p>}
          {error && <p className="queryError">Algo deu errado!</p>}
          
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

          {userAuth.isAdmin?
            <section className="box">
              <Button name={"Editar prato"} onClick={pageUpdatePlate}/>
            </section> 
            :
            <section className="box">
              <CountPlate/> 
              <Button icon={OrderIcon} name={`pedir - R$ ${plateData.price}`}/>
            </section>
          }
        </>
      }
    </Container>
  )
}