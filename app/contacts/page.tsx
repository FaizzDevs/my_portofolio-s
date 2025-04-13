"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        desc: "(+62) 852-9338-7788"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        desc: "mfaizalizza@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        desc: "Jepara, Central Java"
    },
];

import { motion } from "framer-motion";

const Contacts = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4, 
                    duration: 0.4,
                    ease: "easeIn"
                },
            }}
            className="py-6"    >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] mx-4 order-2 xl:order-none">
                        <form className="flex flex-col bg-[#27272C] gap-6 p-10 rounded-xl" action="">
                            <h3 className="text-3xl text-accent">Let's Work Together</h3>
                            <p className="text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum rem beatae quo dolor!</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="fisrtname" placeholder="Firstname" />
                                <Input type="lastname" placeholder="Lastname" />
                                <Input type="email" placeholder="Email Address" />
                                <Input type="phone" placeholder="Phone Number" />
                            </div>

                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a Service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">Front End</SelectItem>
                                        <SelectItem value="mst">Back End</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea className="h-[200px]" placeholder="Type your message here." />

                            <Button size="lg" className="max-w-40 cursor-pointer bg-accent text-primary rounded-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className=" ml-6 flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272C] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[20px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.desc}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </motion.section>
    );
};

export default Contacts;