import React from "react";
import { data } from "../Education/Utils";
import PageHeader from "../../Page/PageHeader";

import { BsInfoCircleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Education = () => {
  return (
    <section className="bg-[#000000] text-white">
      <div className="ml-10 mr-10 py-4">
        <PageHeader
          headerText="Education"
          icon={<BsInfoCircleFill size={40} />}
        />
      </div>
      <hr></hr>
   
       
    
           <VerticalTimeline>
        {
            data.experience.map((item, index) => (
              <VerticalTimelineElement key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
               >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>
              <p>
              {item.description}
              </p>
            </VerticalTimelineElement>
    
            ))
        }
    

     
         {
            data.education.map((item, index) => (
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="November 2012"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title ">
             {item.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle ">
             {item.subTitle}
            </h4>
            <p className="">
              {item.description}
            </p>
          </VerticalTimelineElement>
            ))
         }
        
     
      </VerticalTimeline>
    </section>
  );
};

export default Education;
