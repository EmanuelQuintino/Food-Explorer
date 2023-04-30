import { Container } from "./style";
import searchIcon from "../../assets/search.svg"
import { useContext } from "react";
import { systemContext } from "../../context/system";

export function InputSearch() {
  const { menuActive, toggleMenu } = useContext(systemContext);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    menuActive ? toggleMenu() : "";
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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