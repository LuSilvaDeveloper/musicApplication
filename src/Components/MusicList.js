import React, { useState } from "react";

export default function MusicList(props) {
    const [isEditing, setEditing] = useState(false);
    const [newMusic, setNewMusic] = useState("");
    const [newArtist, setNewArtist] = useState("");
    const [newGenre, setNewGenre] = useState("");
    const [isFavorite, setFavorite] = useState(false);

    function handleMusicChange(e) {
        setNewMusic(e.target.value);
    }

    function handleArtistChange(e) {
        setNewArtist(e.target.value);
    }

    function handleGenreChange(e) {
        setNewGenre(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (editValidation()) {
            props.editSong(props.id, newMusic, newArtist, newGenre);
            setEditing(false);
            setNewMusic("");
            setNewArtist("");
            setNewGenre("");
        }
    }

    function editValidation() {
        const inputs = document.getElementsByClassName('enterMusic');
        for (let i = 1; i <= inputs.length; i++) {
            if (inputs[i - 1].value === "") {
                document.getElementById(`validation${i}`).innerHTML = "Incorrect Input!";
                return false;
            } else {
                document.getElementById(`validation${i}`).innerHTML = "";
            }
        }
        return true;
    }

    function onFavAdded(){
        setFavorite(!isFavorite);
        props.checkFavorite(props.id, isFavorite);
    }

    const editingTemplate = (
        <form onSubmit={handleSubmit}>
            <div className="align">
                <input
                    type="text"
                    id={props.id}
                    className="enterMusic"
                    name="text"
                    autoComplete="off"
                    value={newMusic}
                    onChange={handleMusicChange}
                    placeholder="Song Name"
                />
            </div>
            <div id="validation1" className="validations"></div>
            <div className="align">
                <input
                    type="text"
                    id="musicArtist"
                    className="enterMusic"
                    name="text"
                    autoComplete="off"
                    value={newArtist}
                    onChange={handleArtistChange}
                    placeholder="Artist Name"
                />
            </div>
            <div id="validation2" className="validations"></div>
            <div className="align">
                <input
                    type="text"
                    id="musicGenre"
                    className="enterMusic"
                    name="text"
                    autoComplete="off"
                    value={newGenre}
                    onChange={handleGenreChange}
                    placeholder="Genre"
                />
            </div>
            <div id="validation3" className="validations"></div>
            <div>{"\n"}</div>
            <div className="align gap">
                <button type="submit" className="add button">
                    Save
                </button>
            </div>
            <div className="align gap">
                <button type="button" className="add button cancel" onClick = {() => setEditing(false)}>
                    Cancel
                </button>
            </div>
            <div>{"\n"}</div>
        </form>);

    const viewTemplate = (
        <div className="add button songContainer">
            <div className="labelContainer">
                <label htmlFor={props.id}>
                    Song Name: {props.song}
                </label>
                <label htmlFor={props.id}>
                    Artist Name: {props.artist}
                </label>
                <label htmlFor={props.id}>
                    Genre Name: {props.genre}
                </label>
            </div>
            <div>
                <button
                    type="button"
                    className="add button"
                    onClick={() => setEditing(true)}
                >
                    Edit <span className="visually-hidden">{props.name}</span>
                </button>

                <button
                    type="button"
                    className="add button"
                    onClick={() => props.deleteSong(props.id)}
                >
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
            <div>
                <button type="button" className={isFavorite ? "button favAdded" : "button favButton"} onClick={onFavAdded}>Favorite</button>
            </div>

        </div>)

    return <li>{isEditing ? editingTemplate : viewTemplate}</li>

}


