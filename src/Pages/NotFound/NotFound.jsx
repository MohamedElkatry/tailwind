/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../../Components/Title/Title'

function NotFound() {
    return (
        <>
            <Title title="Page Not Found" color="main"/>
            <div className="text-main">
                <span >Sorry, the page you are looking for could not be found.</span>
                
            </div>
        </>
    )
}

export default NotFound