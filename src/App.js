import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { publicRoutes, privateRoutes } from "./routes/routes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import { Fragment } from "react";

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
        {privateRoutes.map((route, idx) => {
          const Page = route.component;
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            >
              {route.child?.map((subRoute, idx) => (
                <Route
                  key={idx}
                  path={subRoute.path}
                  element={<subRoute.component />}
                />
              ))}
            </Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
