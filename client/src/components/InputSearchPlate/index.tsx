import { Container } from "./style";
import { SearchIcon } from "../../assets/SearchIcon"
import { useSystem } from "../../hooks/useSystem";
import { usePlateQuery } from "../../hooks/usePlateQuery";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function InputSearchPlate() {
  const { menuActive, toggleMenu, setFilterFoodPlates, setScrollToPlates } = useSystem();
  const [searchPlates, setSearchPlates] = useState("");
  const plateQuery = usePlateQuery();
  const navigate = useNavigate();

  const filterPlates = plateQuery.data?.filter((plate) => {
    const ingredientsName = plate.ingredients.map(ingredient => ingredient.name);
    return (
      String(plate.name).toLowerCase().includes(searchPlates.toLowerCase()) ||
      String(ingredientsName).toLowerCase().includes(searchPlates.toLowerCase())
    );
  });

  useEffect(() => {
    if (searchPlates.length === 0) {
      if (filterPlates) setFilterFoodPlates(filterPlates);
    };
  }, [searchPlates]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (filterPlates) setFilterFoodPlates(filterPlates);

    menuActive ? toggleMenu() : "";
    setScrollToPlates(true);

    if (location.pathname === "/") return;
    navigate('/');
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