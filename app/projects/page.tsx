"use client";

import { FaHtml5, FaCss3, FaNode, FaReact, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiArduino, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
    title: "My Skills",
    desc: "I am proficient in a variety of programming languages and technologies, including:",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Muhammad Faizz",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+62) 852-9338-7788",
        },
        {
            fieldName: "Experience",
            fieldValue: "1 year",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indonesian",
        },
        {
            fieldName: "Email",
            fieldValue: "mfaizalizza@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "Indonesian, English",
        },
    ]
};

const experience  = {
    icon: '',
    title: "My Experience",
    desc: "I have worked on various projects, including web development, mobile development, and UI/UX design. I am always eager to learn new technologies and improve my skills.",
    items: [
        {
            company: "PT. XYZ",
            position: "Software Engineer",
            date: "Jan 2022 - Present",
        },
        {
            company: "PT. ABC",
            position: "Web Developer",
            date: "Jan 2021 - Dec 2021",
        },
        {
            company: "E-Commerce Shopee",
            position: "Intern",
            date: "Jan 2020 - Dec 2020",
        },
        {
            company: "Tech Academy",
            position: "Teaching Assistant",
            date: "Jan 2020 - Dec 2020",
        },
    ]
};

const education = {
    icon: '',
    title: "My Education",
    desc: "I have a degree in Computer Science from XYZ University. I have also completed various online courses and certifications in web development, mobile development, and UI/UX design.",
    items: [
        {
            institution: "XYZ University",
            degree: "Bachelor of Computer Science",
            date: "2018 - 2022",
        },
        {
            institution: "ABC Academy",
            degree: "Web Development Bootcamp",
            date: "2021 - 2022",
        },
        {
            institution: "Tech Academy",
            degree: "Mobile Development Bootcamp",
            date: "2020 - 2021",
        },
    ]
};

const skills = {
    icon: '',
    title: "My Skills",
    desc: "I am proficient in a variety of programming languages and technologies, including:",
    items: [
        {
            icon: <FaHtml5 />,
            name: "HTML",
        },
        {
            icon: <FaCss3 />,
            name: "CSS",
        },
        {
            icon: <SiJavascript />,
            name: "JavaScript",
        },
        {
            icon: <SiTypescript />,
            name: "TypeScript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <FaNode />,
            name: "Node.js",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <SiArduino />,
            name: "Arduino",
        },
    ]
}

export default function Projects() {
    return (
        <div>Projects Page</div>
    );
};