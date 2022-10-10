import { useState } from "react";
import NavBar from "./Components/NavBar";
import Menu from "./Components/Menu";
import MainContent from "./Components/MainContent";
import Form from "./Components/Form";

function App() {

  const [menuFlag, setMenu] = useState(false);

  const menuOnClick = () => {
      setMenu(!menuFlag);
      if (menuFlag) {
          document.getElementById('menu').style.transform = "translate(800px,0)";
      }else {
          document.getElementById('menu').style.transform = "translate(0,0)";
      }
  };


  return (
    <div className="App">
      <NavBar menuHandler={menuOnClick} />
      <Menu menuHandler={menuOnClick} />
      <MainContent />
      <Form />

    </div>
  );
}

export default App;
