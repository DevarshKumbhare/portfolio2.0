import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        SDE Intern
        <span className="text-textGreen tracking-wide">@Ascent Cybersolutions</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2023 - Aug 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked on a project to implement Smart-Parking using License Plate Recognision for parking spaces
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work in a variety of different roles using a fullstack framework and implementing complex algorithms 
          for efficient parking andL icense Plate Recognision system.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate effectively and Lead the team through various processes to ensure the delivery of final product.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
