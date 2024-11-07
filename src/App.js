import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import ErrorBoundary from "./components/ErrorBoundary";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
