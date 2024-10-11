import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const HomePage = () => {
    const headerText = "Какое-то значение";
    const [labels, setLabels] = useState([]);
    // const labels = Array.from({ length: 6 }, (_, i) => ({
    //     id: i + 1,
    //     cardImage: `https://picsum.photos/${200 + i}/100`,
    //     cardTitle: `Заголовок ${i + 1}`,
    //     cardText: `Описание ${i + 1}`,
    // }));
    // const labels = new Array(6).fill().map((_, i) => ({
    //     id: i + 1,
    //     cardTitle: `Заголовок ${i + 1}`,
    //     cardText: `Описание ${i + 1}`,
    // }))

    const currentYear = new Date().getFullYear();

    useEffect(() => {
        axios.get(baseUrl)
            .then(res => {
                res.data.slice(0, 5);
            });
    });

    return (
        <div className="container col-10">
            <Header
                headerText={headerText}
            />
            <Content
                labels={labels}
            />
            {/* <button
                className="btn btn-primary m-3"
                onClick={() => {
                    setLabels([...labels,
                    {
                        id: 1,
                        cardImage: `https://picsum.photos/`,
                        cardTitle: `Заголовок 1`,
                        cardText: `Описание 1`
                    }])
                }}
            >
                Добавить элемент
            </button> */}
            <Footer
                currentYear={currentYear}
            />
        </div>
    )
}

export default HomePage;