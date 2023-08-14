import { createContext, useReducer } from "react";

const Context = createContext();

const MenuDespegable = ({ children }) => {
  const initialState = {
    isMenuOpen: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggle_menu":
        return {
          ...state,
          isMenuOpen: !state.isMenuOpen,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, MenuDespegable };
