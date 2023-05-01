import { Container } from "./style";
import searchIcon from "../../assets/search.svg"
import { useSystem } from "../../hooks/system";

export function InputSearch() {
  const { menuActive, toggleMenu } = useSystem();

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