import { NavLink, Route, Routes } from 'react-router-dom';

export default function Header() {
  return (
    <header className="h-16 bg-red-500 flex justify-between items-center">
      <div className="bg-red-300 flex gap-2">
        <div>LOGO</div>
        <div>PAGE_SELECTOR</div>
      </div>
      <div className="bg-red-300 flex gap-2">
        <div>USER_NAME</div>
        <div>USER_LOGO</div>
      </div>
    </header>
  );
}