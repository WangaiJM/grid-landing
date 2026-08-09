import { useContext } from "react";
import Home from "./pages/Home/Home";
import { NavContext } from "./context/NavContext/NavContext";

const App = () => {
  const context = useContext(NavContext);
  if (!context) throw new Error("No context!!");

  const { active } = context;

  return (
    <div className="container">
      <Home />
      {active.active && <div className="overlay"></div>}
    </div>
  );
};
export default App;
