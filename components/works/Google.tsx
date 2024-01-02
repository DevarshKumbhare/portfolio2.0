import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Student Researcher
        <span className="text-textGreen tracking-wide">@CSIS Dept, BITS Goa</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Working under Prof. Snehanshu Saha , Prof. Sravan Danda , Prof. Suman Kundu of the CSIS Dept.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          We are working on an improvement to the existing detecting methodologies to a deadly disease Beta Thallasemia
          by using better and sophisticated Deep Learning methodologies on Complete Blood Count parameters of a patient 
          for medical applications
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          We are under works to share our improvements and in talks with healthcare professionals on potential medical applications
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
