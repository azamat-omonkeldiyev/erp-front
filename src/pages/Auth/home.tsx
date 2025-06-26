import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { paths } from "../../hook/paths"

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(paths.signIn)
  },[])
  return ""
}

export default Home