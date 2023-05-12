import "./Header.css";
import MenuBurger from "./MenuBurger";

function Header() {
  return (
    <header className=" flex justify-between header bg-blue h-28">
      <img
        className="logoStyle p-1 bg-blue"
        src="src/assets/Jollydays_logo.png"
        alt="Logo web-site"
      />

      <h1 className="navTitle flex items-center bg-blue">Jollydays</h1>
      <MenuBurger />
    </header>
  );
}

export default Header;
