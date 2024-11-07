import { motion } from "framer-motion"
import { IoCodeSlash } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Eight = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full">
            <h3 className="flex gap-1 text-xl font-medium font-titleFont">
                <span className="py-1 tracking-wide text-textGreen"><IoCodeSlash /></span>
                Launched Tic Tac Toe Game
            </h3>
            <p className="mt-1 text-sm font-medium text-textDark">
                In June 2024
            </p>
            <ul>
                <li className="flex gap-2 text-base text-textDark">
                </li>
                <a href="https://playgrid.netlify.app/" className="flex gap-1 text-textGreen">
                    <span className="mt-1 text-textGreen">
                        <FaLink />
                    </span>
                    Proof
                    <span className="text-2xl transition duration-150 ease-in-out text-textGreen" aria-hidden="true">
                        <MdKeyboardDoubleArrowRight />
                    </span>
                </a>
            </ul>
        </motion.div>
    )
}

export default Eight