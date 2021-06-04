import ReactDOM from "react-dom";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faTimes, faChevronDown, faSortUp, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
<<<<<<< HEAD
import store from "./store";

library.add(faSearch, faTimes, faSortDown, faSortUp);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
=======
import { createStore } from "redux";
import rootReducer from "./Redux/index";

const store = createStore(rootReducer);

library.add(faSearch, faTimes, faChevronDown, faSortUp, faQuestion, fasHeart, farHeart);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
>>>>>>> 5ca157fbe7660cd99b637f68e71f7500b922e3db
  document.getElementById("root")
);
