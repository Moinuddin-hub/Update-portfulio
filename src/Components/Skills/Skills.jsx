import React from "react";
import PageHeader from "../../Page/PageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { skillsData } from "../Skills/Utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
const Skills = () => {
  return (
    <section className="bg-[#000000] h-[1000px] lg:h-[500px]">
      <div className="ml-10 mr-10 py-4">
        <PageHeader
          headerText="My Skills"
          icon={<BsInfoCircleFill size={40} />}
        />
      </div>
      <hr></hr>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-center gap-4 ">
        {skillsData.map((skill, index) => (
          <Animate
            play
            duration={1}
            delay={0.3}
            start={{
              transform: "translateX(-200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div key={index} className="mt-4">
              <h2 className="text-white">{skill.label}</h2>
            </div>

            {skill.data.map((skillItem, j) => (
              <AnimateKeyframes
                play
                duration={1}
                keyframes={["opacity : 1", "opacity : 0"]}
                iterationCount="1"
              >
                <div className="ml-20 py-4" key={j}>
                  <p className="text-white text-left">{skillItem.skillName}</p>
                  <Line
                    className="w-72"
                    percent={skillItem.percentage}
                    strokeWidth="2"
                    strokeColor="#FFFF00"
                    trailWidth="4"
                    strokeLinecap="square"
                  />
                </div>
              </AnimateKeyframes>
            ))}
          </Animate>
        ))}
      </div>
    </section>
  );
};

export default Skills;
