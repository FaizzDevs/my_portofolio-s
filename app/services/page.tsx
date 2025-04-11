"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Web Development",
        desc: "I build responsive and user-friendly websites using the latest technologies.",
        href: ""
    },
    {
        num: "02",
        title: "Mobile Development",
        desc: "I create mobile applications that provide a seamless user experience.",
        href: ""
    },
    {
        num: "03",
        title: "UI/UX Design",
        desc: "I design intuitive and engaging user interfaces for web and mobile applications.",
        href: ""
    },
    {
        num: "04",
        title: "API Development",
        desc: "I develop RESTful APIs to connect your front-end and back-end systems.",
        href: ""
    },
];

import { motion } from "framer-motion";

export default function Services() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        transition: { 
                            delay: 2.4, 
                            duration: 0.5, 
                            ease: "easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]" >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-4xl font-extrabold text-outline text-transparent transition-all group-hover-outline duration-500">
                                        {service.num}
                                    </div>
                                    <Link 
                                        href={service.href} 
                                        className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-xl" />
                                    </Link>
                                </div>
                                <h2 className="text-[25px] xl:text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                <p className="text-white/60">{service.desc}</p>
                                <div className="border-b border-white/20 w-full">

                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};