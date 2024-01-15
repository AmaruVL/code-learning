import { Navigate, Outlet } from "react-router-dom"
import { Navbar } from "../../ui"
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../pages"

export const childHeroesRoutes = [
  {
    path: "marvel",
    element: <MarvelPage/>
  },
  {
    path: "dc",
    element: <DcPage/>
  },
  {
    path: "search",
    element: <SearchPage/>
  },
  {
    path: "hero/:id",
    element: <HeroPage/>
  },
  {
    //Riesgo de bucle infinot si el padre posee path: "/*"
    path: "/*",
    element: <Navigate to="/"/>
  }
]

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
    </>
  )
}
