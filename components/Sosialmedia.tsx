import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/FaizzDevs'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/muhammad-faiz-al-izza-2171ab29a/'},
    {icon: <FaWhatsapp />, path: 'https://wa.me/085293387788'},
    {icon: <FaInstagram />, path: 'https://www.instagram.com/faizalizza_/'},
]

interface SosialmediaProps {
    containerStyles?: string;
    iconStyles?: string;
}

const Sosialmedia = ({containerStyles, iconStyles}: SosialmediaProps) => {
    return (
        <div className={`${containerStyles}`}>
            {socials.map((social, index) => (
                <Link href={social.path} key={index} className={`text-accent hover:text-accent/70 ${iconStyles}`}>
                    {social.icon}
                </Link>
            ))}
        </div>
    );
};

export default Sosialmedia;