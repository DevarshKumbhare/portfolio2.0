import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import the Scene component (robot animation)
const Scene = dynamic(() => import("./components/Scene"), { ssr: false });

const Banner = () => {
  return (
    <section
      id="home"
      className="relative max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-8 mdl:px-10 xl:px-4"
    >
      {/* Right Section - Robot Animation */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] z-50 lg:block hidden">
        <Scene />
      </div>

      {/* Left Section - Banner Content */}
      <div className="flex-1 mt-16">
        <div className="lgl:gap-8">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg font-titleFont tracking-wide text-textGreen"
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col mt-4"
        >
          Devarsh Kumbhare.
          <span className="text-textDark mt-2">
            I build tech that matters.
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-base md:max-w-[650px] text-textDark font-medium mt-4"
        >
          I am a student, developer, and an AI enthusiast. I have a strong foundation in 
          front-end & back-end development and am skilled in creating user-friendly and 
          responsive web applications, along with a stronghold in Machine Learning principles.{" "}
          <a href="https://www.linkedin.com/in/devarsh-kumbhare-14a8a925a/" target="_blank">
            {" "}
            <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
              Learn more
              <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </span>
          </a>
        </motion.p>
        <a href="https://github.com/DevarshKumbhare" target="_blank">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 mt-4"
          >
            Check out my projects!
          </motion.button>
        </a>
      </div>
</div>
      {/* Mobile View - Robot Animation */}
      <div className="block lg:hidden mt-8 w-full h-[300px]">
        <Scene />
      </div>
    </section>
  );
};

export default Banner;
