import { Route, Routes } from "react-router-dom"
import { paths } from "../hook/paths"
import { Home } from "../pages/Dashboard"
import { SignIn } from "../pages/Auth"



const AuthRoutes = () => {
  return (
    <Routes>
        <Route path={paths.home} element={<Home/>}/>
        <Route path={paths.signIn} element={<SignIn/>}/>
    </Routes>
  )
}

export default AuthRoutes