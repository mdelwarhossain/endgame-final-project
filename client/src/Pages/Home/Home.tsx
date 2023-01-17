import React from 'react';
import Statistics from '../Statistics/Statistics';
import About from './AboutUs/About';
import Banner from './Banner/Banner';
import Members from './Community/Members';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Members></Members>
            <Statistics></Statistics>

        </div>
    );
};

export default Home;