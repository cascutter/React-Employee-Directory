import React from "react";

import "../styles/nav.css";

function Navigation({ onSearch, searchTerm, handleSortByName, handleSortByDept }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <form className="form-inline">
                <input
                    className="form-control"
                    value={searchTerm} 
                    onChange={onSearch} 
                    type="text"
                    placeholder="search employees"
                />
            </form>
            <p>Sort Employees By:</p>
            <button type="button" class="btn" onClick={handleSortByName}>Name</button>
            <button type="button" class="btn" onClick={handleSortByDept}>Department</button>
            
        </nav>
    )
}

export default Navigation;