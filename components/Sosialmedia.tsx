import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: ''},
    {icon: <FaLinkedinIn />, path: ''},
    {icon: <FaWhatsapp />, path: ''},
    {icon: <FaInstagram />, path: ''},
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