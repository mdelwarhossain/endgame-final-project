import React from 'react';
import Member from './Member';
const warriors = [
    {
        name: 'Warrior 1',
        role: 'Developer', 
        img: ''
    },
    {
        name: 'Warrior 2',
        role: 'Developer', 
        img: ''
    },
    {
        name: 'Warrior 3',
        role: 'Developer', 
        img: ''
    },
    {
        name: 'Warrior 4',
        role: 'Developer', 
        img: ''
    },
    {
        name: 'Warrior 5',
        role: 'Developer', 
        img: ''
    },
    {
        name: 'Warrior 6',
        role: 'Developer', 
        img: ''
    },
]

const Members = () => {
    return (
        <div className='my-12 mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-14'>Let's introduce who is in the behind</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                warriors.map((warrior, idx) => <Member
                    key={idx}
                    warrior={warrior}
                ></Member>)
            }
        </div>
        </div>
    );
};

export default Members;