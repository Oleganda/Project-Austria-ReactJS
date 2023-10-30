import React from 'react';
import "../Styles/winterActivities.css";
import { CiSquareChevLeft, CiSquareChevRight } from 'react-icons/ci';


const WinterActivities = (props) => {


    const slideLeft = () => {
        var slider = document.getElementById("sliderId");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("sliderId");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div className="mainSliderContainer">
            <CiSquareChevLeft size={45} className="sliderIconLeft" onClick={slideLeft} />
            <div className="slider" id="sliderId">
                {
                    props.slides.map((slide, index) => {
                        return (
                            <div className='sliderCard' key={index}>
                                <div className="sliderCardImage" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}></div>
                                <p className="sliderCardTitle">{slide.title}</p>
                                <p className="sliderCardDiscription">{slide.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <CiSquareChevRight size={45} className='sliderIconright' onClick={slideRight} />
        </div >

    )
}
export default WinterActivities;