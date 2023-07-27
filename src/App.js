import { RouterProvider } from "react-router";
import { router } from "./routes/Route/Route";

function App() {
  return (
    <div>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
