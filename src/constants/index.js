import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
   
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
   
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
   
  
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: '',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: '',
    }
];

export const projects = [
    {
        iconUrl: estate,
        theme: 'btn-back-red',
        name: 'Weather App',
        description: 'Developed a web application that provides accurate and up-to-date weather forecasts',
        link: 'https://github.com/Saurabh-Sithkar/Weather-App.git',
    },
   
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Calculator',
        description: 'my Calculator App, a meticulously designed web application that provides a straightforward and efficient solution for basic arithmetic operations. Built with HTML, CSS, and JavaScript, this calculator combines functionality with an intuitive user interface, making mathematical calculations a breeze.',
        link: 'https://github.com/Saurabh-Sithkar/Calculator.git',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'To-Do-List',
        description: 'Presenting my To-Do List App, a practical and efficient web application designed to simplify task management. Crafted using HTML, CSS, and JavaScript, this app provides a clean and intuitive platform for organizing your daily activities seamlessly.',
        link: 'https://github.com/Saurabh-Sithkar/To-Do-List.git',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'QR Generator',
        description: 'Introducing my QR Code Generator, a versatile web application designed to simplify and streamline information sharing. Crafted using HTML, CSS, and JavaScript, this tool empowers users to create QR codes for various types of data, from website URLs to contact information, with ease.',
        link: 'https://github.com/Saurabh-Sithkar/QR-generator.git',
    }
];

