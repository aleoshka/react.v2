import React from 'react';

const Footer = () => {
    return (
        <div>
            <p className="m-3">&copy; Авторский права мои {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer;