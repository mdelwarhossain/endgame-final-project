import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import image from '../../../assets/user.png'


type MemberProps = {
    warrior: {
        name: string;
        role: string;
        img: string;
    }
}
const Member = ({ warrior }: MemberProps) => {
    return (
        <div className='my-10'>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto text-center">
                <div className="">
                    <img className='mx-auto rounded-full -mt-20' src={image} alt='' />
                </div>
                <div className="card-body">
                    <h2 className="text-3xl font-semibold text-center">{warrior.name}</h2>
                    <p className='text-center'>{warrior.role}</p>
                    <div className="divider"></div>
                    <div className='flex justify-center gap-5'>
                        <FaMailBulk></FaMailBulk>
                        <FaGithubSquare></FaGithubSquare>
                        <FaLinkedin></FaLinkedin>
                        <FaFacebookSquare></FaFacebookSquare>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Member;