import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Amazon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Student Researcher
        <span className="text-textGreen tracking-wide">@CSIS Dept BITS Goa</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Working under Prof. Vinayak Naik on Analysis of CDNs using Programmable Network Switches.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Involved setting up the Programmable Switch (Edgecore Wedge 100BF-32X), our team being the only apart from IIITH to work with it in India.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Analysis on how CDNs differ on various networking parameters for our region, with a focus on latency.
        </li>
      </ul>
    </motion.div>
  );
};

export default Amazon;
