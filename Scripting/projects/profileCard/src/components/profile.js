import React from "react";
import john from "./john.jpg"
import paul from "./paul.jpg"
import george from "./george.jpg"
import ringo from "./ringo.jpg"
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Data from "./data"

function Profile() {
    return (
        <div className="container-slider">
            {Data.map((slide) => {
                return (
                    <div className="profile-card" >
                        <img src={slide.image} alt=""></img>
                        <div className="name">{slide.fullName}</div>
                        <div className="desc">{slide.description}</div>
                        <div className="sm">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaLinkedin />
                            <FaYoutube />
                        </div>
                        <a href="#" class="contact-btn">Contact Me</a>
                    </div>
                )
            })}
        </div>)
}

export default Profile;