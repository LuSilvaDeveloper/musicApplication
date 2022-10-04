
function NavBar(props) {

    return (
        <nav>
            <span className="logo">Temp Logo</span>
            <span className="menuButton" onClick={props.menuHandler}>Menu</span>
        </nav>
    );
}

export default NavBar;