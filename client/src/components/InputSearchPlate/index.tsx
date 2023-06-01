import { Container } from "./style";
import { SearchIcon } from "../../assets/SearchIcon"
import { useSystem } from "../../hooks/useSystem";

export function InputSearchPlate() {
  const { menuActive, toggleMenu } = useSystem();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    menuActive ? toggleMenu() : "";
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputSearch" className="srOnly">Input Search</label>
        <SearchIcon />
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