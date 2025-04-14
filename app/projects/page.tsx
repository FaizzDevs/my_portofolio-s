"use client";

import { FaHtml5, FaCss3, FaNode, FaReact, FaFigma, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiArduino, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
    title: "About Me",
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
            fieldValue: "8 Months",
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
    desc: "I have experience across various fields, including front-end development, customer service, multimedia, and organizational administration. Currently, I’m focusing on my role as a Front-End Developer Intern at Core Initiative while actively growing my skills in technology and programming. With a background as a Database Practicum Teaching Assistant, leader of a robotics organization, and SAR robot builder, I’m used to working in teams, leading projects, and solving challenges with both analytical thinking and creativity. I also participated in the Technocorner UGM competition in the Line Follower Robot division, which strengthened my skills in logic, sensor systems, and robotic control.",
    items: [
        // {
        //     company: "Core Initiative",
        //     position: "Front-End Developer Intern Project Based",
        //     date: "Apr 2025 - Present",
        // },
        {
            company: "PT Shopee International Indonesia",
            position: "CC Inbound Call E-Commerce Vads",
            date: "Oct 2024 - Feb 2025",
        },
        {
            company: "Jepara Yogyakarta Family Regional Organization",
            position: "Multimedia Division",
            date: "Mar 2023 - Jan 2025",
        },
        {
            company: "UTY Creative Hub",
            position: "Administration",
            date: "Jul 2023 - Aug 2024",
        },
        {
            company: "Mancay Play Store",
            position: "Senior Customer Service",
            date: "Apr 2022 - Jul 2024",
        },
        {
            company: "Yogyakarta University of Technology",
            position: "Database System Practicum Teaching Assistant",
            date: "Sep 2023 - Jan 2024",
        },
        {
            company: "UKM Robotika",
            position: "Chairman of the Organization",
            date: "Sep 2022 - Sep 2023",
        }
    ]
};

const education = {
    icon: '',
    title: "My Education",
    desc: "I completed my Bachelor’s in Informatics at Yogyakarta University of Technology from 2020 to 2024, focusing on technology development and information systems. Prior to that, I studied at MAN 1 Jepara in the field of Mathematics and Natural Sciences from 2017 to 2020, providing me with a strong foundation in exact sciences.",
    items: [
        {
            institution: "Yogyakarta University of Technology",
            degree: "Bachelor of Informatics",
            date: "2020 - 2024",
        },
        {
            institution: "MAN 1 Jepara",
            degree: "Department of Mathematics and Natural Sciences",
            date: "2017 - 2020",
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
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
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
            name: "React.js",
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
        {
            icon: <FaGitAlt />,
            name: "Git",
        }
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: 2.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0" >
            <div className="container px-5 mx-auto">
                <Tabs 
                    defaultValue="experience" 
                    className="flex flex-col xl:flex-row gap-[60px]" >
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                            <TabsTrigger value="experience" className="cursor-pointer">Experience</TabsTrigger>
                            <TabsTrigger value="education"  className="cursor-pointer">Education</TabsTrigger>
                            <TabsTrigger value="skills" className="cursor-pointer">Skills</TabsTrigger>
                            <TabsTrigger value="about"  className="cursor-pointer">About Me</TabsTrigger>
                        </TabsList>

                        <div className="min-h-[70vh] w-full">
                            <TabsContent value="experience" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-3xl font-bold">{experience.title}</h3>
                                    <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0"> 
                                        {experience.desc}
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experience.items.map((item, index) => {
                                                return (
                                                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.date}</span>
                                                        <h3 className="text-xl max-w-[500px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.company}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            <TabsContent value="education" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-3xl font-bold">{education.title}</h3>
                                        <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0"> 
                                            {education.desc}
                                        </p>
                                        <ScrollArea className="h-[400px]">
                                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                                {education.items.map((item, index) => {
                                                    return (
                                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                            <span className="text-accent">{item.date}</span>
                                                            <h3 className="text-xl max-w-[500px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                            <div className="flex items-center gap-3">
                                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                                <p className="text-white/60">{item.institution}</p>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </ScrollArea>
                                    </div>
                            </TabsContent>
                            <TabsContent value="skills" className="w-full h-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-3xl font-bold">{skills.title}</h3>
                                        <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0">{skills.desc}</p>
                                    </div>
                                    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grad-[30px]">
                                        {skills.items.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                    {skill.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>
                            <TabsContent value="about" className="w-full text-center xl:text-left">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-3xl font-bold">{about.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.desc}</p>
                                    <ul className="grid grid-cols-1 justify-between xl:grid-cols-2 gap-y-6 max-w-[7200px] mx-auto xl:mx-0">
                                        {about.info.map((item, index) =>{
                                            return (
                                                <li key={index} className="flex items-center justify-center gap-4 xl:justify-start">
                                                    <span className="text-white/60">{item.fieldName}</span>
                                                    <span className="text-xl">{item.fieldValue}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>
                        </div>
                </Tabs>
            </div>
        </motion.div>
    );
};