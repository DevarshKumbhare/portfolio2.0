import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Smart Parking using License Plate Recognision"
          des=" Worked on a project to implement Smart-Parking
           using License Plate Recognision for parking spaces using various technologies in a  fullstack framework."
          listItem={["React.js", "Express.js", "PostgreSQL", "Node.js", "OpenCV", "Springboot"]}
          link="https://github.com/DevarshKumbhare/Smart_parking_LPR"
        />
        <ArchiveCard
          title="IPL Win Predictor"
          des=" Used previous 15+ years data on IPL/T20 cricket to train various models to 
          predict an IPL team's chances of winning against any opponent and for any match senario."
          listItem={["Tailwind", "Flask", "Machine Learning"]}
          link="https://github.com/DevarshKumbhare/IPLpredictor"
        />
        <ArchiveCard
          title="Workout Tracker"
          des="A fullstack application that helps users both track their workouts among a selected few and its duration
          and also tracks calorie intake. the app tracks users progress accordingly and provides advice on improvements."
          listItem={["MongoDB", "React.js", "Express.js"]}
          link="https://github.com/DevarshKumbhare/Workout-tracking-app"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="QuickSEE"
                des="This app gives the current weather at the location entered. 
                It provides useful data in clean and interactive UI and gives activities/ suggestions
                 depending on the weather."
                listItem={["Tailwind", "Javascript", "APIs"]}
                link="https://github.com/DevarshKumbhare/QuickSEE"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Spotify Clone 1.0"
                des="Recreated the main desktop UI of Spotify and the functionality of playing music from a 
                selected library of songs"
                listItem={["HTML", "CSS", "Javascript"]}
                link="https://github.com/DevarshKumbhare/Spotify_Clone"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Stock Market predicting Algorithms"
                des="uses techical analysis and other ML algorithms to predict 
                stock market movements, specifically for equities in the NIFTY50"
                listItem={["Python","Finanace Libraries"]}
                link="https://github.com/DevarshKumbhare/Algo_backtest"
              />
            </motion.div>         
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
