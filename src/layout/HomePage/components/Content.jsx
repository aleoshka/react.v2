import React from 'react';

const Content = (props) => {
    return (
        <div>
            {props.labels.map((item, i) =>
                <div key={i} className="card m-3">
                    <img src={item.url} className="card-img-top" alt="Случайная картинка" />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.body}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Content;