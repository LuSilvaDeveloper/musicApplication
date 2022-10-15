function FilterButton () {

    function filterHandler () {

    }

    return (
        <div className="filterContainer">
            <button onClick={filterHandler} className="filterButtons songFilter">Songs</button>
            <button onClick={filterHandler} className="filterButtons artistFilter">Artists</button>
            <button onClick={filterHandler} className="filterButtons genreFilter">Genre</button>
            <button onClick={filterHandler} className="filterButtons genreFilter">Favorites</button>
        </div>
    );
}

export default FilterButton;