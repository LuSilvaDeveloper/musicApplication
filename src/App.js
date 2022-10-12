import {useState, useEffect} from "react";
import NavBar from "./Components/NavBar";
import Menu from "./Components/Menu";
import MainContent from "./Components/MainContent";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import MusicList from "./Components/MusicList";
import FilterButton from "./Components/FilterButtons";
import {nanoid} from "nanoid";

function App() {

  const [menuFlag, setMenu] = useState(false);
  const [songs, setSongs] = useState([]);
  const [filter, setFilter] = useState("songName");

    useEffect(() => {
        const data = localStorage.getItem('listOfSongs');
        if (data) {
            setSongs(JSON.parse(data));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('listOfSongs', JSON.stringify(songs))
    }, [songs]);

    function addSongs(songName, artist, genre) {
        const newSong = {id: `#-${nanoid()}`, songName, artist, genre};
        setSongs([...songs, newSong]);
    }

    /**
     *  Might have to edit this function later in order to be able to edit artist and genre
     * */

    function editSong(id, newSong) {
        const editedSongList = songs.map((song) => {
            if (id === song.id) {
                return {...song, name: newSong}
            }
            return song
        });
        setSongs(editedSongList);
    }

    const songList = songs.map((song) => (
      <MusicList
        id={song.id}
        name={song.name}
        artist={song.artist}
        genre={song.genre}
        key={song.id}
        editSong={editSong}
      />
    ))

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
      <FilterButton setFilter={setFilter}/>
      <ul>
            {songList}
      </ul>
      <Footer songs={songs} />  
    </div>
  );
}

export default App;
