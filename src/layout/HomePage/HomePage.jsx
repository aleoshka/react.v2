import React from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

const HomePage = () => {
    const headerText = "Какое-то значение";
    const labels = Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        cardImage: `https://picsum.photos/${200 + i}/100`,
        cardTitle: `Заголовок ${i + 1}`,
        cardText: `Описание ${i + 1}`,
    }));
    // const labels = new Array(6).fill().map((_, i) => ({
    //     id: i + 1,
    //     cardTitle: `Заголовок ${i + 1}`,
    //     cardText: `Описание ${i + 1}`,
    // }))

    const currentYear = new Date().getFullYear();

    return (
        <div className="container col-10">
            <Header
                headerText={headerText}
            />
            <Content
                labels={labels}
            />
            <Footer
                currentYear={currentYear}
            />
        </div>
    )
}

export default HomePage;