
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";

import { Animate } from "react-simple-animate";
import PageHeader from "../../Page/PageHeader";
const About = () => {
  const personalDetails = [
    {
      label: "Name",
      value: "Moin Uddin",
    },
    {
      label: "Age",
      value: "27",
    },
    {
      label: "Address",
      value: "Khulna",
    },
    {
      label: "Email",
      value: "moincse022@gmail.com",
    },
    {
      label: "Contact No",
      value: "+88 01758724236",
    },
  ];

  const jobSummary =
    "Seasoned and independent Front End Developer with 1 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. It is imperative that you provide a thorough and professional approach to your resume. As a Front End Developer you will be judged by your ability to use UX and UI concepts and follow design guidelines. It is about expressing your attention to detail and how you can help implement design ideas for your future employer";

  return (
    <section id="about" className="bg-[#000000] h-auto text-white ">
      <div className="ml-10 mr-10 py-4">
        <PageHeader
          headerText="About Me"
          icon={<BsInfoCircleFill size={40} />}
        />
      </div>
      <hr></hr>
      <div className="mt-10 flex flex-col-reverse lg:flex-row-reverse gap-10 ml-10">
        <div className="w-full lg:w-1/2 ">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="text-2xl text-yellow-400">Front End Developer</h3>
            <p className="flex justify-center">{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="text-2xl text-yellow-400">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}:</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className=" lg:w-1/2  ">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <img
            src="https://i.ibb.co/dWddRWb/Whats-App-Image-2024-03-20-at-8-26-55-PM.jpg"
            alt=""
            className="w-72 h-72 mx-auto"
          />
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
