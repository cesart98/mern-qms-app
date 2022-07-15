import { useNavigate } from "react-router-dom";

function NavBrandLogo() {
  return (
    <a className='text-white font-bold' href='/home'>qrsExpress</a>
  );
}

function NavDropdown() {
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

function UserPhoto() {
  return (
   <a href='/'>USER_PHOTO</a>
  );
 }


export default function Header() {
  return (
    <nav className="h-14 bg-gray-500 flex justify-between items-center px-6">
      <div className="flex gap-2">
        <NavBrandLogo />
        <NavDropdown />
      </div>
      <div className="flex gap-2">
        <UserPhoto />
      </div>
    </nav>
  );
}