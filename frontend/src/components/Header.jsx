import { Link } from "react-router-dom";
import "./Header.css";
import MenuBurger from "./MenuBurger";

function Header() {
  return (
    <header className=" flex justify-between header bg-blue h-28">
      <Link to="/">
        <img
          className="logoStyle p-1 bg-blue h-28 z-14"
          src="src/assets/Jollydays_logo.png"
          alt="Logo web-site"
        />
      </Link>

      <Link to="/">
        <h1 className="navTitle text-3xl flex items-center bg-blue h-28">
          Jollydays
        </h1>
      </Link>
      <MenuBurger />
    </header>
  );
}

export default Header;
