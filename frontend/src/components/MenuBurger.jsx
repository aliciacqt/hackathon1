// import { Link } from "react-router-dom";
import { useState } from "react";
import "./MenuBurger.scss";

const BurgerMenu = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const updateMenu = (e) => {
    if (e.code === "Enter" || e.code === undefined) {
      if (!isMenuClicked) {
        setBurgerClass("burger-bar clicked");
        setMenuClass("menu visible");
      } else {
        setBurgerClass("burger-bar unclicked");
        setMenuClass("menu hidden");
      }
      setIsMenuClicked(!isMenuClicked);
    }
  };
  return (
    <div className="bg-blue">
      <nav className="mt-4">
        <div
          className="burger-menu"
          onClick={updateMenu}
          onKeyDown={updateMenu}
          role="button"
          tabIndex="0"
        >
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
      </nav>
      <div className={menuClass}>
        <ul>
          <li>🏯 Japon</li>
          <li>🏙️ Route 66 </li>
          <li>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Edimbourgh</li>
          <li>🐻‍❄️ Svalbard</li>
          <li>𖣘 Golf du Morbihan</li>
          <li> 🌴 Mes prochaines vacances</li>
          <li> Mes sites web de vacs</li>
          <li>
            {/* <Link onClick={updateMenu} onKeyDown={updateMenu} to="/planetes">
              PLANÈTES
            </Link> */}
          </li>
          <li>
            {/* <Link onClick={updateMenu} onKeyDown={updateMenu} to="/support">
              SUPPORT
            </Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default BurgerMenu;
