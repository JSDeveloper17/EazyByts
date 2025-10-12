import CodeBook from "../assets/codebook.PNG"
import Cinemate from "../assets/cinemate.PNG"
import Shopping from "../assets/shopping.PNG"
import Taskmate from "../assets/taskmate.PNG"
import Ecomerce from "../assets/ecomerce.PNG"

export const projects = [
    { 
        id:1,
        title: "CodeBook",
        image: CodeBook,
        description:"CodeBook is a React and Tailwind CSS web app that organizes programming resources in a clean, responsive interface, making it easy for learners to explore coding content.",
        technologies: ["React", "Tailwind CSS", "React Router","Netlify"]
    },{ 
        id:2,
        title: "CineMate",
        image: Cinemate,
        description: "Developed a dynamic movie browsing application in React, allowing users to search, explore, and view detailed information on movies",
        technologies: ["React", "Tailwind CSS", "Netlify"]
    },{ 
        id:3,
        title: "E-Commerce",
        image: Ecomerce,
        description: "A sleek, intuitive shopping cart app built with modern web technologies, enhancing user experience with dynamic updates and real-time feedback",
        technologies: ["React", "Tailwind CSS"]
    },{ 
        id:4,
        title: "Shopping-Cart",
        image: Shopping,
        description: "A streamlined task-management app allowing users to add, delete, and mark tasks complete, all within an intuitive, minimal design",
        technologies: ["React", "Tailwind CSS"]
    },{
        id:5,
        title: "TaskMate",
        image: Taskmate,
        description: "Designed a mobile-friendly UI with Tailwind CSS. ensuring accessibility and usability across all screen sizes",
        technologies: ["React", "CSS"]
    }]