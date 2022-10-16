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

        if (!template) {
            setTemplate(!template);
        }

        if (template) {
            if (formInputValidation()) {
                const name = document.getElementById("musicName").value;
                const artist = document.getElementById("musicArtist").value;
                const genre = document.getElementById("musicGenre").value;

                props.addSongs(name, artist, genre);
                setMusic("");
                setArtist("");
                setGenre("");
                setTemplate(!template);
            }
        }

    }

    function formInputValidation() {
        inputValidationReset();
        const songInput = document.getElementById("musicName").value;
        const artistInput = document.getElementById("musicArtist").value;
        const genreInput = document.getElementById("musicGenre").value;
        let flag = true;

        /**
         * Input validations.
         * */

        if (songInput === "") {
            document.getElementById("songValidation").innerHTML = "Please Enter a Valid Song Name";
            flag = false;
        }
        if (artistInput === "") {
            document.getElementById("artistValidation").innerHTML = "Please Enter a Valid Artist Name";
            flag = false;
        }
        if (genreInput === "") {
            document.getElementById("genreValidation").innerHTML = "Please Enter a Valid Genre Name";
            flag = false;
        }

        return flag;
    }

    function inputValidationReset() {
        document.getElementById("songValidation").innerHTML = "";
        document.getElementById("artistValidation").innerHTML = "";
        document.getElementById("genreValidation").innerHTML = "";
    }

    function clearSongs() {

        console.log(localStorage.getItem('listofSongs'));
        if(localStorage.getItem('listofSongs') !== null) {
            const willClear = window.confirm("Are you sure to clear all songs on your playlist?");
            if (willClear){
                props.setSongs([]);
                localStorage.clear();
                alert("Successfully cleared!");
            }
        } 

        else{
            alert("There is nothing in your playlist")
        }
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
            <div id="songValidation" className='validations'></div>
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
            <div id="artistValidation" className='validations'></div>
            <div className="align last-align">
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
            <div id="genreValidation" className='validations'></div>
            <div className="align gap">
                <button type="submit" className="add button">
                    Add Song
                </button>
            </div>
            <div className="align gap">
                <button type="button" className="add button cancel" onClick = {() => setTemplate(false)}>
                    Cancel
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