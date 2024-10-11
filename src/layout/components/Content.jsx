import React from 'react';

const Content = () => {
    return (
        <div>
            {Array.from({ length: 5 }, (_, index) =>
                <div className="card m-3">
                    <img src={`https://picsum.photos/${200 + index}/100`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Заголовок 1</h5>
                        <p className="card-text">Описание 1</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Content;