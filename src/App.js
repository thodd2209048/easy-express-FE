import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { publicRoutes, privateRoutes } from "./routes/routes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, idx) => {
          const Page = route.component;
          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <DefaultLayout>
                  <Page />
                </DefaultLayout>
              }
            />
          );
        })}
        {privateRoutes.map((route, idx) => (
          <Route path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
