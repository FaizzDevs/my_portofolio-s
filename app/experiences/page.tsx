"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from 'swiper';
import "swiper/css"
import {BsArrowUpRight, BsGithub} from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'API',
        title: 'project 1',
        desc: 'This Telegram bot is designed to provide comprehensive information and entertainment services to users. With features such as daily quotes, breaking news, latest earthquake info, follow text, jokes, and random photos, this bot can be a useful and entertaining virtual friend. The commitment to continuous development ensures that this bot will continue to grow and improve its functionality over time.',
        stack: [{ name: "Javascript" }, { name: "API" }, { name: "Node.js" }],
        image: '/assets/Bot Telegram.png',
        live: "",
        github: "https://github.com/FaizzDevs/Bot-Random-Telegram",
    },
    {
        num: '02',
        category: 'SAR Robot Development',
        title: 'project 2',
        desc: 'The UTY Legacy-TY Robotics Team has successfully developed an innovative SAR robot prototype for KRI 2024. With a hexapod design, autonomous navigation, and AI victim detection, the robot is capable of operating in difficult terrain. Through simulation tests and continuous evaluation, the robot demonstrates reliable performance, supported by team collaboration and cross-field expertise.',
        stack: [{ name: "Arduino" }, { name: "C++" }, { name: "Yolo v8" }],
        image: '/assets/SAR Robot.png',
        live: "",
        github: "",
    },
    {
        num: '03',
        category: 'Netflix-Clone',
        title: 'project 3',
        desc: 'The Netflix Clone project demonstrates the ability to build a modern, responsive, and secure full-stack application. Using Next.js, TypeScript, and Prisma, the project emphasizes authentication, performance, and a user-friendly UI. The project also has the potential to be further developed with premium features and a recommendation system.',
        stack: [{ name: "Next.js" }, { name: "React.js" }, { name: "Typescript" }, { name: "TailwindCSS" }, { name: "MongoDB" }, { name: "Prisma" }, { name: "NextAuth" }],
        image: '/assets/netflix_clone.png',
        live: "",
        github: "https://github.com/FaizzDevs/Netflix-Clone",
    },
    {
        num: '04',
        category: 'Payment-Gateway',
        title: 'project 4',
        desc: 'This project integrates Midtrans services to support online payment processes with various methods such as credit cards, bank transfers, e-wallets, and QRIS. Integration is carried out using the Midtrans API to ensure transactions are safe, fast, and verified in real-time.',
        stack: [{ name: "Next.js" }, { name: "React.js" }, { name: "Javascript" }, { name: "TailwindCSS" }, { name: "Midtrans" }],
        image: '/assets/payment.png',
        live: "",
        github: "https://github.com/FaizzDevs/payment_gateway",
    },
    {
        num: '05',
        category: '3D Portfolio Website – React & Three.js',
        title: 'project 5',
        desc: 'An interactive 3D portfolio website built using React and Three.js. Featuring dynamic visual elements such as objects, lighting effects and smooth navigation to provide a modern and engaging user experience.',
        stack: [{ name: "React.JS" }, { name: "Three.JS" }, { name: "Tailwindcss" }, { name: "GSAP" }],
        image: '/assets/threejs_portofolio.png',
        live: "",
        github: "https://github.com/FaizzDevs/portofolio_three.js",
    },
    {
        num: '06',
        category: 'Youtube-Clone',
        title: 'project 6',
        desc: 'YouTube Clone is a web application project that mimics YouTube’s core features, such as video upload and playback, content search, and dynamic homepage. Built with modern technologies like React, Next.js, and PostgreSQL, the project showcases capabilities in media management, user authentication, and real-time database integration. The project’s main focus is on performance, responsive UI, and seamless user experience.',
        stack: [{ name: "Next.js" }, { name: "React.js" }, { name: "Typescript" }, { name: "TailwindCSS" }],
        image: '/assets/image_youtube.png',
        live: "",
        github: "https://github.com/FaizzDevs/youtube-clone",
    },
    {
        num: '07',
        category: 'Digital Invitation Wedding',
        title: 'project 7',
        desc: 'An interactive digital wedding invitation featuring floral animations, background music, dynamic RSVP with API integration, and a fully responsive, mobile-first design. Optimized for performance and elegant user experience.',
        stack: [{ name: "Next.js" }, { name: "React.js" }, { name: "Framer Motion" }, { name: "Tailwind CSS" }],
        image: '/assets/wedding_invitation.png',
        live: "https://digital-wedding-invitation-henna.vercel.app/design/1",
        github: "",
    },
]

export default function Experience() {
    const [project, setProject] = useState(projects[0]); 

    const handleSlideChange = (swiper: SwiperClass) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };
    
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4, duration: 0.4, ease: "easeIn"
                },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"    >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] ml-6 h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>

                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            <p className="text-white/60">
                                {project.desc}
                            </p>
                            <ul className="flex flex-wrap gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>

                            <div className="border border-white/20"></div>

                            <div className="flex items-center gap-4">
                                <a 
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer"
                                >
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer"
                                >
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] cursor-pointer rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-2xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}    >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index } className="w-full">
                                        <div className="h-[460px] bg-pink-50/20 relative group flex rounded-xl justify-center items-center">
                                            <div className="bg-black/10 absolute w-full h-full rounded-xl top-0 bottom-0 z-10"></div>

                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover rounded-xl" alt="My Projects" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            <WorkSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[20px] w-[35px] h-[35px] flex justify-center items-center transition-all" iconsStyles="" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};