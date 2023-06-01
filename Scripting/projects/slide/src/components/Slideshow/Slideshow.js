import React, { useState } from 'react'
import './Slideshow.css'
import SlideshowData from './SlideshowData'
import BtnSlider from './BtnSlider'

export default function Slideshow() {
    const [slideIndex, setSlideIndex] = useState(1)
    
    const nextSlide = () => {
        if (setSlideIndex !== SlideshowData.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === SlideshowData.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (setSlideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(SlideshowData.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {SlideshowData.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpeg`}
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: 5 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
