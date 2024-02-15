import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import { RiTeamFill, RiArrowDownSLine } from "react-icons/ri";

//components
import DevImg from "./DevImg";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Full Stack Developer
            </div>
            <h1 className="h1 mb-4">Hi, my name is Alvaro Fernandes</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Hey there! I&#39;m Alvaro, a dynamic and innovative Full Stack
              Developer on a mission to transform digital landscapes. With a
              passion for crafting seamless, user-centric interfaces, I thrive
              in the ever-evolving world of technology.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 ">
              <Link href="/contacts">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />{" "}
                </Button>
              </Link>
              <Button variant="secundary" className="gap-x-2">
                Download CV <Download size={18} />{" "}
              </Button>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary trasition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex realtive">
            <div className="bg-hero_shape_light dark:bg-hero_shape_dark w-[500px] h-[500px] bg-no-repeat relative -top-1 -right-2 ">
              <DevImg
                containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc=""
              />
            </div>
          </div>
        </div>
        {/* Icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
