import React from 'react';

const Content = (props) => {
    return (
        <div>
            {props.labels.map((item, i) =>
                <div key={i} className="card m-3">
                    <img src={item.image} className="card-img-top" alt="Случайная картинка" />
                    <div className="card-body">
                        <h5 className="card-title">{item.cardTitle}</h5>
                        <p className="card-text">{item.cardText}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Content;