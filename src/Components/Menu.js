function Menu(props){

    return (
        <div id="menu" className="menuSlide">
            <h2 className="menuHeader" onClick={props.menuHandler}>
                Menu
            </h2>
            <ul className="menuList">
                <li>Under Development</li>
                <li>Please Wait!</li>
            </ul>
        </div>
    );
}

export default Menu;