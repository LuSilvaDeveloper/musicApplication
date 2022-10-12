import React, { useState } from 'react';

/*
Jina && Jay
*/
function Form(props) {

    const [music, setMusic] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [template, setTemplate] = useState(false);

    function handleMusicChange(e) {
        setMusic(e.target.value);
    }

    function handleArtistChange(e) {
        setArtist(e.target.value);
    }

    function handleGenreChange(e) {
        setGenre(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addSongs(music);

        setTemplate(!template);

        if (template) {
            //Might be a good idea to add a input validation here in the future
            const newMusic = {
                songName: document.getElementById("musicName").value,
                artist: document.getElementById("musicArtist").value,
                genre: document.getElementById("musicGenre").value
            }
            props.addSongs(newMusic);
            setMusic("");
            setArtist("");
            setGenre("");
        }
    }

    function clearSongs() {
        props.setSongs([]);
        localStorage.clear();
    };

    const defaultTemplate = (
        <form onSubmit={handleSubmit}>
            <h2>
                <label htmlFor="new-music-title" className="encouragement">Create my one and only Playlist today</label>
            </h2>
            <div className="align gap">
                <button type="submit" className="add button">
                    Add on my playlist
                </button>
            </div>
            <div>{"\n"}</div>
            <div className="align gap">
                <button type="button" className="clear button" onClick={clearSongs}>
                    Clear all music
                </button>
            </div>
        </form>

    );

    const addTemplate = (
        <form onSubmit={handleSubmit}>
            <h2>
                <label htmlFor="new-music-title" className="encouragement">Create my one and only Playlist today</label>
            </h2>
            <div className="align">
                <input
                    type="text"
                    id="musicName"
                    className="enterMusic"
                    name="text"
                    autoComplete="off"
                    value={music}
                    onChange={handleMusicChange}
                    placeholder="Song Name"
                />
            </div>
            <div className="align">
                <input
                    type="text"
                    id="musicArtist"
                    className="enterMusic"
                    name="text"
                    autoComplete="off"
                    value={artist}
                    onChange={handleArtistChange}
                    placeholder="Artist Name"
                />
            </div>
            <div className="align">
                <input
                    type="text"
                    id="musicGenre"
                    className="enterMusic"
                    name="text"
                    autoComplete="off"
                    value={genre}
                    onChange={handleGenreChange}
                    placeholder="Genre"
                />
            </div>
            <div>{"\n"}</div>
            <div className="align gap">
                <button type="submit" className="add button">
                    Add Song
                </button>
            </div>
            <div>{"\n"}</div>
        </form>
    );


    return (
        <div>
            {template ? addTemplate : defaultTemplate}
        </div>
    )
}

export default Form; 