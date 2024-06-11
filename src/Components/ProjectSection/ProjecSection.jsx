import { motion } from "framer-motion";
import ProjectOneImage from "./../../assets/Img/bharatPe.png";
import ProjectTwoImage from "./../../assets/Img/drum.png";
import ProjectThreeImage from "./../../assets/Img/Currency.png";
import ProjectFourImage from "./../../assets/Img/physical.png";
import ProjectSixImage from "./../../assets/Img/meal.png";
import ProjectFiveImage from "./../../assets/Img/emojee.png";
import ProjectSevenImage from "./../../assets/Img/aria.png";
import ProjectEightImage from "./../../assets/Img/codepen.png";
import ProjectNineImage from "./../../assets/Img/e-commerece.png";
import "./ProjectSection.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import AttachmentIcon from "@mui/icons-material/Attachment";
import techReact from "./../../assets/Img/techReact.png";
import techHtml from "./../../assets/Img/Html.png";
import techCSS from "./../../assets/Img/techCSS.png";
import techJs from "./../../assets/Img/techJavascript.png";
import techtailwind from "./../../assets/Img/tecTtailwind.png";
const ProjectSection = () => {
  const projects = [
    {
      title: "E-commerce",
      description:
        "Sleek e-commerce platform developed with React and Tailwind CSS. Seamlessly integrates intuitive navigation, product showcases, and secure checkout. Responsive design ensures optimal shopping experience across devices. Elevates online retail with modern aesthetics and streamlined functionality for both merchants and customers.",
      link: "https://github.com/Deep1416/E-commerce",
      image: ProjectNineImage,
      goLive: "e-commerce-hazel-omega.vercel.app",
      technology1: techReact,
      technology2: techtailwind,
    },
    {
      title: "CodePen",
      description:
        "My project on CodePen leverages React for dynamic user interfaces, Tailwind CSS for sleek styling, and Firebase for real-time data storage and authentication. It seamlessly integrates these technologies to build responsive web applications with interactive features and secure user authentication",
      link: "https://github.com/Deep1416/CodePen-React",
      image: ProjectEightImage,
      goLive: "code-pen-react.vercel.app",
      technology1: techReact,
      technology2: techtailwind,
    },
    {
      title: "Meal App",
      description:
        "Modern food website crafted with React and Tailwind CSS. Offers a seamless browsing experience with vibrant visuals and intuitive navigation. Features diverse recipes, dynamic filtering, and responsive design for optimal viewing on any device. Elevates culinary exploration with a user-friendly interface and delicious inspiration.",
      link: "https://github.com/Deep1416/meal-app_react",
      image: ProjectSixImage,
      goLive: "meal-app-react-peach.vercel.app",
      technology1: techReact,
      technology2: techtailwind,
    },
    {
      title: "Physical Website",
      description:
        "Dynamic fitness website built with React, featuring Gym GIF API integration. Users explore exercises through animated GIFs, organized by muscle groups. Responsive design ensures accessibility across devices. Modular codebase enhances maintainability. Promotes health and fitness with engaging visual content.",
      link: "https://github.com/Deep1416/physical_react",
      image: ProjectFourImage,
      goLive: "physical-react.vercel.app",
      technology1: techReact,
      technology2: techtailwind,
    },
    {
      title: "Currency Convert",
      description:
        "This project is a modern currency converter application developed using React. It allows users to seamlessly convert between different currencies with real-time exchange rates. The intuitive user interface provides input fields for entering the amount to convert, dropdown menus for selecting the source and target currencies.",
      link: "https://github.com/Deep1416/Currency_convert_with_react",
      image: ProjectThreeImage,
      goLive: "currency-convert-with-react.vercel.app",
      technology1: techReact,
      technology2: techtailwind,
    },
    {
      title: "Emoji Search",
      description:
        "The Emoji Search Website is an interactive web application designed to help users find and copy their favorite emojis quickly and efficiently. This project was built using HTML, CSS, and JavaScript, with a focus on providing a seamless user experience through intuitive design and functionality.",
      link: "https://github.com/Deep1416/Emoji-project",
      image: ProjectFiveImage,
      goLive: "emoji-project-sable.vercel.app",
      technology1: techHtml,
      technology2: techCSS,
      technology3: techJs,
    },
    {
      title: "Drum Kit",
      description:
        "This project is an interactive DrumKit clone built using HTML, CSS, and JavaScript. The application features a responsive layout with visually appealing drum pads that users can click or press corresponding keyboard keys to produce drum sounds. JavaScript is used to handle event listeners and audio playback, providing a fun and engaging user experience.",
      link: "https://github.com/Deep1416/Drum-kit",
      image: ProjectTwoImage,
      goLive: "drum-kit-green-beta.vercel.app",
      technology1: techHtml,
      technology2: techCSS,
      technology3: techJs,
    },
    {
      title: "BharatPe Clone",
      description:
        "This project is a front-end clone of BharatPe, developed using HTML, CSS, and JavaScript. It replicates the user interface of BharatPe's payment platform, featuring intuitive navigation, a streamlined payment flow, and interactive elements. JavaScript is utilized to handle user interactions, such as input validation and dynamic updates. ",
      link: "https://github.com/SanjayvVarma/Bharat-Pe/tree/main/Deependra",
      image: ProjectOneImage,
      goLive: "https://sanjayvvarma.github.io/Bharat-Pe/",
      technology1: techHtml,
      technology2: techCSS,
      technology3: techJs,
    },
    {
      title: "Aria",
      description:
        "his project is a front-end clone of an ARIA website, built using HTML and CSS. It focuses on creating an accessible web interface that includes navigational elements, interactive components, and dynamic content. The design adheres to ARIA guidelines, ensuring that it is usable by individuals with disabilities, providing a more inclusive web experience.",
      link: "https://github.com/Deep1416/mojar-project",
      image: ProjectSevenImage,
      goLive: "https://deep1416.github.io/mojar-project/",
      technology1: techHtml,
      technology2: techCSS,
    },
  ];

  return (
    <div
      id="project-section"
      className="py-14 px-5 text-center bg-slate-300 from-gray-200 to-gray-300"
    >
      <h2 className="text-5xl mb-14 font-bold">Projects</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative m-3 cursor-pointer flex flex-col text-gray-700 bg-black shadow-md bg-clip-border rounded-xl w-96 project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            {project.image && (
              <motion.div
                className="relative h-56 mx-4 mt-5 overflow-hidden rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
                whileHover={{ opacity: 0.9 }} // Reduce opacity on hover
              >
                <img
                  src={project.image}
                  alt="card-image"
                  className="w-full h-full object-cover rounded-xl"
                />
                <motion.div
                  className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute inset-0 bg-black opacity-70 rounded-xl "></div>
                  <div className="flex gap-12 justify-center mx-2 my-2 space-x-2 z-10">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                    >
                      <GitHubIcon
                        style={{ fontSize: "45px", fill: "#FFD700" }}
                      />
                    </motion.a>
                    <motion.a
                      href={project.goLive}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                    >
                      <AttachmentIcon
                        style={{ fontSize: "45px", fill: "#FBF9EF" }}
                      />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            )}
            <div className="p-6">
              <div className=" my-3 font-Josefin text-2xl font-semibold leading-snug text-white flex items-center justify-between">
                <h5>{project.title}</h5>{" "}
                <div className="flex items-center">
                  <img src={project.technology1} className="w-10 h-10" alt="" />
                  <img src={project.technology2} className="w-10 h-10" alt="" />
                  <img src={project.technology3} className="w-10 h-10" alt="" />
                </div>
              </div>
              <p className="block font-sans text-base text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
