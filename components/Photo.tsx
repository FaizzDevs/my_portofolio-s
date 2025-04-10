"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
    return (
        <div className="w-full h-full mr-72 relative flex justify-center items-center">
            <motion.div>
                <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-8 border-accent/50 flex justify-center items-center">
                    <Image 
                        src="/assets/IMG_6237.jpg" 
                        width={500}
                        height={500}
                        // priority 
                        quality={100} 
                        alt="My Photo" 
                        className="object-contain" />
                </div>
            </motion.div>
        </div>
    );
};

