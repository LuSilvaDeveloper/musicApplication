import React, { useState } from "react";

export default function MusicList(props) {
    const [isEditing, setEditing] = useState(false);
    const [newMusic, setNewMusic] = useState("");
    const [newArtist, setNewArtist] = useState("");
    const [newGenre, setNewGenre] = useState("");

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
        props.editSong(props.id, newMusic);

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
            <div>{"\n"}</div>
            <div className="align gap">
                <button type="submit" className="add button">
                    Save
                </button>
            </div>
            <div>{"\n"}</div>
        </form>);

    const viewTemplate = (
        <div className="add button songContainer">
            <div className="labelContainer">
                <label htmlFor={props.id}>
                    Song Name: {props.name}
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
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>

        </div>)

    return <li>{isEditing ? editingTemplate : viewTemplate}</li>

}


