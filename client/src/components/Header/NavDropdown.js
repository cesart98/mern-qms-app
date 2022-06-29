import { useNavigate } from "react-router-dom";

export default function NavDropdown() {
  let navigate = useNavigate();

  return (
    <label>
      <select name="path" id="page_router" onInput={async (event) => {navigate(`/${event.target.value}`)}}>
        <option value="home">Home</option>
        <option value="inventory">Inventory</option>
      </select>
    </label>
  );
}