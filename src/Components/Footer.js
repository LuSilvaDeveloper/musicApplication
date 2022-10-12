function Footer(props) {

    const numberOfSongs = props.songs.length;

    return (
        <h1>Number of Songs added: {numberOfSongs}</h1>
        
    );
}

export default Footer;

