import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import Routes from "./routes/routes";

import { Provider } from "react-redux";
import store from "./redux/index";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
      <GlobalStyles />
    </>
  );
}

export default App;
