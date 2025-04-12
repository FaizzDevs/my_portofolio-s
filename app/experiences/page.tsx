"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import {BsArrowUpRight, BsGithub} from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link"
import Image from "next/image";

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nam eos impedit praesentium totam? Accusantium voluptatum eum maiores molestias velit?',
        stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" }],
        image: '/assets/placeholder.svg',
        live: "",
        github: "",
    },
    {
        num: '02',
        category: 'backend',
        title: 'project 2',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nam eos impedit praesentium totam? Accusantium voluptatum eum maiores molestias velit?',
        stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" }, { name: "Next.js" }],
        image: '/assets/placeholder.svg',
        live: "",
        github: "",
    },
    {
        num: '03',
        category: 'fullstack',
        title: 'project 3',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nam eos impedit praesentium totam? Accusantium voluptatum eum maiores molestias velit?',
        stack: [{ name: "HTML 5" }, { name: "Tailwindcss" }, { name: "Javascript" }, { name: "Next.js" }, { name: "Supabase" }],
        image: '/assets/placeholder.svg',
        live: "",
        github: "",
    },
]

export default function Experience() {
    const [project, setProject] = useState(projects[0]); 

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"    >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div>
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">slider</div>
                </div>
            </div>
        </motion.section>
    );
};