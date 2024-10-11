import React from 'react';

const value = "Какое-то значение";

const Header = () => {
    return (
        <div>
            <h1 className="h1-style m-3">{value}</h1>
        </div>
    )
}

export default Header;