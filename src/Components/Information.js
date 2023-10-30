import React from "react";
import schonbrun from '../assets/schonbrun.jpeg'
import "../Styles/information.css";

const Information = () => {
    return (
        <div id="Facts" className='w-full bg-white py-16 px-4'>

            <div className='mainCont'>
                <img className='photoInformation' src={schonbrun} alt='/' />
                <div className='twoCol'>
                    <h3>HOW MANY PEOPLE VISIT VIENNA EVERY YEAR?</h3>
                    <h1>There are almost 18 mln people come to the capital</h1>
                    <p>And this number grows every year</p>
                </div>
            </div>
        </div>
    )
}


export default Information