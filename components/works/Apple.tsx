import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        SDE Intern
        <span className="text-textGreen tracking-wide">@TCS Ultimatix</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2024 - Aug 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          CodifAI is a tool for automating financial and legal contract obligations and deadlines, handling a volume of over 20,000 contracts per year.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Involved in Feature Enhancements in backend(Flask), specifically in Sectioning contracts to improve overall accuracy by 9.4%
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Furthermore, implemented AES(192-bit) for upcoming production servers and analyzed flaws in classifications and worked towards improvements.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
