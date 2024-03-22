import { motion } from "framer-motion";
import PageHeader from "../../Page/PageHeader";
import { BsInfoCircleFill } from "react-icons/bs";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "ResuMagnet",
      description: "Resume,CV,CoverLetter builder Website",
      imageUrl: "https://i.ibb.co/MhfHm1c/Screenshot-2024-03-22-094526.png",
      LiveSite: "https://resu-magnet-frontend.vercel.app/",
      ClientSite: "https://github.com/teamkingsman/resuMagnet-frontend",
      ServerSite: "https://github.com/teamkingsman/resuMagnet-backend",
    },
    {
      id: 2,
      title: "Resturent Managment system",
      description: "A resturant service Website",
      imageUrl: "https://i.ibb.co/mt9pf4s/Screenshot-2024-03-22-094659.png",
      LiveSite: "https://coffee-store-82b59.web.app/",
      ClientSite: "https://github.com/Moinuddin-hub/final-project",
      ServerSite: "https://github.com/Moinuddin-hub/Final-project-server",
    },
    {
      id: 3,
      title: "Tour Guide",
      description: "A tour package service website",
      imageUrl: "https://i.ibb.co/9tdrjV4/Screenshot-2024-03-22-105542.png",
      LiveSite: "https://thunderous-monstera-6da5d4.netlify.app/",
      ClientSite: "https://github.com/Moinuddin-hub/Tourguide-12-client-side",
      ServerSite: "https://github.com/Md-Rahman-Hasan/resu-magnet-server",
    },
    // Add more projects as needed
  ];
  return (
    <div className="mx-auto  bg-black md:h-[500px] h-[1200px]">
      <div className="ml-10 mr-10 py-4">
        <PageHeader
          headerText="My Project"
          icon={<BsInfoCircleFill size={40} />}
        />
      </div>
      <hr></hr>
      <div className="grid mx-4 grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white p-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full mb-4 h-44"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex justify-around">
              <button className="btn btn-accent">
                <a href={project.LiveSite}>Live site</a>
              </button>
              <button className="btn btn-accent">
                <a href={project.ClientSite}>Client site</a>
              </button>
              <button className="btn btn-accent">
                <a href={project.ServerSite}>server site</a>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
