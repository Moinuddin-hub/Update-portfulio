import React from 'react';

const LinkBtn = ({route}) => {
    const {path, name}=route;
    return (
        <div>
               <li className=' text-white hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium transition-colors duration-30 
                '><a  href={path}>{name}</a></li>
        </div>
    );
};

export default LinkBtn;