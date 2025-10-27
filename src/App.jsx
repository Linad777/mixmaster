import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {About, Landing, Error, Cocktail, HomeLayout, Newsletter, SingleError} from "./pages/index.js";

import {loader as landingLoader} from "./pages/Landing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index:true,
        element: <Landing />,
        errorElement: <SingleError/>,
        loader: landingLoader,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ]
  },
])
const App = () => {
  return <RouterProvider router={router} />
};
export default App;
