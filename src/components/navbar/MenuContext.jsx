import { createContext, useReducer } from "react";

 const Contexto = createContext();

 const ContextoProvider = ({ children }) => {
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
    <Contexto.Provider
      value={{ state, dispatch }}
    >
      {children}
    </Contexto.Provider>
  );
};

export {Contexto, ContextoProvider};
