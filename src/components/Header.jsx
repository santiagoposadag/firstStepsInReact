import React from 'react';

function Header({titulo}) {
    return (
        <div className="encabezado">
            <h1>{titulo}</h1>
        </div>
    );
}


export default Header;