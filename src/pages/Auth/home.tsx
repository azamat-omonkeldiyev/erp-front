import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../hook/paths";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(paths.signin);
  }, []);
  return "";
};

export default Home;
