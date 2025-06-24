import { Route, Routes } from 'react-router-dom'
import { paths } from '../hook/paths'
import {Home, SingIn } from '../pages/Auth'

const AuthRoutes = () => {
  return (
    <Routes>
        <Route path={paths.home} element={<Home/>}/>
        <Route path={paths.signin} element = {<SingIn/>} />
    </Routes>
  )
}

export default AuthRoutes