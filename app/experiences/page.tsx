/* eslint-disable jsx-a11y/alt-text */
"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import {BsArrowUpRight, BsGithub} from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link"
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nam eos impedit praesentium totam? Accusantium voluptatum eum maiores molestias velit?',
        stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Javascript" }],
        image: '/assets/placeholder.svg',
        live: "",
        github: "",
    },
    {
        num: '02',
        category: 'backend',
        title: 'project 2',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nam eos impedit praesentium totam? Accusantium voluptatum eum maiores molestias velit?',
        stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Javascript" }, { name: "Next.js" }],
        image: '/assets/placeholder.svg',
        live: "",
        github: "",
    },
    {
        num: '03',
        category: 'fullstack',
        title: 'project 3',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nam eos impedit praesentium totam? Accusantium voluptatum eum maiores molestias velit?',
        stack: [{ name: "HTML5" }, { name: "Tailwindcss" }, { name: "Javascript" }, { name: "Next.js" }, { name: "Supabase" }],
        image: '/assets/placeholder.svg',
        live: "",
        github: "",
    },
]

export default function Experience() {
    const [project, setProject] = useState(projects[0]); 

    const handleSlideChange = (swiper) => {
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
                                <Link href={project.live} className="cursor-pointer">
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
                                </Link>

                                <Link href={project.github} className="cursor-pointer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-2xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
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
                                        <div className="h-[460px] bg-pink-50/20 relative group flex justify-center items-center">
                                            <div className="bg-black/10 absolute w-full h-full top-0 bottom-0 z-10"></div>

                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" alt="My Projects" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            <WorkSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[20px] w-[35px] h-[35px] flex justify-center items-center transition-all" iconsStyles={undefined} />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};