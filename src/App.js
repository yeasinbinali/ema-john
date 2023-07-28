import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import store from "./redux/store";
import { router } from "./routes/Route/Route";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
