import React from "react";

function Header() {
    return (
        <div className="bg-white shadow text-gray-800">
            <header className="container max-w-6xl px-10 py-3 mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="font-bold">Employee Directory</h1>
                </div>
                <a href="https://github.com/cascutter/React-Employee-Directory" className="hover:text-yellow-500">GitHub Repo</a>
            </header>
        </div>
    )
}

export default Header;