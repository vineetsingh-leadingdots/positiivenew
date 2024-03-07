import {Provider, useSelector} from "react-redux";
import "./App.css";
import {store, persistor} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";

import RouterFile from "./route/router";

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterFile />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
