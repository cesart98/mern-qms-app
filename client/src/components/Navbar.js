import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  return (
    <nav className="navbar bg-primary px-4 py-2">
      <div className="navbar-start">
        <button className="btn btn-ghost">
          <a href='/home'>qmsMERN</a>
        </button>
        <div className="dropdown flex">
          <label tabIndex="0" className="btn btn-ghost">
            dropdown
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </label>
          <ul className="dropdown-content w-44 bg-base-100 p-2 menu menu-compact rounded-box">
            <li><button onClick={() => navigate("/home")}>Home</button></li>
            <li><button onClick={() => navigate("/inventory")}>Inventory</button></li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-left">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="rounded-full w-24 bg-white">
              <img alt="round display of your avatar" src="https://media-exp1.licdn.com/dms/image/C5603AQF1C5rpp6XopQ/profile-displayphoto-shrink_100_100/0/1651628966395?e=1666224000&v=beta&t=uht2TX3Pkhe-k-vCaEsMzM52hrcTb93PdmNkhAp2sAE" />
            </div>
          </label>
          <ul className="dropdown-content w-44 bg-base-100 p-2 menu menu-compact rounded-box">
            <li><button onClick={() => navigate("/settings")}>Settings</button></li>
            <li><button onClick={() => navigate("/login")}>Signout</button></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}