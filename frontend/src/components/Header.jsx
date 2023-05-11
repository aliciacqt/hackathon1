import "./Header.css";
import MenuBurger from "./MenuBurger";

function Header() {
  return (
    <header className=" header h-28">
      <img
        className="logoStyle p-1"
        src="src/assets/logo_coconut.png"
        alt="Logo web-site"
      />

      <h1 className="navTitle flex items-center">Jollydays</h1>
      <MenuBurger />
    </header>
  );
}

export default Header;
