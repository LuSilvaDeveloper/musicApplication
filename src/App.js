import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Menu from "./Components/Menu";
import MainContent from "./Components/MainContent";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import { nanoid } from "nanoid";

function App() {

  const [menuFlag, setMenu] = useState(false);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('listOfSongs');
    if (data) {
      setSongs(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('listOfSongs', JSON.stringify(songs))
  }, [songs]);

  function addSongs(songName) {
    const newSong = { id: `#-${nanoid()}`, songName };
    setSongs([...songs, newSong]);
  }

  const menuOnClick = () => {
    setMenu(!menuFlag);
    if (menuFlag) {
      document.getElementById('menu').style.transform = "translate(800px,0)";
    } else {
      document.getElementById('menu').style.transform = "translate(0,0)";
    }
  };


  return (
    <div className="App">
      <NavBar menuHandler={menuOnClick} />
      <Menu menuHandler={menuOnClick} />
      <MainContent />
      <Form
        addSongs={addSongs}
        setSongs={setSongs} />
      <Footer songs={songs} />  
    </div>
  );
}

export default App;
