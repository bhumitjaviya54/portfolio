import { motion } from "framer-motion"
import { IoCodeSlash } from "react-icons/io5";
import { TiArrowForward } from "react-icons/ti";

const First = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full">
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide py-1"><IoCodeSlash /></span>
        Learning HTML & CSS
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        In May 2022
      </p>
      <ul>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          An HTML & CSS learner is someone starting to grasp web development <br /> basics, focusing on structuring web pages with HTML and styling them <br /> with CSS to create visually appealing websites.
        </li>
      </ul>
    </motion.div>
  )
}

export default First
