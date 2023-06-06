import { Container } from "./style";
import { SearchIcon } from "../../assets/SearchIcon"
import { useSystem } from "../../hooks/useSystem";
import { usePlateQuery } from "../../hooks/usePlateQuery";
import { useEffect, useState } from "react";

export function InputSearchPlate() {
  const { menuActive, toggleMenu, setFilterFoodPlates } = useSystem();
  const [searchPlates, setSearchPlates] = useState("");
  const plateQuery = usePlateQuery();

  const filterPlates = plateQuery.data?.filter((plate) => {
    return (
      String(plate.name).toLowerCase().includes(searchPlates.toLowerCase()) ||
      plate.category.toLowerCase().includes(searchPlates.toLowerCase())
    );
  });

  useEffect(() => {
    if (filterPlates) setFilterFoodPlates(filterPlates);
  }, [searchPlates]);

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
          value={searchPlates}
          onChange={(event) => setSearchPlates(event.target.value)}
        />
      </form>
    </Container>
  )
}