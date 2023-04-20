import { Container } from "./style";
import searchIcon from "../../assets/search.svg"

export function InputSearch() {
  return (
    <Container>
      <form>
        <label htmlFor="inputSearch" className="srOnly">Input Search</label>
        <img src={searchIcon} alt="search-input" className="searchIcon" />
        <input 
          type="text" 
          name="inputSearch" 
          id="inputSearch" 
          placeholder="Busque por pratos ou ingredientes"
        />
      </form>
    </Container>
  )
}