import { useNavigate } from "react-router-dom";
import React from "react";

function DropDownNav() {
  let navigate = useNavigate();
  return (
    <label>
          <select name="path" id="page_router" onInput={async (event) => {navigate(`/${event.target.value}`)}}>
            <option value="dashboard">Dashboard</option>
            <option value="inventory">Inventory</option>
            <option value="performance">Performance</option>
            <option value="training">Training</option>
          </select>
        </label>
  );
}

export default function Header() {
  return (
    <header className="h-16 bg-red-500 flex justify-between items-center">
      <div className="bg-red-300 flex gap-2">
        <div>LOGO</div>
        <DropDownNav />
      </div>
      <div className="bg-red-300 flex gap-2">
        <div>USER_NAME</div>
        <div>USER_LOGO</div>
      </div>
    </header>
  );
}