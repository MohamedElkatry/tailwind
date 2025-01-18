/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function Title({ title, color }) {
    return (
            <>
            <h2 className={`text-${color} font-bold mb-4`}>{title}</h2>
            <div className={`flex justify-center text-${color} items-center w-1/3 mb-4`}>
                    <span className={`w-1/2 sm:w-1/3 shrink border-b-4 border-${color}`}></span>
                    <i className='fa-solid fa-star mx-4'></i>
                    <span className={`w-1/2 sm:w-1/3 shrink border-b-4 border-${color}`}></span>
            </div>
            </>
        );
    }

export default Title;
