import { useContext } from "react"
import { Context } from "./context/Context"
import DashboardRoutes from "./routes/DashboardRoutes"
import AuthRoutes from "./routes/routes"


function App() {

  const {token} = useContext(Context)
  return token ? <DashboardRoutes/> : <AuthRoutes/>
}

export default App
