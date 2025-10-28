import {createBrowserRouter, RouterProvider} from "react-router-dom";


import {About, Landing, Error, Cocktail, HomeLayout, Newsletter, SingleError} from "./pages/index.js";

import {loader as landingLoader} from "./pages/Landing.jsx";
import {loader as singleCocktailLoader} from "./pages/Cocktail.jsx";
import {action as newsletterAction} from "./pages/Newsletter.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTimeout: 1000 * 60 * 5,
    }
  }
});

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
        loader: landingLoader(queryClient),
      },
      {
        path: "cocktail/:id",
        errorElement:<SingleError/>,
        loader:singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
        errorElement: <SingleError/>,
      },
      {
        path: "about",
        element: <About />,
      },
    ]
  },
])
const App = () => {
  return<QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
};
export default App;
