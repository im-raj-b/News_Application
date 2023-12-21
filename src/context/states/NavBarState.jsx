import React from "react";
import NavBarContext from "../ShowNavBarContext";
import { useState } from "react";

const NavBarState = (props) => {
  const [navBarState, setNavBarState] = useState(false);
  const updateStateNav = (params) => {
    setNavBarState(params);
  };
  return (
    <NavBarContext.Provider
      value={{ state: navBarState, update: updateStateNav }}
    >
      {props.children}
    </NavBarContext.Provider>
  );
};

export default NavBarState;
