import Photo from "@/components/Photo";
import Sosialmedia from "@/components/Sosialmedia";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () =>{
    return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center mx-10 xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">Hello I am <br /> 
              <span className="text-accent">Muhammad Faizz</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-8">
              <Button 
                variant="outline" 
                className="rounded-full uppercase flex items-center gap-2" 
                size="lg">
                <a href="/assets/Faizz-CV.pdf" download className="flex items-center gap-2">
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
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;