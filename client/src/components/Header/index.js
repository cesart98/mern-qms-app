import React from "react";
import NavBrandLogo from './NavBrandLogo.js';
import NavDropdown from './NavDropdown.js';
import UserPhoto from './UserPhoto.js';

export default function Header() {
  return (
    <header className="h-14 bg-gray-500 flex justify-between items-center px-6">
      <div className="flex gap-2">
        <NavBrandLogo />
        <NavDropdown />
      </div>
      <div className="flex gap-2">
        <UserPhoto />
      </div>
    </header>
  );
}