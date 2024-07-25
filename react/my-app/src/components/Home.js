// src/pages/Home.js
import React from 'react';
import Card from '../components/Card';

const Home = () => {
    const cardsData = [
        {
            title: 'Card 1',
            description: 'This is the description for card 1.',
            imageUrl: 'https://via.placeholder.com/400'
        },
        {
            title: 'Card 2',
            description: 'This is the description for card 2.',
            imageUrl: 'https://via.placeholder.com/400'
        },
        {
            title: 'Card 3',
            description: 'This is the description for card 3.',
            imageUrl: 'https://via.placeholder.com/400'
        },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                />
            ))}
        </div>
    );
};

export default Home;
