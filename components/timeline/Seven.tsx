import { motion } from "framer-motion"
import { FaReact } from "react-icons/fa6";
import { TiArrowForward } from "react-icons/ti";

const Seven = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full">
            <h3 className="flex gap-1 text-xl font-medium font-titleFont">
                <span className="py-1 tracking-wide text-textGreen"><FaReact /></span>
                ReactJS
            </h3>
            <p className="mt-1 text-sm font-medium text-textDark">
                In Feb 2024
            </p>
            <ul>
                <li className="flex gap-2 text-base text-textDark">
                    <span className="mt-1 text-textGreen">
                        <TiArrowForward />
                    </span>
                    ReactJS is a JavaScript library for building interactive user interfaces, <br /> primarily for single-page applications. Developed by Facebook, it <br /> allows developers to create reusable UI components and manage <br /> complex user interactions efficiently through a virtual DOM, <br /> enabling fast rendering and responsive user experiences.
                </li>
            </ul>
        </motion.div>
    )
}

export default Seven