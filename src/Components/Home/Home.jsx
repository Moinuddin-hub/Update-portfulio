import React from "react";
import image from './Resume/Resume (2).pdf'
import Typewriter from "typewriter-effect";
import {
  FaTwitter,
  FaPinterest,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { Animate } from "react-simple-animate";
import { Link } from "react-router-dom";

const Home = () => {
  return (
<div className="flex flex-col-reverse lg:flex-row-reverse justify-around bg-black items-center h-[500px]">
 
  <div className="w-96  lg:w-2/5  ">
  <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(900px)",
            }}
            end={{
              transform: "translatex(-0px)",
            }}
          >
    <img
      src="https://i.ibb.co/ZLPwM9D/moin.jpg"
      alt=""
      className="rounded-full bg-red-600 ml-8 md:ml-0 shadow-2xl w-72 "
    />
    </Animate>
  </div>
  <div className="mt-4 p-2 w-96 lg:ml-36 lg:w-3/5  ">
    <h2 className="text-2xl md:text-3xl lg:text-5xl text-white">I am Moin Uddin</h2>
    <p className="text-2xl md:text-3xl lg:text-5xl text-yellow-500">
      <Typewriter
        options={{
          strings: ["Frontend Developer","MERN Stack Developer"],
          autoStart: true,
          loop: true,
        }}
      />
    </p>
    <div className="flex gap-4  lg:items-center mt-4 text-md md:text-3xl lg:text-5xl">
     <div> <button className="btn  lg:w-36   btn-outline btn-accent">
     <a href={image} download="Resume">Download CV</a>
        </button></div>
     <div><Link to='/contact'><button className="btn lg:w-36 btn-outline btn-accent">contact Me</button></Link></div>
    </div>
    <div className="flex gap-4 text-emerald-300 mt-4 cursor-pointer">
    <FaFacebook
        size={30}
        className="border-4 hover:border-emerald-400 rounded-full"
      />
      <FaTwitter
        size={30}
        className="border-4 hover:border-emerald-400 rounded-full"
      />
      <FaPinterest
        size={30}
        className="border-4 hover:border-emerald-400 rounded-full"
      />
      <FaInstagram
        size={30}
        className="border-4 hover:border-emerald-400 rounded-full"
      />
    </div>
  </div>

</div>
  )
};

export default Home;


