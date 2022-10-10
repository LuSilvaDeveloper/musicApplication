import React, {useState, useEffect} from "react";
import { nanoid } from "nanoid";
import Form from "./Form";

function Home() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('listOfSongs');
        if (data) {
            setTasks(JSON.parse(data));
        }
    },[])

    useEffect(() => {
        localStorage.setItem('listOfSongs', JSON.stringify(songs))
    },[songs]);

    function addSongs(songName) {
        const newSong = { id: `#-${nanoid()}`, songName};
        setSongs([...songs, newSong]);
    }

    return (
        <Form
        addSongs={addSongs}
        setSongs={setSongs}
        />
    )
}

export default Home;
