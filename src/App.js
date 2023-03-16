import About from "./Pages/About";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import RootLayout from "./Layout/RootLayout";
import Help from "./Pages/Help";
import Page404 from "./Pages/Page404";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/:id" element={<Help />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

 // <>
    //   <header>Wellcome - I AM RC</header>

    //   <NavLink to="/">HOME</NavLink>
    //   <NavLink to="/about">ABOUT</NavLink>

    //   <Routes>
    //     <Route path="/" element={<Home/>} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </>

export default App;
