"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
    return (
        <div className="w-full xl:mr-72 h-full relative flex justify-center items-center">
            <motion.div
                className="relative" 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        delay: 2,
                        duration: 0.4,
                        ease: "easeIn",
                    }
                }} >

                {/* lingkaran luar */}
                <motion.svg 
                    className="absolute -inset-[10px] w-[200px] h-[200px] md:w-[270px] md:h-[270px] lg:w-[390px] lg:h-[390px]"
                    viewBox="0 0 300 300"
                    fill="transparent"
                    xmlns="http://www.w3.org/2000/svg" >
                        <motion.circle
                            cx="150"
                            cy="150"
                            r="146"
                            stroke="#00ff99"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ strokeDasharray: "24 10 0 0" }}
                            animate={{
                                strokeDasharray: ["15 120 25 25", "15 25 92 72", "4 250 22 22"],
                                rotate: [120, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }} />
                </motion.svg>
                
                {/* lingkaran image */}
                <motion.div 
                    className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[370px] lg:h-[370px] rounded-full overflow-hidden relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                        delay: 2.5,
                        duration: 0.4,
                        ease: "easeInOut",
                        }
                    }} >

                    <Image 
                        src="/assets/IMG_6237.jpg"
                        alt="My PHoto"
                        fill
                        quality={100}
                        className="object-cover"
                           />
                </motion.div>
            </motion.div>
        </div>
    );
};

