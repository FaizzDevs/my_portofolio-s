import Photo from "@/components/Photo";
import Sosialmedia from "@/components/Sosialmedia";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () =>{
    return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center mx-10 xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full-Stack Developer</span>
            <h1 className="h1 mb-6">Hello I&apos;m <br /> 
              <span className="text-accent">Muhammad Faizz</span>
            </h1>
            <p className="max-w-[700px] mb-4 text-white/80">
            {`Hi, I'm Faizz — a Fullstack Developer from Indonesia 🇮🇩 passionate about building interactive and scalable web apps. I work with TypeScript, Next.js, React, Tailwind CSS, and Node.js to deliver clean code and great UX. I’ve built projects like digital wedding invitations, OBE education dashboards, and creative 3D web experiences with Three.js. Graduated cum laude in Informatics, I’ve also led robotics teams and love bridging software with real-world impact.`}
            </p>
            <p className="max-w-[700px] mb-9 text-white/80">Let’s connect and build something great!</p>
            <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-8">
              <Button 
                variant="outline" 
                className="rounded-full uppercase flex items-center gap-2" 
                size="lg">
                <a href="https://drive.google.com/file/d/1Cpt-SgGdkCvS_zVT9Jr-QlHXdVhbdvfl/view?usp=sharing" download className="flex items-center gap-2">
                  <FiDownload /> Download CV
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Sosialmedia 
                  containerStyles="flex items-center gap-4" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-10 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;