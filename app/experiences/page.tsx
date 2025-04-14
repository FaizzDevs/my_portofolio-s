"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from 'swiper';
import "swiper/css"
import {BsGithub} from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link"
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'API',
        title: 'project 1',
        desc: 'Bot Telegram ini dirancang untuk memberikan layanan informasi dan hiburan yang komprehensif kepada pengguna. Dengan fitur-fitur seperti kutipan harian, berita terkini, info gempa terbaru, follow text, jokes, dan foto acak, bot ini dapat menjadi teman virtual yang bermanfaat dan menghibur. Komitmen terhadap pengembangan berkelanjutan memastikan bot ini akan terus berkembang dan meningkatkan fungsionalitasnya seiring berjalannya waktu.',
        stack: [{ name: "Javascript" }, { name: "API" }, { name: "Node.js" }],
        image: '/assets/Bot Telegram.png',
        live: "",
        github: "https://github.com/FaizzDevs/Bot-Random-Telegram",
    },
    {
        num: '02',
        category: 'SAR Robot Development',
        title: 'project 2',
        desc: 'Tim Robotika UTY Legacy-TY berhasil mengembangkan prototipe robot SAR inovatif untuk KRI 2024. Dengan desain hexapod, navigasi otonom, dan AI deteksi korban, robot mampu beroperasi di medan sulit. Melalui uji simulasi dan evaluasi berkelanjutan, robot menunjukkan performa andal, didukung kolaborasi tim dan keahlian lintas bidang.',
        stack: [{ name: "Arduino" }, { name: "C++" }, { name: "Yolo v8" }],
        image: '/assets/SAR Robot.png',
        live: "",
        github: "",
    },
    {
        num: '03',
        category: 'Netflix-Clone',
        title: 'project 3',
        desc: 'Proyek Netflix Clone menunjukkan kemampuan dalam membangun aplikasi full-stack modern yang responsif dan aman. Menggunakan Next.js, TypeScript, dan Prisma, proyek ini menekankan autentikasi, performa, dan UI yang user-friendly. Proyek ini juga memiliki potensi untuk dikembangkan lebih lanjut dengan fitur premium dan sistem rekomendasi.',
        stack: [{ name: "Next.js" }, { name: "React.js" }, { name: "Typescript" }, { name: "TailwindCSS" }, { name: "MongoDB" }, { name: "Prisma" }, { name: "NextAuth" }],
        image: '/assets/netflix_clone.png',
        live: "",
        github: "https://github.com/FaizzDevs/Netflix-Clone",
    },
    {
        num: '04',
        category: 'Youtube-Clone',
        title: 'project 4',
        desc: 'YouTube Clone adalah proyek aplikasi web yang meniru fitur inti YouTube, seperti unggah dan pemutaran video, pencarian konten, serta tampilan beranda dinamis. Dibangun dengan teknologi modern seperti React, Next.js, dan Firebase, proyek ini menunjukkan kemampuan dalam pengelolaan media, autentikasi pengguna, dan integrasi database real-time. Fokus utama proyek ini adalah pada performa, UI responsif, dan pengalaman pengguna yang mulus.',
        stack: [{ name: "Next.js" }, { name: "React.js" }, { name: "Typescript" }, { name: "TailwindCSS" }],
        image: '/assets/ON GOING.png',
        live: "",
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
                                {/* <Link href={project.live} className="cursor-pointer">
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
                                </Link> */}

                                <Link href={project.github}>
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