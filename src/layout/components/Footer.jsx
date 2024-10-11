import React from 'react';

const Footer = (props) => {
    return (
        <div>
            <p className="m-3">
                &copy; Авторский права мои {props.currentYear}
            </p>
        </div>
    )
}

export default Footer;