import { Route, Routes } from 'react-router-dom'
import { DashboardRouteList } from '../hook/paths'
import type { DashBoardRouteType } from '../types/DashboardRouteType'

const DashboardRoutes = () => {
  return (
    <Routes>
        {DashboardRouteList.map((item:DashBoardRouteType) => <Route path={item.path} element={item.element}/>)}
    </Routes>
  )
}

export default DashboardRoutes