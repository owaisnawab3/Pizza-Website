import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket,faBars,faCartShopping,} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const toogleMenu = () => {
  setIsOpen(!isOpen)
}

  return (
    <header>
      <nav
        id=""
        className="font-display p-5 flex justify-between items-center px-6 mx-auto lg:px-20 mx-auto md:px-10"
      >
        <div id="Logo-Section">
          <h1 id="Logo" className="text-xl font-semibold text-amber-400 cursor-pointer">
            PizzaWebsite
          </h1>
        </div>
        <div id="Nav-Links">
          <ul
            id="menu-links"
            className="display-second gap-10 hidden md:flex items-center text-transform: capitalize"
          >
            <li>
              <a href="#" className="font-normal">
                home
              </a>
            </li>
            <li>
              <a href="#" className="font-normal">
                menu
              </a>
            </li>
            <li>
              <a href="#" className="font-normal">
                service
              </a>
            </li>
            <li>
              <a href="#" className="font-normal">
                about us
              </a>
            </li>
            <li>
              <a href="#" className="font-normal">
                contacts
              </a>
            </li>
          </ul>
        </div>
        <div id="cart_button" className="flex gap-5 items-center">
          <FontAwesomeIcon className="text-lg cursor-pointer" icon={faCartShopping} />
          <button className="hidden md:block md:flex items-center gap-1 px-5 py-2 rounded-xl font-normal bg-amber-400 hover:bg-amber-400/75 text-white cursor-pointer">
            sign in
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </button>
          <div className="md:hidden cursor-pointer">
          <button 
          className="md:hidden fixed top-5 right-5 z-50 p-2 bg-blue-600 text-white rounded-lg"
          onClick={toogleMenu}>
          <FontAwesomeIcon className="" icon={faBars} />
          </button>  
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;