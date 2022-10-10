import React, { useState } from 'react';

/*
Jina
*/
function Form(props) {
    
    const [music, setMusic] = useState("");

    function handleChange(e){
        setMusic(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        props.addSongs(music);
        setMusic("");
    }

    function clearSongs(){
        props.setSongs([]);
        localStorage.clear();
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>
                <label htmlFor="new-music-title" className="encouragement">Create my one and only Playlist today</label>
            </h2>
            <div className="align">
                <input
                    type="text"
                    id="newMusic"
                    className="enterMusic"
                    name="text"
                    autoComplete="off"
                    value={music}
                    onChange={handleChange}
                />
            </div>
            <div>{"\n"}</div>
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
    )
}

export default Form; 